
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

package com.bytechef.hermes.component.definition;

import com.bytechef.hermes.definition.Display;
import com.bytechef.hermes.definition.Resources;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;
import java.util.Map;

/**
 * Used for specifying a component.
 *
 * @author Ivica Cardic
 */
@JsonDeserialize(as = ComponentDSL.ModifiableComponentDefinition.class)
@Schema(
    name = "ComponentDefinition",
    description = "A component contains a set of reusable code(actions) that accomplish specific tasks, triggers(TODO) and connections if there is a need for a connection to an outside service.")
public sealed interface ComponentDefinition permits ComponentDSL.ModifiableComponentDefinition {

    @Schema(name = "actions", description = "The list of all available actions the component can perform.")
    List<? extends ActionDefinition> getActions();

    ConnectionDefinition getConnection();

    Display getDisplay();

    @Schema(name = "metadata", description = "Additional data that can be used during processing.")
    Map<String, Object> getMetadata();

    @Schema(name = "name", description = "The component name.")
    String getName();

    Resources getResources();

    @Schema(name = "version", description = "The component version.")
    int getVersion();
}
