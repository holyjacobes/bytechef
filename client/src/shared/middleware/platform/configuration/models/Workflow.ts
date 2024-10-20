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
import type { WorkflowOutput } from './WorkflowOutput';
import {
    WorkflowOutputFromJSON,
    WorkflowOutputFromJSONTyped,
    WorkflowOutputToJSON,
    WorkflowOutputToJSONTyped,
} from './WorkflowOutput';
import type { WorkflowFormat } from './WorkflowFormat';
import {
    WorkflowFormatFromJSON,
    WorkflowFormatFromJSONTyped,
    WorkflowFormatToJSON,
    WorkflowFormatToJSONTyped,
} from './WorkflowFormat';
import type { WorkflowTask } from './WorkflowTask';
import {
    WorkflowTaskFromJSON,
    WorkflowTaskFromJSONTyped,
    WorkflowTaskToJSON,
    WorkflowTaskToJSONTyped,
} from './WorkflowTask';
import type { WorkflowTrigger } from './WorkflowTrigger';
import {
    WorkflowTriggerFromJSON,
    WorkflowTriggerFromJSONTyped,
    WorkflowTriggerToJSON,
    WorkflowTriggerToJSONTyped,
} from './WorkflowTrigger';
import type { WorkflowInput } from './WorkflowInput';
import {
    WorkflowInputFromJSON,
    WorkflowInputFromJSONTyped,
    WorkflowInputToJSON,
    WorkflowInputToJSONTyped,
} from './WorkflowInput';

/**
 * The blueprint that describe the execution of a job.
 * @export
 * @interface Workflow
 */
export interface Workflow {
    /**
     * The created by.
     * @type {string}
     * @memberof Workflow
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof Workflow
     */
    readonly createdDate?: Date;
    /**
     * The number of workflow connections
     * @type {number}
     * @memberof Workflow
     */
    readonly connectionsCount?: number;
    /**
     * The definition of a workflow.
     * @type {string}
     * @memberof Workflow
     */
    definition?: string;
    /**
     * The description of a workflow.
     * @type {string}
     * @memberof Workflow
     */
    description?: string;
    /**
     * 
     * @type {WorkflowFormat}
     * @memberof Workflow
     */
    format?: WorkflowFormat;
    /**
     * The id of a workflow.
     * @type {string}
     * @memberof Workflow
     */
    readonly id?: string;
    /**
     * The workflow's expected list of inputs.
     * @type {Array<WorkflowInput>}
     * @memberof Workflow
     */
    readonly inputs?: Array<WorkflowInput>;
    /**
     * The number of workflow inputs
     * @type {number}
     * @memberof Workflow
     */
    readonly inputsCount?: number;
    /**
     * The descriptive name for the workflow
     * @type {string}
     * @memberof Workflow
     */
    readonly label?: string;
    /**
     * The last modified by.
     * @type {string}
     * @memberof Workflow
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof Workflow
     */
    readonly lastModifiedDate?: Date;
    /**
     * The workflow's list of expected outputs.
     * @type {Array<WorkflowOutput>}
     * @memberof Workflow
     */
    readonly outputs?: Array<WorkflowOutput>;
    /**
     * The type of the source which stores the workflow definition.
     * @type {string}
     * @memberof Workflow
     */
    sourceType?: WorkflowSourceTypeEnum;
    /**
     * The maximum number of times a task may retry.
     * @type {number}
     * @memberof Workflow
     */
    readonly maxRetries?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Workflow
     */
    readonly workflowTaskComponentNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Workflow
     */
    readonly workflowTriggerComponentNames?: Array<string>;
    /**
     * The steps that make up the workflow.
     * @type {Array<WorkflowTask>}
     * @memberof Workflow
     */
    readonly tasks?: Array<WorkflowTask>;
    /**
     * The steps that make up the workflow.
     * @type {Array<WorkflowTrigger>}
     * @memberof Workflow
     */
    readonly triggers?: Array<WorkflowTrigger>;
    /**
     * 
     * @type {number}
     * @memberof Workflow
     */
    version?: number;
}


/**
 * @export
 */
export const WorkflowSourceTypeEnum = {
    Classpath: 'CLASSPATH',
    Filesystem: 'FILESYSTEM',
    Git: 'GIT',
    Jdbc: 'JDBC'
} as const;
export type WorkflowSourceTypeEnum = typeof WorkflowSourceTypeEnum[keyof typeof WorkflowSourceTypeEnum];


/**
 * Check if a given object implements the Workflow interface.
 */
export function instanceOfWorkflow(value: object): value is Workflow {
    return true;
}

export function WorkflowFromJSON(json: any): Workflow {
    return WorkflowFromJSONTyped(json, false);
}

export function WorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Workflow {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'connectionsCount': json['connectionsCount'] == null ? undefined : json['connectionsCount'],
        'definition': json['definition'] == null ? undefined : json['definition'],
        'description': json['description'] == null ? undefined : json['description'],
        'format': json['format'] == null ? undefined : WorkflowFormatFromJSON(json['format']),
        'id': json['id'] == null ? undefined : json['id'],
        'inputs': json['inputs'] == null ? undefined : ((json['inputs'] as Array<any>).map(WorkflowInputFromJSON)),
        'inputsCount': json['inputsCount'] == null ? undefined : json['inputsCount'],
        'label': json['label'] == null ? undefined : json['label'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'outputs': json['outputs'] == null ? undefined : ((json['outputs'] as Array<any>).map(WorkflowOutputFromJSON)),
        'sourceType': json['sourceType'] == null ? undefined : json['sourceType'],
        'maxRetries': json['maxRetries'] == null ? undefined : json['maxRetries'],
        'workflowTaskComponentNames': json['workflowTaskComponentNames'] == null ? undefined : json['workflowTaskComponentNames'],
        'workflowTriggerComponentNames': json['workflowTriggerComponentNames'] == null ? undefined : json['workflowTriggerComponentNames'],
        'tasks': json['tasks'] == null ? undefined : ((json['tasks'] as Array<any>).map(WorkflowTaskFromJSON)),
        'triggers': json['triggers'] == null ? undefined : ((json['triggers'] as Array<any>).map(WorkflowTriggerFromJSON)),
        'version': json['__version'] == null ? undefined : json['__version'],
    };
}

  export function WorkflowToJSON(json: any): Workflow {
      return WorkflowToJSONTyped(json, false);
  }

  export function WorkflowToJSONTyped(value?: Omit<Workflow, 'createdBy'|'createdDate'|'connectionsCount'|'id'|'inputs'|'inputsCount'|'label'|'lastModifiedBy'|'lastModifiedDate'|'outputs'|'maxRetries'|'workflowTaskComponentNames'|'workflowTriggerComponentNames'|'tasks'|'triggers'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'definition': value['definition'],
        'description': value['description'],
        'format': WorkflowFormatToJSON(value['format']),
        'sourceType': value['sourceType'],
        '__version': value['version'],
    };
}

