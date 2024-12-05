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

import { mapValues } from '../runtime';
import type { IntegrationBasic } from './IntegrationBasic';
import {
    IntegrationBasicFromJSON,
    IntegrationBasicFromJSONTyped,
    IntegrationBasicToJSON,
    IntegrationBasicToJSONTyped,
} from './IntegrationBasic';
import type { IntegrationInstanceConfigurationWorkflow } from './IntegrationInstanceConfigurationWorkflow';
import {
    IntegrationInstanceConfigurationWorkflowFromJSON,
    IntegrationInstanceConfigurationWorkflowFromJSONTyped,
    IntegrationInstanceConfigurationWorkflowToJSON,
    IntegrationInstanceConfigurationWorkflowToJSONTyped,
} from './IntegrationInstanceConfigurationWorkflow';
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
    EnvironmentToJSONTyped,
} from './Environment';
import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
    TagToJSONTyped,
} from './Tag';

/**
 * Contains configurations and connections required for the execution of integration workflows.
 * @export
 * @interface IntegrationInstanceConfiguration
 */
export interface IntegrationInstanceConfiguration {
    /**
     * The created by.
     * @type {string}
     * @memberof IntegrationInstanceConfiguration
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof IntegrationInstanceConfiguration
     */
    readonly createdDate?: Date;
    /**
     * The description of an integration configuration.
     * @type {string}
     * @memberof IntegrationInstanceConfiguration
     */
    description?: string;
    /**
     * If an integration instance configuration is enabled or not.
     * @type {boolean}
     * @memberof IntegrationInstanceConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {Environment}
     * @memberof IntegrationInstanceConfiguration
     */
    environment?: Environment;
    /**
     * The id of an integration instance configuration.
     * @type {number}
     * @memberof IntegrationInstanceConfiguration
     */
    readonly id?: number;
    /**
     * Th id of an integration.
     * @type {number}
     * @memberof IntegrationInstanceConfiguration
     */
    integrationId?: number;
    /**
     * The version of an integration.
     * @type {number}
     * @memberof IntegrationInstanceConfiguration
     */
    integrationVersion?: number;
    /**
     * The last modified by.
     * @type {string}
     * @memberof IntegrationInstanceConfiguration
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof IntegrationInstanceConfiguration
     */
    readonly lastModifiedDate?: Date;
    /**
     * The name of an integration instance configuration.
     * @type {string}
     * @memberof IntegrationInstanceConfiguration
     */
    name: string;
    /**
     * The authorization parameters of a connection.
     * @type {{ [key: string]: any; }}
     * @memberof IntegrationInstanceConfiguration
     */
    readonly connectionAuthorizationParameters?: { [key: string]: any; };
    /**
     * The authorization parameters of a connection.
     * @type {{ [key: string]: any; }}
     * @memberof IntegrationInstanceConfiguration
     */
    readonly connectionConnectionParameters?: { [key: string]: any; };
    /**
     * The parameters of an integration connection, usually oauth2 related data.
     * @type {{ [key: string]: any; }}
     * @memberof IntegrationInstanceConfiguration
     */
    connectionParameters?: { [key: string]: any; };
    /**
     * 
     * @type {IntegrationBasic}
     * @memberof IntegrationInstanceConfiguration
     */
    integration?: IntegrationBasic;
    /**
     * The array of integration instance configuration workflows.
     * @type {Array<IntegrationInstanceConfigurationWorkflow>}
     * @memberof IntegrationInstanceConfiguration
     */
    integrationInstanceConfigurationWorkflows?: Array<IntegrationInstanceConfigurationWorkflow>;
    /**
     * The array of tags.
     * @type {Array<Tag>}
     * @memberof IntegrationInstanceConfiguration
     */
    tags?: Array<Tag>;
    /**
     * 
     * @type {number}
     * @memberof IntegrationInstanceConfiguration
     */
    version?: number;
}



/**
 * Check if a given object implements the IntegrationInstanceConfiguration interface.
 */
export function instanceOfIntegrationInstanceConfiguration(value: object): value is IntegrationInstanceConfiguration {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function IntegrationInstanceConfigurationFromJSON(json: any): IntegrationInstanceConfiguration {
    return IntegrationInstanceConfigurationFromJSONTyped(json, false);
}

export function IntegrationInstanceConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationInstanceConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'environment': json['environment'] == null ? undefined : EnvironmentFromJSON(json['environment']),
        'id': json['id'] == null ? undefined : json['id'],
        'integrationId': json['integrationId'] == null ? undefined : json['integrationId'],
        'integrationVersion': json['integrationVersion'] == null ? undefined : json['integrationVersion'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'name': json['name'],
        'connectionAuthorizationParameters': json['connectionAuthorizationParameters'] == null ? undefined : json['connectionAuthorizationParameters'],
        'connectionConnectionParameters': json['connectionConnectionParameters'] == null ? undefined : json['connectionConnectionParameters'],
        'connectionParameters': json['connectionParameters'] == null ? undefined : json['connectionParameters'],
        'integration': json['integration'] == null ? undefined : IntegrationBasicFromJSON(json['integration']),
        'integrationInstanceConfigurationWorkflows': json['integrationInstanceConfigurationWorkflows'] == null ? undefined : ((json['integrationInstanceConfigurationWorkflows'] as Array<any>).map(IntegrationInstanceConfigurationWorkflowFromJSON)),
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
        'version': json['__version'] == null ? undefined : json['__version'],
    };
}

export function IntegrationInstanceConfigurationToJSON(json: any): IntegrationInstanceConfiguration {
    return IntegrationInstanceConfigurationToJSONTyped(json, false);
}

export function IntegrationInstanceConfigurationToJSONTyped(value?: Omit<IntegrationInstanceConfiguration, 'createdBy'|'createdDate'|'id'|'lastModifiedBy'|'lastModifiedDate'|'connectionAuthorizationParameters'|'connectionConnectionParameters'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'enabled': value['enabled'],
        'environment': EnvironmentToJSON(value['environment']),
        'integrationId': value['integrationId'],
        'integrationVersion': value['integrationVersion'],
        'name': value['name'],
        'connectionParameters': value['connectionParameters'],
        'integration': IntegrationBasicToJSON(value['integration']),
        'integrationInstanceConfigurationWorkflows': value['integrationInstanceConfigurationWorkflows'] == null ? undefined : ((value['integrationInstanceConfigurationWorkflows'] as Array<any>).map(IntegrationInstanceConfigurationWorkflowToJSON)),
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagToJSON)),
        '__version': value['version'],
    };
}

