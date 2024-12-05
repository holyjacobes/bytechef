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
import type { TriggerType } from './TriggerType';
import {
    TriggerTypeFromJSON,
    TriggerTypeFromJSONTyped,
    TriggerTypeToJSON,
    TriggerTypeToJSONTyped,
} from './TriggerType';
import type { Help } from './Help';
import {
    HelpFromJSON,
    HelpFromJSONTyped,
    HelpToJSON,
    HelpToJSONTyped,
} from './Help';

/**
 * A trigger definition defines ways to trigger workflows from the outside services.
 * @export
 * @interface TriggerDefinitionBasic
 */
export interface TriggerDefinitionBasic {
    /**
     * The description.
     * @type {string}
     * @memberof TriggerDefinitionBasic
     */
    description?: string;
    /**
     * 
     * @type {Help}
     * @memberof TriggerDefinitionBasic
     */
    help?: Help;
    /**
     * The action name.
     * @type {string}
     * @memberof TriggerDefinitionBasic
     */
    name: string;
    /**
     * The title
     * @type {string}
     * @memberof TriggerDefinitionBasic
     */
    title?: string;
    /**
     * 
     * @type {TriggerType}
     * @memberof TriggerDefinitionBasic
     */
    type: TriggerType;
}



/**
 * Check if a given object implements the TriggerDefinitionBasic interface.
 */
export function instanceOfTriggerDefinitionBasic(value: object): value is TriggerDefinitionBasic {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TriggerDefinitionBasicFromJSON(json: any): TriggerDefinitionBasic {
    return TriggerDefinitionBasicFromJSONTyped(json, false);
}

export function TriggerDefinitionBasicFromJSONTyped(json: any, ignoreDiscriminator: boolean): TriggerDefinitionBasic {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'help': json['help'] == null ? undefined : HelpFromJSON(json['help']),
        'name': json['name'],
        'title': json['title'] == null ? undefined : json['title'],
        'type': TriggerTypeFromJSON(json['type']),
    };
}

export function TriggerDefinitionBasicToJSON(json: any): TriggerDefinitionBasic {
    return TriggerDefinitionBasicToJSONTyped(json, false);
}

export function TriggerDefinitionBasicToJSONTyped(value?: TriggerDefinitionBasic | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'help': HelpToJSON(value['help']),
        'name': value['name'],
        'title': value['title'],
        'type': TriggerTypeToJSON(value['type']),
    };
}

