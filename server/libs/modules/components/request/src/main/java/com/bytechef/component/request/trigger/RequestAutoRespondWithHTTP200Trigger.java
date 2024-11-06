/*
 * Copyright 2023-present ByteChef Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytechef.component.request.trigger;

import static com.bytechef.component.definition.ComponentDsl.trigger;

import com.bytechef.component.definition.ComponentDsl.ModifiableTriggerDefinition;
import com.bytechef.component.definition.TriggerDefinition.TriggerType;
import com.bytechef.component.request.util.RequestUtils;

/**
 * @author Ivica Cardic
 */
public class RequestAutoRespondWithHTTP200Trigger {

    public static final ModifiableTriggerDefinition TRIGGER_DEFINITION = trigger("autoRespondWithHTTP200")
        .title("Auto Respond with HTTP 200 Status")
        .description(
            "The request trigger always replies immediately with an HTTP 200 status code in response to any incoming workflow request request. This guarantees execution of the request trigger, but does not involve any validation of the received request.")
        .type(TriggerType.STATIC_WEBHOOK)
        .output()
        .webhookRequest(RequestUtils::getRequestResult);
}