/* tslint:disable */
/* eslint-disable */
/**
 * The Automation Configuration Internal API
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
import type { ProjectStatus } from './ProjectStatus';
import {
    ProjectStatusFromJSON,
    ProjectStatusFromJSONTyped,
    ProjectStatusToJSON,
    ProjectStatusToJSONTyped,
} from './ProjectStatus';

/**
 * A group of workflows that make one logical project.
 * @export
 * @interface ProjectBasic
 */
export interface ProjectBasic {
    /**
     * The created by.
     * @type {string}
     * @memberof ProjectBasic
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof ProjectBasic
     */
    readonly createdDate?: Date;
    /**
     * The description of a project.
     * @type {string}
     * @memberof ProjectBasic
     */
    description?: string;
    /**
     * The id of a project.
     * @type {number}
     * @memberof ProjectBasic
     */
    readonly id?: number;
    /**
     * The last modified by.
     * @type {string}
     * @memberof ProjectBasic
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof ProjectBasic
     */
    readonly lastModifiedDate?: Date;
    /**
     * The name of a project.
     * @type {string}
     * @memberof ProjectBasic
     */
    name: string;
    /**
     * The last published date.
     * @type {Date}
     * @memberof ProjectBasic
     */
    readonly lastPublishedDate?: Date;
    /**
     * 
     * @type {ProjectStatus}
     * @memberof ProjectBasic
     */
    lastStatus?: ProjectStatus;
    /**
     * The last version of a project.
     * @type {number}
     * @memberof ProjectBasic
     */
    readonly lastProjectVersion?: number;
}



/**
 * Check if a given object implements the ProjectBasic interface.
 */
export function instanceOfProjectBasic(value: object): value is ProjectBasic {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ProjectBasicFromJSON(json: any): ProjectBasic {
    return ProjectBasicFromJSONTyped(json, false);
}

export function ProjectBasicFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectBasic {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'name': json['name'],
        'lastPublishedDate': json['lastPublishedDate'] == null ? undefined : (new Date(json['lastPublishedDate'])),
        'lastStatus': json['lastStatus'] == null ? undefined : ProjectStatusFromJSON(json['lastStatus']),
        'lastProjectVersion': json['lastProjectVersion'] == null ? undefined : json['lastProjectVersion'],
    };
}

export function ProjectBasicToJSON(json: any): ProjectBasic {
    return ProjectBasicToJSONTyped(json, false);
}

export function ProjectBasicToJSONTyped(value?: Omit<ProjectBasic, 'createdBy'|'createdDate'|'id'|'lastModifiedBy'|'lastModifiedDate'|'lastPublishedDate'|'lastProjectVersion'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'name': value['name'],
        'lastStatus': ProjectStatusToJSON(value['lastStatus']),
    };
}

