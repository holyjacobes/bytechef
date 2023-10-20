
/*
 * Copyright 2021 <your company/name>.
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

package com.bytechef.component.pipedrive;

import com.bytechef.hermes.component.OpenApiComponentHandler;
import com.bytechef.hermes.definition.DefinitionDSL;
import com.google.auto.service.AutoService;

/**
 * @generated
 * @author Ivica Cardic
 */
@AutoService(OpenApiComponentHandler.class)
public class PipedriveComponentHandler extends AbstractPipedriveComponentHandler {

    @Override
    public DefinitionDSL.ModifiableDisplay modifyDisplay(DefinitionDSL.ModifiableDisplay modifiableDisplay) {
        return modifiableDisplay.description(
            "The first CRM designed by salespeople, for salespeople. Do more to grow your business.");
    }
}
