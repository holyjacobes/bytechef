package com.bytechef.component.email;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.bytechef.component.definition.ActionContext;
import com.bytechef.component.definition.FileEntry;
import com.bytechef.component.definition.Parameters;
import com.bytechef.component.email.action.SendEmailAction;
import jakarta.mail.AuthenticationFailedException;
import jakarta.mail.MessagingException;
import jakarta.mail.SendFailedException;
import jakarta.mail.Transport;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;

import java.util.List;
import java.util.Map;

import static com.bytechef.component.email.action.SendEmailAction.*;
import static com.bytechef.component.definition.Authorization.*;
import static com.bytechef.component.email.constant.EmailConstants.*;

class SendEmailActionTest {

    private Parameters inputParameters;
    private Parameters connectionParameters;
    private ActionContext context;

    @BeforeEach
    public void setUp() {
        inputParameters = mock(Parameters.class);
        connectionParameters = mock(Parameters.class);
        context = mock(ActionContext.class);
    }

    @Test
    void testPerform_Success() throws Exception {
        // inputParameters mock
        when(inputParameters.getRequiredString(FROM)).thenReturn("from@test.com");
        when(inputParameters.getRequiredList(TO, String.class)).thenReturn(List.of("to@test.com"));
        when(inputParameters.containsKey(CC)).thenReturn(false);
        when(inputParameters.containsKey(BCC)).thenReturn(false);
        when(inputParameters.containsKey(REPLY_TO)).thenReturn(false);
        when(inputParameters.containsKey(SUBJECT)).thenReturn(true);
        when(inputParameters.getString(SUBJECT)).thenReturn("subject");
        when(inputParameters.getRequiredString(CONTENT)).thenReturn("test email.");

        // connection parametre mock
        when(connectionParameters.getRequiredString(HOST)).thenReturn("smtp.test.com");
        when(connectionParameters.getRequiredInteger(PORT)).thenReturn(587);
        when(connectionParameters.getBoolean(TLS)).thenReturn(true);
        when(connectionParameters.containsKey(USERNAME)).thenReturn(true);
        when(connectionParameters.getRequiredString(USERNAME)).thenReturn("test");
        when(connectionParameters.getRequiredString(PASSWORD)).thenReturn("pass");

        // try perform()
        try (MockedStatic<Transport> transportMock = mockStatic(Transport.class)) {
            Object result = SendEmailAction.perform(inputParameters, connectionParameters, context);

            // overenie ze bola poslana poziadavka
            transportMock.verify(() -> Transport.send(any()), times(1));

            // perform vracia null() - validny vystup
            assertNull(result);
        }
    }

    @Test
    void testPerform_MissingFromParameter() {
        // inputParameters bez required FROM parametra
        when(inputParameters.getRequiredList(TO, String.class)).thenReturn(List.of("to@test.com"));
        when(inputParameters.containsKey(SUBJECT)).thenReturn(true);
        when(inputParameters.getString(SUBJECT)).thenReturn("subject");
        when(inputParameters.getRequiredString(CONTENT)).thenReturn("test email.");

        // connection parametre mock
        when(connectionParameters.getRequiredString(HOST)).thenReturn("smtp.test.com");
        when(connectionParameters.getRequiredInteger(PORT)).thenReturn(587);
        when(connectionParameters.getBoolean(TLS)).thenReturn(true);
        when(connectionParameters.containsKey(USERNAME)).thenReturn(true);
        when(connectionParameters.getRequiredString(USERNAME)).thenReturn("test");
        when(connectionParameters.getRequiredString(PASSWORD)).thenReturn("pass");

        // ocakavana exception - nemoze prejst ak nema jeden z required parametrov
        assertThrows(NullPointerException.class, () -> {
            SendEmailAction.perform(inputParameters, connectionParameters, context);
        });
    }

    @Test
    void testPerform_MissingToParameter() {
        // nedavam TO parameter
        when(inputParameters.getRequiredString(FROM)).thenReturn("from@test.com");
        when(inputParameters.containsKey(SUBJECT)).thenReturn(true);
        when(inputParameters.getString(SUBJECT)).thenReturn("subject");
        when(inputParameters.getRequiredString(CONTENT)).thenReturn("test email.");

        // connection parametre mock
        when(connectionParameters.getRequiredString(HOST)).thenReturn("smtp.test.com");
        when(connectionParameters.getRequiredInteger(PORT)).thenReturn(587);
        when(connectionParameters.getBoolean(TLS)).thenReturn(true);
        when(connectionParameters.containsKey(USERNAME)).thenReturn(true);
        when(connectionParameters.getRequiredString(USERNAME)).thenReturn("test");
        when(connectionParameters.getRequiredString(PASSWORD)).thenReturn("pass");

        // Expected exception - neda sa poslat bez TO parametra
        assertThrows(SendFailedException.class, () -> {
            SendEmailAction.perform(inputParameters, connectionParameters, context);
        });
    }

    @Test
    void testPerform_MissingSubjectParameter() {
        when(inputParameters.getRequiredString(FROM)).thenReturn("from@test.com");
        when(inputParameters.getRequiredList(TO, String.class)).thenReturn(List.of("to@test.com"));
        when(inputParameters.containsKey(SUBJECT)).thenReturn(false);
        when(inputParameters.getRequiredString(CONTENT)).thenReturn("test email.");

        when(connectionParameters.getRequiredString(HOST)).thenReturn("smtp.test.com");
        when(connectionParameters.getRequiredInteger(PORT)).thenReturn(587);
        when(connectionParameters.getBoolean(TLS)).thenReturn(true);
        when(connectionParameters.containsKey(USERNAME)).thenReturn(true);
        when(connectionParameters.getRequiredString(USERNAME)).thenReturn("test");
        when(connectionParameters.getRequiredString(PASSWORD)).thenReturn("pass");

        assertThrows(MessagingException.class, () -> {
            SendEmailAction.perform(inputParameters, connectionParameters, context);
        });
    }

    @Test
    void testPerform_MissingUsernameParameter() {
        when(inputParameters.getRequiredString(FROM)).thenReturn("from@test.com");
        when(inputParameters.getRequiredList(TO, String.class)).thenReturn(List.of("to@test.com"));
        when(inputParameters.containsKey(SUBJECT)).thenReturn(true);
        when(inputParameters.getString(SUBJECT)).thenReturn("subject");
        when(inputParameters.getRequiredString(CONTENT)).thenReturn("test email.");

        // bez username parametra
        when(connectionParameters.getRequiredString(HOST)).thenReturn("smtp.test.com");
        when(connectionParameters.getRequiredInteger(PORT)).thenReturn(587);
        when(connectionParameters.getBoolean(TLS)).thenReturn(true);
        when(connectionParameters.containsKey(USERNAME)).thenReturn(true);
        when(connectionParameters.getRequiredString(PASSWORD)).thenReturn("pass");

        // auth failed error - nema username
        assertThrows(AuthenticationFailedException.class, () -> {
            SendEmailAction.perform(inputParameters, connectionParameters, context);
        });
    }

    @Test
    void testPerform_MissingPasswordParameter() {
        when(inputParameters.getRequiredString(FROM)).thenReturn("from@test.com");
        when(inputParameters.getRequiredList(TO, String.class)).thenReturn(List.of("to@test.com"));
        when(inputParameters.containsKey(SUBJECT)).thenReturn(true);
        when(inputParameters.getString(SUBJECT)).thenReturn("subject");
        when(inputParameters.getRequiredString(CONTENT)).thenReturn("test email.");

        // bez password parametra
        when(connectionParameters.getRequiredString(HOST)).thenReturn("smtp.test.com");
        when(connectionParameters.getRequiredInteger(PORT)).thenReturn(587);
        when(connectionParameters.getBoolean(TLS)).thenReturn(true);
        when(connectionParameters.containsKey(USERNAME)).thenReturn(true);
        when(connectionParameters.getRequiredString(USERNAME)).thenReturn("test");

        // auth failed error - nema passwd
        assertThrows(AuthenticationFailedException.class, () -> {
            SendEmailAction.perform(inputParameters, connectionParameters, context);
        });
    }
}
