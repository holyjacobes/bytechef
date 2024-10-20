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
/**
 * 
 * @export
 * @interface CreateProjectInstanceWorkflowJob200Response
 */
export interface CreateProjectInstanceWorkflowJob200Response {
    /**
     * The id of an executed job.
     * @type {number}
     * @memberof CreateProjectInstanceWorkflowJob200Response
     */
    jobId?: number;
}

/**
 * Check if a given object implements the CreateProjectInstanceWorkflowJob200Response interface.
 */
export function instanceOfCreateProjectInstanceWorkflowJob200Response(value: object): value is CreateProjectInstanceWorkflowJob200Response {
    return true;
}

export function CreateProjectInstanceWorkflowJob200ResponseFromJSON(json: any): CreateProjectInstanceWorkflowJob200Response {
    return CreateProjectInstanceWorkflowJob200ResponseFromJSONTyped(json, false);
}

export function CreateProjectInstanceWorkflowJob200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectInstanceWorkflowJob200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'jobId': json['jobId'] == null ? undefined : json['jobId'],
    };
}

  export function CreateProjectInstanceWorkflowJob200ResponseToJSON(json: any): CreateProjectInstanceWorkflowJob200Response {
      return CreateProjectInstanceWorkflowJob200ResponseToJSONTyped(json, false);
  }

  export function CreateProjectInstanceWorkflowJob200ResponseToJSONTyped(value?: CreateProjectInstanceWorkflowJob200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jobId': value['jobId'],
    };
}

