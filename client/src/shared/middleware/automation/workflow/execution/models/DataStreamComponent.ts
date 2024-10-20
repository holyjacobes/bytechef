/* tslint:disable */
/* eslint-disable */
/**
 * The Automation Execution Internal API
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
 * The source/destination data stream component.
 * @export
 * @interface DataStreamComponent
 */
export interface DataStreamComponent {
    /**
     * The name of a component.
     * @type {string}
     * @memberof DataStreamComponent
     */
    componentName?: string;
    /**
     * The version of a component.
     * @type {number}
     * @memberof DataStreamComponent
     */
    componentVersion?: number;
}

/**
 * Check if a given object implements the DataStreamComponent interface.
 */
export function instanceOfDataStreamComponent(value: object): value is DataStreamComponent {
    return true;
}

export function DataStreamComponentFromJSON(json: any): DataStreamComponent {
    return DataStreamComponentFromJSONTyped(json, false);
}

export function DataStreamComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataStreamComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'componentName': json['componentName'] == null ? undefined : json['componentName'],
        'componentVersion': json['componentVersion'] == null ? undefined : json['componentVersion'],
    };
}

  export function DataStreamComponentToJSON(json: any): DataStreamComponent {
      return DataStreamComponentToJSONTyped(json, false);
  }

  export function DataStreamComponentToJSONTyped(value?: DataStreamComponent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'componentName': value['componentName'],
        'componentVersion': value['componentVersion'],
    };
}

