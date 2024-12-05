/* tslint:disable */
/* eslint-disable */
/**
 * The Automation API Platform Internal API
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
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
    EnvironmentToJSONTyped,
} from './Environment';

/**
 * Contains configurations and connections required for the execution of project workflows.
 * @export
 * @interface ProjectInstanceBasic
 */
export interface ProjectInstanceBasic {
    /**
     * The created by.
     * @type {string}
     * @memberof ProjectInstanceBasic
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof ProjectInstanceBasic
     */
    readonly createdDate?: Date;
    /**
     * The description of a project instance.
     * @type {string}
     * @memberof ProjectInstanceBasic
     */
    description?: string;
    /**
     * If a project instance is enabled or not.
     * @type {boolean}
     * @memberof ProjectInstanceBasic
     */
    enabled?: boolean;
    /**
     * 
     * @type {Environment}
     * @memberof ProjectInstanceBasic
     */
    environment?: Environment;
    /**
     * The id of a project instance.
     * @type {number}
     * @memberof ProjectInstanceBasic
     */
    readonly id?: number;
    /**
     * The last execution date.
     * @type {Date}
     * @memberof ProjectInstanceBasic
     */
    readonly lastExecutionDate?: Date;
    /**
     * The last modified by.
     * @type {string}
     * @memberof ProjectInstanceBasic
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof ProjectInstanceBasic
     */
    readonly lastModifiedDate?: Date;
    /**
     * The name of a project instance.
     * @type {string}
     * @memberof ProjectInstanceBasic
     */
    name: string;
    /**
     * The id of a project.
     * @type {number}
     * @memberof ProjectInstanceBasic
     */
    projectId?: number;
    /**
     * The version of a project.
     * @type {number}
     * @memberof ProjectInstanceBasic
     */
    projectVersion?: number;
}



/**
 * Check if a given object implements the ProjectInstanceBasic interface.
 */
export function instanceOfProjectInstanceBasic(value: object): value is ProjectInstanceBasic {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ProjectInstanceBasicFromJSON(json: any): ProjectInstanceBasic {
    return ProjectInstanceBasicFromJSONTyped(json, false);
}

export function ProjectInstanceBasicFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectInstanceBasic {
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
        'lastExecutionDate': json['lastExecutionDate'] == null ? undefined : (new Date(json['lastExecutionDate'])),
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'name': json['name'],
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'projectVersion': json['projectVersion'] == null ? undefined : json['projectVersion'],
    };
}

export function ProjectInstanceBasicToJSON(json: any): ProjectInstanceBasic {
    return ProjectInstanceBasicToJSONTyped(json, false);
}

export function ProjectInstanceBasicToJSONTyped(value?: Omit<ProjectInstanceBasic, 'createdBy'|'createdDate'|'id'|'lastExecutionDate'|'lastModifiedBy'|'lastModifiedDate'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'enabled': value['enabled'],
        'environment': EnvironmentToJSON(value['environment']),
        'name': value['name'],
        'projectId': value['projectId'],
        'projectVersion': value['projectVersion'],
    };
}

