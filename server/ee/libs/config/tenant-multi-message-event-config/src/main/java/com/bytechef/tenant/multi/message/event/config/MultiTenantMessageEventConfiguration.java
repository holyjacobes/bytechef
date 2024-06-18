/*
 * Copyright 2023-present ByteChef Inc.
 *
 * Licensed under the ByteChef Enterprise license (the "Enterprise License");
 * you may not use this file except in compliance with the Enterprise License.
 */

package com.bytechef.tenant.multi.message.event.config;

import com.bytechef.message.event.MessageEventPostReceiveProcessor;
import com.bytechef.message.event.MessageEventPreSendProcessor;
import com.bytechef.tenant.TenantContext;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @version ee
 *
 * @author Ivica Cardic
 */
@Configuration
@ConditionalOnProperty(value = "bytechef.tenant.mode", havingValue = "multi")
@ConditionalOnEEVersion
public class MultiTenantMessageEventConfiguration {

    private static final String TENANT_ID = "TENANT_ID";

    @Bean
    MessageEventPreSendProcessor messagePreSendProcessor() {
        return messageEvent -> {
            messageEvent.putMetadata(TENANT_ID, TenantContext.getCurrentTenantId());

            return messageEvent;
        };
    }

    @Bean
    MessageEventPostReceiveProcessor messagePostReceiveProcessor() {
        return messageEvent -> {
            TenantContext.setCurrentTenantId((String) messageEvent.getMetadata(TENANT_ID));

            return messageEvent;
        };
    }
}
