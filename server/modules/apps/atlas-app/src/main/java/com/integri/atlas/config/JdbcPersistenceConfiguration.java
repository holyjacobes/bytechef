/*
 * Copyright 2016-2018 the original author or authors.
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
 *
 * Modifications copyright (C) 2021 <your company/name>
 */

package com.integri.atlas.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.integri.atlas.engine.coordinator.job.repository.JobRepository;
import com.integri.atlas.engine.coordinator.workflow.repository.WorkflowMapper;
import com.integri.atlas.engine.coordinator.workflow.repository.WorkflowRepository;
import com.integri.atlas.engine.core.context.repository.ContextRepository;
import com.integri.atlas.engine.core.counter.repository.CounterRepository;
import com.integri.atlas.engine.core.task.repository.TaskExecutionRepository;
import com.integri.atlas.engine.repository.jdbc.context.JdbcContextRepository;
import com.integri.atlas.engine.repository.jdbc.counter.JdbcCounterRepository;
import com.integri.atlas.engine.repository.jdbc.job.JdbcJobRepository;
import com.integri.atlas.engine.repository.jdbc.task.JdbcTaskExecutionRepository;
import com.integri.atlas.workflow.repository.jdbc.JdbcWorkflowRepository;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

/**
 * @author Arik Cohen
 */
@Configuration
@ConditionalOnProperty(name = "atlas.persistence.provider", havingValue = "jdbc")
public class JdbcPersistenceConfiguration {

    @Bean
    CounterRepository counterRepository(JdbcTemplate aJdbcOperations) {
        return new JdbcCounterRepository(aJdbcOperations);
    }

    @Bean
    @ConditionalOnProperty(name = "atlas.workflow-repository.database.enabled", havingValue = "true")
    @Order(4)
    WorkflowRepository jdbcWorkflowRepository(
        NamedParameterJdbcTemplate aJdbcTemplate,
        WorkflowMapper aWorkflowMapper
    ) {
        JdbcWorkflowRepository jdbcWorkflowRepository = new JdbcWorkflowRepository();

        jdbcWorkflowRepository.setJdbcTemplate(aJdbcTemplate);
        jdbcWorkflowRepository.setWorkflowMapper(aWorkflowMapper);

        return jdbcWorkflowRepository;
    }

    @Bean
    TaskExecutionRepository jdbcJobTaskRepository(NamedParameterJdbcTemplate aJdbcTemplate, ObjectMapper objectMapper) {
        JdbcTaskExecutionRepository jdbcJobTaskRepository = new JdbcTaskExecutionRepository();

        jdbcJobTaskRepository.setJdbcOperations(aJdbcTemplate);
        jdbcJobTaskRepository.setObjectMapper(objectMapper);

        return jdbcJobTaskRepository;
    }

    @Bean
    JobRepository jdbcJobRepository(NamedParameterJdbcTemplate aJdbcTemplate, ObjectMapper objectMapper) {
        JdbcJobRepository jdbcJobRepository = new JdbcJobRepository();

        jdbcJobRepository.setJdbcOperations(aJdbcTemplate);
        jdbcJobRepository.setJobTaskRepository(jdbcJobTaskRepository(aJdbcTemplate, objectMapper));
        jdbcJobRepository.setObjectMapper(objectMapper);

        return jdbcJobRepository;
    }

    @Bean
    ContextRepository jdbcContextRepository(JdbcTemplate aJdbcTemplate, ObjectMapper objectMapper) {
        JdbcContextRepository jdbcContextRepository = new JdbcContextRepository();

        jdbcContextRepository.setJdbcTemplate(aJdbcTemplate);
        jdbcContextRepository.setObjectMapper(objectMapper);

        return jdbcContextRepository;
    }
}
