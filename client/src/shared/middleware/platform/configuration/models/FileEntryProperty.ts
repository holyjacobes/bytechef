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
import type { ControlType } from './ControlType';
import {
    ControlTypeFromJSON,
    ControlTypeFromJSONTyped,
    ControlTypeToJSON,
    ControlTypeToJSONTyped,
} from './ControlType';
import type { PropertyType } from './PropertyType';
import {
    PropertyTypeFromJSON,
    PropertyTypeFromJSONTyped,
    PropertyTypeToJSON,
    PropertyTypeToJSONTyped,
} from './PropertyType';
import type { Property } from './Property';
import {
    PropertyFromJSON,
    PropertyFromJSONTyped,
    PropertyToJSON,
    PropertyToJSONTyped,
} from './Property';
import type { ValueProperty } from './ValueProperty';
import {
    ValuePropertyFromJSON,
    ValuePropertyFromJSONTyped,
    ValuePropertyToJSON,
    ValuePropertyToJSONTyped,
} from './ValueProperty';

/**
 * An file entry property type.
 * @export
 * @interface FileEntryProperty
 */
export interface FileEntryProperty extends ValueProperty {
    /**
     * The list of valid file entry property types.
     * @type {Array<Property>}
     * @memberof FileEntryProperty
     */
    properties?: Array<Property>;
}



/**
 * Check if a given object implements the FileEntryProperty interface.
 */
export function instanceOfFileEntryProperty(value: object): value is FileEntryProperty {
    return true;
}

export function FileEntryPropertyFromJSON(json: any): FileEntryProperty {
    return FileEntryPropertyFromJSONTyped(json, false);
}

export function FileEntryPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileEntryProperty {
    if (json == null) {
        return json;
    }
    return {
        ...ValuePropertyFromJSONTyped(json, true),
        'properties': json['properties'] == null ? undefined : ((json['properties'] as Array<any>).map(PropertyFromJSON)),
    };
}

  export function FileEntryPropertyToJSON(json: any): FileEntryProperty {
      return FileEntryPropertyToJSONTyped(json, false);
  }

  export function FileEntryPropertyToJSONTyped(value?: FileEntryProperty | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        ...ValuePropertyToJSONTyped(value, true),
        'properties': value['properties'] == null ? undefined : ((value['properties'] as Array<any>).map(PropertyToJSON)),
    };
}

