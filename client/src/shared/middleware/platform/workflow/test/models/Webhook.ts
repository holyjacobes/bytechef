/* tslint:disable */
/* eslint-disable */
/**
 * The Platform Workflow Test Internal API
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
import type { WebhookRetry } from './WebhookRetry';
import {
    WebhookRetryFromJSON,
    WebhookRetryFromJSONTyped,
    WebhookRetryToJSON,
    WebhookRetryToJSONTyped,
} from './WebhookRetry';

/**
 * Used to register to receive notifications for certain events.
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    url?: string;
    /**
     * 
     * @type {WebhookRetry}
     * @memberof Webhook
     */
    retry?: WebhookRetry;
}

/**
 * Check if a given object implements the Webhook interface.
 */
export function instanceOfWebhook(value: object): value is Webhook {
    return true;
}

export function WebhookFromJSON(json: any): Webhook {
    return WebhookFromJSONTyped(json, false);
}

export function WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Webhook {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'url': json['url'] == null ? undefined : json['url'],
        'retry': json['retry'] == null ? undefined : WebhookRetryFromJSON(json['retry']),
    };
}

  export function WebhookToJSON(json: any): Webhook {
      return WebhookToJSONTyped(json, false);
  }

  export function WebhookToJSONTyped(value?: Webhook | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'url': value['url'],
        'retry': WebhookRetryToJSON(value['retry']),
    };
}

