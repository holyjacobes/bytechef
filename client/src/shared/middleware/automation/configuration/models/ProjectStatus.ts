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


/**
 * The status of a project.
 * @export
 */
export const ProjectStatus = {
    Draft: 'DRAFT',
    Published: 'PUBLISHED'
} as const;
export type ProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus];


export function instanceOfProjectStatus(value: any): boolean {
    for (const key in ProjectStatus) {
        if (Object.prototype.hasOwnProperty.call(ProjectStatus, key)) {
            if (ProjectStatus[key as keyof typeof ProjectStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ProjectStatusFromJSON(json: any): ProjectStatus {
    return ProjectStatusFromJSONTyped(json, false);
}

export function ProjectStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectStatus {
    return json as ProjectStatus;
}

export function ProjectStatusToJSON(value?: ProjectStatus | null): any {
    return value as any;
}

export function ProjectStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): ProjectStatus {
    return value as ProjectStatus;
}

