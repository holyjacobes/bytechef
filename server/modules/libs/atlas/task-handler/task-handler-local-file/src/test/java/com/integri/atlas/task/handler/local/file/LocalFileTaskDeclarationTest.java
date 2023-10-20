/*
 * Copyright 2021 <your company/name>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.integri.atlas.task.handler.local.file;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONParser;

/**
 * @author Ivica Cardic
 */
public class LocalFileTaskDeclarationTest {

    private final ObjectMapper objectMapper = new ObjectMapper() {
        {
            setSerializationInclusion(JsonInclude.Include.NON_NULL);
        }
    };

    @Test
    public void testLocalFileTaskSpecification() throws JsonProcessingException {
        JSONAssert.assertEquals(
            """
            {
                "description":"Reads or writes a binary file from/to disk",
                "displayName":"Local File",
                "name":"localFile",
                "properties":[
                    {
                        "defaultValue":"READ",
                        "description":"The operation to perform.",
                        "displayName":"Operation",
                        "name":"operation",
                        "required":true,
                        "type":"SELECT",
                        "options":[
                            {
                                "name":"Read to file",
                                "value":"READ"
                            },
                            {
                                "name":"Write from file",
                                "value":"WRITE"
                            }
                        ]
                    },
                    {
                        "description":"The object property which contains a reference to the file to be written.",
                        "displayName":"File",
                        "displayOption":{
                            "show":{
                                "operation":["WRITE"]
                            }
                        },
                        "name":"fileEntry",
                        "required":true,
                        "type":"JSON"
                    },
                    {
                        "defaultValue":"",
                        "description":"The path of the file to read.",
                        "displayName":"File Name",
                        "displayOption":{
                            "show":{
                                "operation":["READ"]
                            }
                        },
                        "name":"fileName",
                        "required":true,
                        "type":"STRING",
                        "placeholder":"/data/your_file.pdf"
                    },
                    {
                        "defaultValue":"",
                        "description":"The path to which the file should be written.",
                        "displayName":"File Name",
                        "displayOption":{
                            "show":{
                                "operation":["WRITE"]
                            }
                        },
                        "name":"fileName",
                        "required":true,
                        "type":"STRING",
                        "placeholder":"/data/your_file.pdf"
                    }
                ],
                "version":1.0
                }
            """,
            (JSONObject) JSONParser.parseJSON(
                objectMapper.writeValueAsString(LocalFileTaskDeclaration.TASK_SPECIFICATION)
            ),
            true
        );
    }
}
