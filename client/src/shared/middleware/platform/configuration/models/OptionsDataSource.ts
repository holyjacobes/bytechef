/* tslint:disable */
/* eslint-disable */
/**
 * The Platform Configuration Internal API
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
 * Defines function that should dynamically load options for the property.
 * @export
 * @interface OptionsDataSource
 */
export interface OptionsDataSource {
    /**
     * The list of property names on which value change the property options should load/reload.
     * @type {Array<string>}
     * @memberof OptionsDataSource
     */
    optionsLookupDependsOn?: Array<string>;
}

/**
 * Check if a given object implements the OptionsDataSource interface.
 */
export function instanceOfOptionsDataSource(value: object): value is OptionsDataSource {
    return true;
}

export function OptionsDataSourceFromJSON(json: any): OptionsDataSource {
    return OptionsDataSourceFromJSONTyped(json, false);
}

export function OptionsDataSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionsDataSource {
    if (json == null) {
        return json;
    }
    return {
        
        'optionsLookupDependsOn': json['optionsLookupDependsOn'] == null ? undefined : json['optionsLookupDependsOn'],
    };
}

  export function OptionsDataSourceToJSON(json: any): OptionsDataSource {
      return OptionsDataSourceToJSONTyped(json, false);
  }

  export function OptionsDataSourceToJSONTyped(value?: OptionsDataSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'optionsLookupDependsOn': value['optionsLookupDependsOn'],
    };
}

