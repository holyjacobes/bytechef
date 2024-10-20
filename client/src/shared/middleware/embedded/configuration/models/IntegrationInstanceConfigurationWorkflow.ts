/* tslint:disable */
/* eslint-disable */
/**
 * The Embedded Configuration Internal API
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
import type { IntegrationInstanceConfigurationWorkflowConnection } from './IntegrationInstanceConfigurationWorkflowConnection';
import {
    IntegrationInstanceConfigurationWorkflowConnectionFromJSON,
    IntegrationInstanceConfigurationWorkflowConnectionFromJSONTyped,
    IntegrationInstanceConfigurationWorkflowConnectionToJSON,
    IntegrationInstanceConfigurationWorkflowConnectionToJSONTyped,
} from './IntegrationInstanceConfigurationWorkflowConnection';

/**
 * Contains configuration and connections required for the execution of a particular integration workflow.
 * @export
 * @interface IntegrationInstanceConfigurationWorkflow
 */
export interface IntegrationInstanceConfigurationWorkflow {
    /**
     * The created by.
     * @type {string}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    readonly createdDate?: Date;
    /**
     * The input parameters of an integration instance configuration used as workflow input values.
     * @type {{ [key: string]: any; }}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    inputs?: { [key: string]: any; };
    /**
     * The connections used by an integration instance configuration.
     * @type {Array<IntegrationInstanceConfigurationWorkflowConnection>}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    connections?: Array<IntegrationInstanceConfigurationWorkflowConnection>;
    /**
     * If a workflow is enabled or not in the integration instance configuration workflow.
     * @type {boolean}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    enabled?: boolean;
    /**
     * The id of an integration instance configuration workflow.
     * @type {number}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    readonly id?: number;
    /**
     * The id of an integration instance configuration.
     * @type {number}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    integrationInstanceConfigurationId?: number;
    /**
     * The last execution date of an integration instance configuration workflow.
     * @type {Date}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    lastExecutionDate?: Date;
    /**
     * The last modified by.
     * @type {string}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    readonly lastModifiedDate?: Date;
    /**
     * The url of a static url used to trigger a workflow.
     * @type {string}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    staticWebhookUrl?: string;
    /**
     * The id of a workflow.
     * @type {string}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    workflowId?: string;
    /**
     * The workflow reference code
     * @type {string}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    readonly workflowReferenceCode?: string;
    /**
     * 
     * @type {number}
     * @memberof IntegrationInstanceConfigurationWorkflow
     */
    version?: number;
}

/**
 * Check if a given object implements the IntegrationInstanceConfigurationWorkflow interface.
 */
export function instanceOfIntegrationInstanceConfigurationWorkflow(value: object): value is IntegrationInstanceConfigurationWorkflow {
    return true;
}

export function IntegrationInstanceConfigurationWorkflowFromJSON(json: any): IntegrationInstanceConfigurationWorkflow {
    return IntegrationInstanceConfigurationWorkflowFromJSONTyped(json, false);
}

export function IntegrationInstanceConfigurationWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationInstanceConfigurationWorkflow {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'inputs': json['inputs'] == null ? undefined : json['inputs'],
        'connections': json['connections'] == null ? undefined : ((json['connections'] as Array<any>).map(IntegrationInstanceConfigurationWorkflowConnectionFromJSON)),
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'id': json['id'] == null ? undefined : json['id'],
        'integrationInstanceConfigurationId': json['integrationInstanceConfigurationId'] == null ? undefined : json['integrationInstanceConfigurationId'],
        'lastExecutionDate': json['lastExecutionDate'] == null ? undefined : (new Date(json['lastExecutionDate'])),
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'staticWebhookUrl': json['staticWebhookUrl'] == null ? undefined : json['staticWebhookUrl'],
        'workflowId': json['workflowId'] == null ? undefined : json['workflowId'],
        'workflowReferenceCode': json['workflowReferenceCode'] == null ? undefined : json['workflowReferenceCode'],
        'version': json['__version'] == null ? undefined : json['__version'],
    };
}

  export function IntegrationInstanceConfigurationWorkflowToJSON(json: any): IntegrationInstanceConfigurationWorkflow {
      return IntegrationInstanceConfigurationWorkflowToJSONTyped(json, false);
  }

  export function IntegrationInstanceConfigurationWorkflowToJSONTyped(value?: Omit<IntegrationInstanceConfigurationWorkflow, 'createdBy'|'createdDate'|'id'|'lastModifiedBy'|'lastModifiedDate'|'workflowReferenceCode'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'inputs': value['inputs'],
        'connections': value['connections'] == null ? undefined : ((value['connections'] as Array<any>).map(IntegrationInstanceConfigurationWorkflowConnectionToJSON)),
        'enabled': value['enabled'],
        'integrationInstanceConfigurationId': value['integrationInstanceConfigurationId'],
        'lastExecutionDate': value['lastExecutionDate'] == null ? undefined : ((value['lastExecutionDate']).toISOString()),
        'staticWebhookUrl': value['staticWebhookUrl'],
        'workflowId': value['workflowId'],
        '__version': value['version'],
    };
}

