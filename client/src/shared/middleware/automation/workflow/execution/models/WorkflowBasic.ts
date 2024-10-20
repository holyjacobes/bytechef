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
 * The blueprint that describe the execution of a job.
 * @export
 * @interface WorkflowBasic
 */
export interface WorkflowBasic {
    /**
     * The created by.
     * @type {string}
     * @memberof WorkflowBasic
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof WorkflowBasic
     */
    readonly createdDate?: Date;
    /**
     * The description of a workflow.
     * @type {string}
     * @memberof WorkflowBasic
     */
    description?: string;
    /**
     * The id of a workflow.
     * @type {string}
     * @memberof WorkflowBasic
     */
    readonly id?: string;
    /**
     * The descriptive name for the workflow
     * @type {string}
     * @memberof WorkflowBasic
     */
    readonly label?: string;
    /**
     * The last modified by.
     * @type {string}
     * @memberof WorkflowBasic
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof WorkflowBasic
     */
    readonly lastModifiedDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof WorkflowBasic
     */
    version?: number;
    /**
     * The project workflow id
     * @type {number}
     * @memberof WorkflowBasic
     */
    readonly projectWorkflowId?: number;
    /**
     * The workflow reference code
     * @type {string}
     * @memberof WorkflowBasic
     */
    readonly workflowReferenceCode?: string;
}

/**
 * Check if a given object implements the WorkflowBasic interface.
 */
export function instanceOfWorkflowBasic(value: object): value is WorkflowBasic {
    return true;
}

export function WorkflowBasicFromJSON(json: any): WorkflowBasic {
    return WorkflowBasicFromJSONTyped(json, false);
}

export function WorkflowBasicFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowBasic {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'label': json['label'] == null ? undefined : json['label'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'version': json['__version'] == null ? undefined : json['__version'],
        'projectWorkflowId': json['projectWorkflowId'] == null ? undefined : json['projectWorkflowId'],
        'workflowReferenceCode': json['workflowReferenceCode'] == null ? undefined : json['workflowReferenceCode'],
    };
}

  export function WorkflowBasicToJSON(json: any): WorkflowBasic {
      return WorkflowBasicToJSONTyped(json, false);
  }

  export function WorkflowBasicToJSONTyped(value?: Omit<WorkflowBasic, 'createdBy'|'createdDate'|'id'|'label'|'lastModifiedBy'|'lastModifiedDate'|'projectWorkflowId'|'workflowReferenceCode'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        '__version': value['version'],
    };
}

