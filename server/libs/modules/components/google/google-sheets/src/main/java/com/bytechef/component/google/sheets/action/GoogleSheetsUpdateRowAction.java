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

package com.bytechef.component.google.sheets.action;

import static com.bytechef.component.definition.ComponentDsl.action;
import static com.bytechef.component.definition.ComponentDsl.bool;
import static com.bytechef.component.definition.ComponentDsl.integer;
import static com.bytechef.component.definition.ComponentDsl.number;
import static com.bytechef.component.definition.ComponentDsl.object;
import static com.bytechef.component.definition.ComponentDsl.outputSchema;
import static com.bytechef.component.definition.ComponentDsl.string;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.INCLUDE_ITEMS_FROM_ALL_DRIVES_PROPERTY;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.IS_THE_FIRST_ROW_HEADER_PROPERTY;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.ROW_NUMBER;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.ROW_PROPERTY;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.SHEET_NAME;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.SHEET_NAME_PROPERTY;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.SPREADSHEET_ID;
import static com.bytechef.component.google.sheets.constant.GoogleSheetsConstants.SPREADSHEET_ID_PROPERTY;
import static com.bytechef.component.google.sheets.util.GoogleSheetsUtils.createRange;
import static com.bytechef.component.google.sheets.util.GoogleSheetsUtils.getMapOfValuesForRow;
import static com.bytechef.component.google.sheets.util.GoogleSheetsUtils.getRowValues;

import com.bytechef.component.definition.ActionContext;
import com.bytechef.component.definition.ComponentDsl.ModifiableActionDefinition;
import com.bytechef.component.definition.Parameters;
import com.bytechef.google.commons.GoogleServices;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.ValueRange;
import java.util.List;
import java.util.Map;

/**
 * @author Monika Domiter
 */
public class GoogleSheetsUpdateRowAction {

    public static final ModifiableActionDefinition ACTION_DEFINITION = action("updateRow")
        .title("Update Row")
        .description("Overwrite values in an existing row.")
        .properties(
            SPREADSHEET_ID_PROPERTY,
            INCLUDE_ITEMS_FROM_ALL_DRIVES_PROPERTY,
            SHEET_NAME_PROPERTY,
            integer(ROW_NUMBER)
                .label("Row Number")
                .description("The row number to update.")
                .required(true),
            IS_THE_FIRST_ROW_HEADER_PROPERTY,
            ROW_PROPERTY)
        .output(
            outputSchema(
                object()
                    .additionalProperties(bool(), number(), string())))
        .perform(GoogleSheetsUpdateRowAction::perform);

    private GoogleSheetsUpdateRowAction() {
    }

    public static Map<String, Object> perform(
        Parameters inputParameters, Parameters connectionParameters, ActionContext actionContext) throws Exception {
        Sheets sheets = GoogleServices.getSheets(connectionParameters);
        String range = createRange(
            inputParameters.getRequiredString(SHEET_NAME), inputParameters.getRequiredInteger(ROW_NUMBER));
        List<Object> row = getRowValues(inputParameters);

        ValueRange valueRange = new ValueRange()
            .setValues(List.of(row))
            .setMajorDimension("ROWS");

        sheets.spreadsheets()
            .values()
            .update(inputParameters.getRequiredString(SPREADSHEET_ID), range, valueRange)
            .setValueInputOption("USER_ENTERED")
            .execute();

        return getMapOfValuesForRow(inputParameters, sheets, row);
    }
}
