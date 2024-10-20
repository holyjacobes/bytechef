/* tslint:disable */
/* eslint-disable */
/**
 * The Platform Custom Component Internal API
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
 * An custom component.
 * @export
 * @interface CustomComponent
 */
export interface CustomComponent {
    /**
     * The version of a custom component.
     * @type {number}
     * @memberof CustomComponent
     */
    componentVersion?: number;
    /**
     * The created by.
     * @type {string}
     * @memberof CustomComponent
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof CustomComponent
     */
    readonly createdDate?: Date;
    /**
     * The description of a custom component.
     * @type {string}
     * @memberof CustomComponent
     */
    description?: string;
    /**
     * If a custom component is enabled or not.
     * @type {boolean}
     * @memberof CustomComponent
     */
    enabled?: boolean;
    /**
     * The icon of a custom component.
     * @type {string}
     * @memberof CustomComponent
     */
    icon?: string;
    /**
     * The id of an custom component.
     * @type {number}
     * @memberof CustomComponent
     */
    id?: number;
    /**
     * The language in which the component is implemented
     * @type {string}
     * @memberof CustomComponent
     */
    readonly language?: CustomComponentLanguageEnum;
    /**
     * The last modified by.
     * @type {string}
     * @memberof CustomComponent
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof CustomComponent
     */
    readonly lastModifiedDate?: Date;
    /**
     * The name of a custom component.
     * @type {string}
     * @memberof CustomComponent
     */
    name: string;
    /**
     * The title of a custom component.
     * @type {string}
     * @memberof CustomComponent
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomComponent
     */
    version?: number;
}


/**
 * @export
 */
export const CustomComponentLanguageEnum = {
    Java: 'JAVA',
    Javascript: 'JAVASCRIPT',
    Python: 'PYTHON',
    Ruby: 'RUBY'
} as const;
export type CustomComponentLanguageEnum = typeof CustomComponentLanguageEnum[keyof typeof CustomComponentLanguageEnum];


/**
 * Check if a given object implements the CustomComponent interface.
 */
export function instanceOfCustomComponent(value: object): value is CustomComponent {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CustomComponentFromJSON(json: any): CustomComponent {
    return CustomComponentFromJSONTyped(json, false);
}

export function CustomComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'componentVersion': json['componentVersion'] == null ? undefined : json['componentVersion'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'id': json['id'] == null ? undefined : json['id'],
        'language': json['language'] == null ? undefined : json['language'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'name': json['name'],
        'title': json['title'] == null ? undefined : json['title'],
        'version': json['__version'] == null ? undefined : json['__version'],
    };
}

  export function CustomComponentToJSON(json: any): CustomComponent {
      return CustomComponentToJSONTyped(json, false);
  }

  export function CustomComponentToJSONTyped(value?: Omit<CustomComponent, 'createdBy'|'createdDate'|'language'|'lastModifiedBy'|'lastModifiedDate'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'componentVersion': value['componentVersion'],
        'description': value['description'],
        'enabled': value['enabled'],
        'icon': value['icon'],
        'id': value['id'],
        'name': value['name'],
        'title': value['title'],
        '__version': value['version'],
    };
}

