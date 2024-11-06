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

package com.bytechef.automation.configuration.codeworkflow.service;

import com.bytechef.automation.configuration.codeworkflow.domain.ProjectCodeWorkflow;
import com.bytechef.automation.configuration.domain.Project;
import com.bytechef.platform.codeworkflow.configuration.domain.CodeWorkflowContainer;

/**
 * @author Ivica Cardic
 */
public interface ProjectCodeWorkflowService {

    ProjectCodeWorkflow create(CodeWorkflowContainer codeWorkflowContainer, Project projectCodeWorkflow);
}