/* tslint:disable */
/* eslint-disable */
/**
 * Embedded Execution Internal API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The status of an integration.
 * @export
 */
export const IntegrationStatus = {
    Draft: 'DRAFT',
    Published: 'PUBLISHED'
} as const;
export type IntegrationStatus = typeof IntegrationStatus[keyof typeof IntegrationStatus];


export function instanceOfIntegrationStatus(value: any): boolean {
    for (const key in IntegrationStatus) {
        if (Object.prototype.hasOwnProperty.call(IntegrationStatus, key)) {
            if (IntegrationStatus[key as keyof typeof IntegrationStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function IntegrationStatusFromJSON(json: any): IntegrationStatus {
    return IntegrationStatusFromJSONTyped(json, false);
}

export function IntegrationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationStatus {
    return json as IntegrationStatus;
}

export function IntegrationStatusToJSON(value?: IntegrationStatus | null): any {
    return value as any;
}

export function IntegrationStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): IntegrationStatus {
    return value as IntegrationStatus;
}

