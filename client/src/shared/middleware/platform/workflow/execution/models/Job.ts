/* tslint:disable */
/* eslint-disable */
/**
 * The Platform Workflow Execution Internal API
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
import type { ExecutionError } from './ExecutionError';
import {
    ExecutionErrorFromJSON,
    ExecutionErrorFromJSONTyped,
    ExecutionErrorToJSON,
    ExecutionErrorToJSONTyped,
} from './ExecutionError';
import type { TaskExecution } from './TaskExecution';
import {
    TaskExecutionFromJSON,
    TaskExecutionFromJSONTyped,
    TaskExecutionToJSON,
    TaskExecutionToJSONTyped,
} from './TaskExecution';
import type { Webhook } from './Webhook';
import {
    WebhookFromJSON,
    WebhookFromJSONTyped,
    WebhookToJSON,
    WebhookToJSONTyped,
} from './Webhook';

/**
 * Represents an execution of a workflow.
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * The created by.
     * @type {string}
     * @memberof Job
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof Job
     */
    readonly createdDate?: Date;
    /**
     * The index of the step on the job's workflow on which the job is working on right now.
     * @type {number}
     * @memberof Job
     */
    readonly currentTask?: number;
    /**
     * The time execution entered end status COMPLETED, STOPPED, FAILED
     * @type {Date}
     * @memberof Job
     */
    endDate?: Date;
    /**
     * 
     * @type {ExecutionError}
     * @memberof Job
     */
    error?: ExecutionError;
    /**
     * The id of a job.
     * @type {string}
     * @memberof Job
     */
    readonly id?: string;
    /**
     * The key-value map of the inputs passed to the job when it was created.
     * @type {{ [key: string]: any; }}
     * @memberof Job
     */
    readonly inputs?: { [key: string]: any; };
    /**
     * The job's human-readable name.
     * @type {string}
     * @memberof Job
     */
    readonly label?: string;
    /**
     * The last modified by.
     * @type {string}
     * @memberof Job
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof Job
     */
    readonly lastModifiedDate?: Date;
    /**
     * The key-value map of the outputs returned.
     * @type {{ [key: string]: any; }}
     * @memberof Job
     */
    readonly outputs?: { [key: string]: any; };
    /**
     * The id of the parent task that created this job. Required for sub-flows.
     * @type {number}
     * @memberof Job
     */
    readonly parentTaskExecutionId?: number;
    /**
     * The priority value.
     * @type {number}
     * @memberof Job
     */
    readonly priority: number;
    /**
     * The time of when the job began.
     * @type {Date}
     * @memberof Job
     */
    readonly startDate: Date;
    /**
     * The job's status.
     * @type {string}
     * @memberof Job
     */
    readonly status: JobStatusEnum;
    /**
     * 
     * @type {Array<TaskExecution>}
     * @memberof Job
     */
    taskExecutions?: Array<TaskExecution>;
    /**
     * The list of the webhooks configured.
     * @type {Array<Webhook>}
     * @memberof Job
     */
    readonly webhooks?: Array<Webhook>;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    readonly workflowId?: string;
}


/**
 * @export
 */
export const JobStatusEnum = {
    Created: 'CREATED',
    Started: 'STARTED',
    Stopped: 'STOPPED',
    Failed: 'FAILED',
    Completed: 'COMPLETED'
} as const;
export type JobStatusEnum = typeof JobStatusEnum[keyof typeof JobStatusEnum];


/**
 * Check if a given object implements the Job interface.
 */
export function instanceOfJob(value: object): value is Job {
    if (!('priority' in value) || value['priority'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function JobFromJSON(json: any): Job {
    return JobFromJSONTyped(json, false);
}

export function JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Job {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'currentTask': json['currentTask'] == null ? undefined : json['currentTask'],
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'error': json['error'] == null ? undefined : ExecutionErrorFromJSON(json['error']),
        'id': json['id'] == null ? undefined : json['id'],
        'inputs': json['inputs'] == null ? undefined : json['inputs'],
        'label': json['label'] == null ? undefined : json['label'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'outputs': json['outputs'] == null ? undefined : json['outputs'],
        'parentTaskExecutionId': json['parentTaskExecutionId'] == null ? undefined : json['parentTaskExecutionId'],
        'priority': json['priority'],
        'startDate': (new Date(json['startDate'])),
        'status': json['status'],
        'taskExecutions': json['taskExecutions'] == null ? undefined : ((json['taskExecutions'] as Array<any>).map(TaskExecutionFromJSON)),
        'webhooks': json['webhooks'] == null ? undefined : ((json['webhooks'] as Array<any>).map(WebhookFromJSON)),
        'workflowId': json['workflowId'] == null ? undefined : json['workflowId'],
    };
}

  export function JobToJSON(json: any): Job {
      return JobToJSONTyped(json, false);
  }

  export function JobToJSONTyped(value?: Omit<Job, 'createdBy'|'createdDate'|'currentTask'|'id'|'inputs'|'label'|'lastModifiedBy'|'lastModifiedDate'|'outputs'|'parentTaskExecutionId'|'priority'|'startDate'|'status'|'webhooks'|'workflowId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'endDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString()),
        'error': ExecutionErrorToJSON(value['error']),
        'taskExecutions': value['taskExecutions'] == null ? undefined : ((value['taskExecutions'] as Array<any>).map(TaskExecutionToJSON)),
    };
}

