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

package com.bytechef.automation.configuration.service;

import com.bytechef.automation.configuration.domain.ProjectInstanceWorkflow;
import com.bytechef.automation.configuration.domain.ProjectInstanceWorkflowConnection;
import com.bytechef.automation.configuration.repository.ProjectInstanceWorkflowRepository;
import com.bytechef.commons.util.OptionalUtils;
import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.apache.commons.lang3.Validate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Ivica Cardic
 */
@Service
@Transactional
public class ProjectInstanceWorkflowServiceImpl implements ProjectInstanceWorkflowService {

    private final ProjectInstanceWorkflowRepository projectInstanceWorkflowRepository;

    @SuppressFBWarnings("EI")
    public ProjectInstanceWorkflowServiceImpl(
        ProjectInstanceWorkflowRepository projectInstanceWorkflowRepository) {

        this.projectInstanceWorkflowRepository = projectInstanceWorkflowRepository;
    }

    @Override
    public ProjectInstanceWorkflow create(ProjectInstanceWorkflow projectInstanceWorkflow) {
        return projectInstanceWorkflowRepository.save(projectInstanceWorkflow);
    }

    @Override
    public List<ProjectInstanceWorkflow> create(List<ProjectInstanceWorkflow> projectInstanceWorkflows) {
        return projectInstanceWorkflowRepository.saveAll(projectInstanceWorkflows);
    }

    @Override
    public void delete(long id) {
        projectInstanceWorkflowRepository.deleteById(id);
    }

    @Override
    public void deleteProjectInstanceWorkflows(long projectInstanceId, List<Long> exclude) {
        projectInstanceWorkflowRepository.findAllByProjectInstanceId(projectInstanceId)
            .stream()
            .filter(projectInstanceWorkflow -> !exclude.contains(projectInstanceWorkflow.getId()))
            .forEach(projectInstanceWorkflowRepository::delete);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<ProjectInstanceWorkflowConnection> fetchProjectInstanceWorkflowConnection(
        long projectInstanceId, String workflowId, String workflowNodeName, String workflowConnectionKey) {

        return getProjectInstanceWorkflow(projectInstanceId, workflowId)
            .getConnections()
            .stream()
            .filter(projectInstanceWorkflowConnection -> Objects
                .equals(projectInstanceWorkflowConnection.getWorkflowNodeName(), workflowNodeName) &&
                Objects.equals(projectInstanceWorkflowConnection.getKey(), workflowConnectionKey))
            .findFirst();
    }

    @Override
    public ProjectInstanceWorkflow getProjectInstanceWorkflow(long projectInstanceWorkflowId) {
        return OptionalUtils.get(projectInstanceWorkflowRepository.findById(projectInstanceWorkflowId));
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProjectInstanceWorkflowConnection> getProjectInstanceWorkflowConnections(
        long projectInstanceId, String workflowId, String workflowNodeName) {

        return getProjectInstanceWorkflow(projectInstanceId, workflowId)
            .getConnections()
            .stream()
            .filter(
                projectInstanceWorkflowConnection -> Objects.equals(
                    projectInstanceWorkflowConnection.getWorkflowNodeName(), workflowNodeName))
            .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public ProjectInstanceWorkflow getProjectInstanceWorkflow(long projectInstanceId, String workflowId) {
        Validate.notNull(workflowId, "'workflowId' must not be null");

        return OptionalUtils.get(
            projectInstanceWorkflowRepository.findByProjectInstanceIdAndWorkflowId(projectInstanceId, workflowId));
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProjectInstanceWorkflow> getProjectInstanceWorkflows(long projectInstanceId) {
        return projectInstanceWorkflowRepository.findAllByProjectInstanceId(projectInstanceId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProjectInstanceWorkflow> getProjectInstanceWorkflows(List<Long> projectInstanceIds) {
        Validate.notNull(projectInstanceIds, "'projectInstanceIds' must not be null");

        return projectInstanceWorkflowRepository.findAllByProjectInstanceIdIn(projectInstanceIds);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean isConnectionUsed(long connectionId) {
        return !projectInstanceWorkflowRepository.findProjectInstanceWorkflowConnectionIdsByConnectionId(connectionId)
            .isEmpty();
    }

    @Override
    @Transactional(readOnly = true)
    public boolean isProjectInstanceWorkflowEnabled(long projectInstanceId, String workflowId) {
        ProjectInstanceWorkflow projectInstanceWorkflow = getProjectInstanceWorkflow(projectInstanceId, workflowId);

        return projectInstanceWorkflow.isEnabled();
    }

    @Override
    public ProjectInstanceWorkflow update(ProjectInstanceWorkflow projectInstanceWorkflow) {
        ProjectInstanceWorkflow curProjectInstanceWorkflow = OptionalUtils.get(
            projectInstanceWorkflowRepository.findById(Validate.notNull(projectInstanceWorkflow.getId(), "id")));

        curProjectInstanceWorkflow.setConnections(projectInstanceWorkflow.getConnections());
        curProjectInstanceWorkflow.setEnabled(projectInstanceWorkflow.isEnabled());
        curProjectInstanceWorkflow.setInputs(projectInstanceWorkflow.getInputs());
        curProjectInstanceWorkflow.setVersion(projectInstanceWorkflow.getVersion());

        return projectInstanceWorkflowRepository.save(curProjectInstanceWorkflow);
    }

    @Override
    public List<ProjectInstanceWorkflow> update(List<ProjectInstanceWorkflow> projectInstanceWorkflows) {
        Validate.notNull(projectInstanceWorkflows, "'projectInstanceWorkflows' must not be null");

        List<ProjectInstanceWorkflow> updatedProjectInstanceWorkflows = new ArrayList<>();

        for (ProjectInstanceWorkflow projectInstanceWorkflow : projectInstanceWorkflows) {
            updatedProjectInstanceWorkflows.add(update(projectInstanceWorkflow));
        }

        return updatedProjectInstanceWorkflows;
    }

    @Override
    public void updateEnabled(Long id, boolean enabled) {
        ProjectInstanceWorkflow projectInstanceWorkflow = projectInstanceWorkflowRepository.findById(id)
            .orElseThrow();

        projectInstanceWorkflow.setEnabled(enabled);

        projectInstanceWorkflowRepository.save(projectInstanceWorkflow);
    }
}
