/* tslint:disable */
/* eslint-disable */
/**
 * The Platform API Connector Internal API
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
/**
 * 
 * @export
 * @interface ImportOpenApiSpecificationRequest
 */
export interface ImportOpenApiSpecificationRequest {
    /**
     * The component name of an API Connector.
     * @type {string}
     * @memberof ImportOpenApiSpecificationRequest
     */
    name: string;
    /**
     * The icon of an API Connector.
     * @type {string}
     * @memberof ImportOpenApiSpecificationRequest
     */
    icon?: string;
    /**
     * The OpenAPI specification.
     * @type {string}
     * @memberof ImportOpenApiSpecificationRequest
     */
    specification: string;
}

/**
 * Check if a given object implements the ImportOpenApiSpecificationRequest interface.
 */
export function instanceOfImportOpenApiSpecificationRequest(value: object): value is ImportOpenApiSpecificationRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('specification' in value) || value['specification'] === undefined) return false;
    return true;
}

export function ImportOpenApiSpecificationRequestFromJSON(json: any): ImportOpenApiSpecificationRequest {
    return ImportOpenApiSpecificationRequestFromJSONTyped(json, false);
}

export function ImportOpenApiSpecificationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportOpenApiSpecificationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'specification': json['specification'],
    };
}

  export function ImportOpenApiSpecificationRequestToJSON(json: any): ImportOpenApiSpecificationRequest {
      return ImportOpenApiSpecificationRequestToJSONTyped(json, false);
  }

  export function ImportOpenApiSpecificationRequestToJSONTyped(value?: ImportOpenApiSpecificationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'icon': value['icon'],
        'specification': value['specification'],
    };
}

