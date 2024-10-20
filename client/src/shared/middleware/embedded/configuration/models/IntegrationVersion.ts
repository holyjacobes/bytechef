/* tslint:disable */
/* eslint-disable */
/**
 * The Embedded Configuration Internal API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IntegrationStatus } from './IntegrationStatus';
import {
    IntegrationStatusFromJSON,
    IntegrationStatusFromJSONTyped,
    IntegrationStatusToJSON,
    IntegrationStatusToJSONTyped,
} from './IntegrationStatus';

/**
 * The integration version.
 * @export
 * @interface IntegrationVersion
 */
export interface IntegrationVersion {
    /**
     * The description of an integration version.
     * @type {string}
     * @memberof IntegrationVersion
     */
    description?: string;
    /**
     * The published date.
     * @type {Date}
     * @memberof IntegrationVersion
     */
    publishedDate?: Date;
    /**
     * The version of an integration.
     * @type {number}
     * @memberof IntegrationVersion
     */
    readonly version?: number;
    /**
     * 
     * @type {IntegrationStatus}
     * @memberof IntegrationVersion
     */
    status?: IntegrationStatus;
}



/**
 * Check if a given object implements the IntegrationVersion interface.
 */
export function instanceOfIntegrationVersion(value: object): value is IntegrationVersion {
    return true;
}

export function IntegrationVersionFromJSON(json: any): IntegrationVersion {
    return IntegrationVersionFromJSONTyped(json, false);
}

export function IntegrationVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'publishedDate': json['publishedDate'] == null ? undefined : (new Date(json['publishedDate'])),
        'version': json['version'] == null ? undefined : json['version'],
        'status': json['status'] == null ? undefined : IntegrationStatusFromJSON(json['status']),
    };
}

  export function IntegrationVersionToJSON(json: any): IntegrationVersion {
      return IntegrationVersionToJSONTyped(json, false);
  }

  export function IntegrationVersionToJSONTyped(value?: Omit<IntegrationVersion, 'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'publishedDate': value['publishedDate'] == null ? undefined : ((value['publishedDate']).toISOString()),
        'status': IntegrationStatusToJSON(value['status']),
    };
}

