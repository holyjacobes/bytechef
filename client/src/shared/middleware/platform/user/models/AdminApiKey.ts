/* tslint:disable */
/* eslint-disable */
/**
 * The Platform User Internal API
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
 * Contains generated key required for calling public Platform API.
 * @export
 * @interface AdminApiKey
 */
export interface AdminApiKey {
    /**
     * The created by.
     * @type {string}
     * @memberof AdminApiKey
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof AdminApiKey
     */
    readonly createdDate?: Date;
    /**
     * The id of an admin api key.
     * @type {number}
     * @memberof AdminApiKey
     */
    readonly id?: number;
    /**
     * The last modified by.
     * @type {string}
     * @memberof AdminApiKey
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof AdminApiKey
     */
    readonly lastModifiedDate?: Date;
    /**
     * The last used date.
     * @type {Date}
     * @memberof AdminApiKey
     */
    readonly lastUsedDate?: Date;
    /**
     * The name of an admin api key.
     * @type {string}
     * @memberof AdminApiKey
     */
    name: string;
    /**
     * The preview of secret admin api key.
     * @type {string}
     * @memberof AdminApiKey
     */
    readonly secretKey: string;
}

/**
 * Check if a given object implements the AdminApiKey interface.
 */
export function instanceOfAdminApiKey(value: object): value is AdminApiKey {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('secretKey' in value) || value['secretKey'] === undefined) return false;
    return true;
}

export function AdminApiKeyFromJSON(json: any): AdminApiKey {
    return AdminApiKeyFromJSONTyped(json, false);
}

export function AdminApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminApiKey {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'lastUsedDate': json['lastUsedDate'] == null ? undefined : (new Date(json['lastUsedDate'])),
        'name': json['name'],
        'secretKey': json['secretKey'],
    };
}

  export function AdminApiKeyToJSON(json: any): AdminApiKey {
      return AdminApiKeyToJSONTyped(json, false);
  }

  export function AdminApiKeyToJSONTyped(value?: Omit<AdminApiKey, 'createdBy'|'createdDate'|'id'|'lastModifiedBy'|'lastModifiedDate'|'lastUsedDate'|'secretKey'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

