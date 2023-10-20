
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

package com.bytechef.hermes.component;

import com.bytechef.hermes.component.definition.Authorization;

import java.io.InputStream;
import java.util.Optional;

/**
 * @author Ivica Cardic
 */
public interface Context {

    Optional<Connection> fetchConnection();

    InputStream getFileStream(FileEntry fileEntry);

    void publishProgressEvent(int progress);

    String readFileToString(FileEntry fileEntry);

    FileEntry storeFileContent(String fileName, String data);

    FileEntry storeFileContent(String fileName, InputStream inputStream);

    interface Connection {

        void applyAuthorization(Authorization.AuthorizationContext authorizationContext);

        boolean containsParameter(String name);

        Optional<String> fetchBaseUri();

        <T> T getParameter(String name);

        <T> T getParameter(String name, T defaultValue);
    }

    interface FileEntry {

        String getExtension();

        String getMimeType();

        String getName();

        String getUrl();
    }
}
