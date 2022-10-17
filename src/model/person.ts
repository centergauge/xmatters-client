

import { Pagination, Recipient, ReferenceByIdAndSelfLink, SelfLink } from "./common";
import { Role } from "./roles";

/**
 * Person Object
 * 
 * Describes a person in xMatters. A person object is a Recipient object with a recipientType of 
 * PERSON.
 * 
 * A Person object contains the fields of the Recipient object as well as the fields described in 
 * the table below. The Person object includes a list of the person’s roles when the ?embed=roles query parameter 
 * is used with the request.
 * 
 * See also: Recipient object.
 * 
 *  	 
 * firstName: string - The first name of the person.
 * 
 * language: string - The person’s default language.
 * 
 * lastName: string - The last name of the person.
 * 
 * licenseType: string - The license type of the person in xMatters. 
 * Available options are:
 *   FULL_USER: Full users are users who actively take part during the response process.
 *   STAKEHOLDER_USER: Stakeholder users are users who don’t need to take action during the 
 *                     response process. They cannot respond to any notifications they receive, 
 *                     act as an incident resolver, trigger forms that send messages, or initiate 
 *                     incidents or flows.
 * 
 * phoneLogin: string 
 * An access code that the person can use to identify themselves when they phone in to xMatters 
 * to retrieve messages. You can also optionally set a phonePin for the user.
 * 
 * phonePin: string
 * The PIN a user enters with their phone login to identify themselves when they phone in to 
 * xMatters to retrieve messages. The user must have a phoneLogin set in order to use a phonePin.
 * 
 * properties: Properties object
 * A list of the custom fields and attributes that are defined for this person.
 * 
 * roles: Pagination of Role object (optional)
 * A list of the user’s roles. This optional field is included when the request uses the 
 * ?embed=roles query parameter.
 * 
 * site: ReferenceByIdAndSelfLink object 
 * A link to a resource that you can use to find out information about the site to which the 
 * person is assigned.
 * 
 * supervisors: Person object or PersonReference - optional 
 * A Paginated list of the user’s supervisors. This optional field is included when the request 
 * uses the ?embed=supervisors query parameter. Returns a Person object or PersonReference object, 
 * depending on what permissions the authenticating user has.
 * 
 * timezone: string - The person’s time zone.
 * Example: “US/Eastern”
 * 
 * lastLogin: string - The date and time of the last time the person logged into xMatters.
 * 
 * webLogin: string - The identifier the person can use to log in to the xMatters user interface. 
 * This is often identical to the targetName value.
 * 
 * 
 * Example:
 * This example shows a person object including roles. Roles are included in the Person object when the query parameter ?embed=roles is used with the request.
 * 
 * {
 *   "id":"9407eb2e-8eb2-43d9-88a8-875237af941d",
 *   "targetName":"mmcbride",
 *   "recipientType":"PERSON",
 *   "licenseType": "FULL_USER",
 *   "externallyOwned":false,
 *   "links":    
 *   {
 *     "self":"/api/xm/1/people/9407eb2e-8eb2-43d9-88a8-875237af941d"
 *   },
 *   "firstName":"Mary",
 *   "lastName":"McBride",
 *   "language":"en",
 *   "timezone":"US/Pacific",
 *   "webLogin":"mmcbride",
 *   "phoneLogin": "23423",
 *   "phonePin": "46189",
 *   "site":
 *   {
 *     "id":"f0c572a8-45ec-fe23-289c-df749cf19a5e",
 *     "links":
 *     {
 *       "self":"/api/xm/1/sites/f0c572a8-45ec-fe23-289c-df749cf19a5e"
 *     }
 *   },
 *   "roles": {
 *     "count": 2,
 *     "total": 2,
 *     "data": [
 *       {
 *         "id": "c2bdcd9e-1a18-0ff6-ffde-76e4022c94e6",
 *         "name": "Standard User"
 *       },
 *       {
 *         "id": "593433b0-e3b7-2e4c-f0cf-9faf2110b069",
 *         "name": "Group Monitor"
 *       }
 *     ]
 *   },
 *   "lastLogin": "2019-06-14T22:17:31.450Z",
 *   "status":"ACTIVE"
 * }
 */
export class Person extends Recipient {
    firstName: string;
    language: string;
    lastName: string;
    licenseType: string;
    phoneLogin: string;
    phonePin: string;
    properties: Properties;
    roles: Pagination<Role>;
    site: ReferenceByIdAndSelfLink;
    supervisors: Person | PersonReference;
    timezone: string;
    lastLogin: string;
    webLogin: string;

    constructor(id: string, targetName: string, recipientType: string, externalKey: string, externallyOwned: boolean, locked: string[], status: string, links: SelfLink, 
      firstName: string, language: string, lastName: string, licenseType: string, phoneLogin: string, phonePin: string, properties: Properties, roles: Pagination<Role>, 
      site: ReferenceByIdAndSelfLink, supervisors: Person | PersonReference, timezone: string, lastLogin: string, webLogin: string) {
        super(id, targetName, recipientType, externalKey, externallyOwned, locked, status, links);
        this.firstName = firstName;
        this.language = language;
        this.lastName = lastName;
        this.licenseType = licenseType;
        this.phoneLogin = phoneLogin;
        this.phonePin = phonePin;
        this.properties = properties;
        this.roles = roles;
        this.site = site;
        this.supervisors = supervisors;
        this.timezone = timezone;
        this.lastLogin = lastLogin;
        this.webLogin = webLogin;
    }
}

/** 
 * Properties object
 * 
 * The properties object refers to the values of the custom fields and custom attributes assigned 
 * to a person.
 * 
 * Custom fields contain a single value of type text, check box (Boolean), decimal, 
 * list (a text field that is required to match one of the predefined values in the custom field), integer, or password. 
 * Custom attributes are of type text and may have multiple values. You can locate custom fields and attributes on 
 * the Profile tab of the user profile.
 * 
 * To set the values of custom fields and attributes, include name/value pairs where the name is the 
 * name of the field or attribute and the value is its value. To remove a non-mandatory custom field 
 * or attribute, include the name of the field and set the value to null.
 * Example: "firstAid" : "CPR level 1"
 * 
 *  	 
 * {property_name}	{property_value}
 * 
 * {property_name} is a string that represents the name of the custom field.
 * 
 * property_value is a string, number, integer, or Boolean value that represents the type of custom 
 * field or attribute. Use null to remove the value of a non-mandatory property.
 * 
 * 
 * Example:
 * "properties": 
 * {
 *   "myTextCustomField" : "myText",
 *   "myCheckboxCustomField" : true,
 *   "myDecimalCustomField" : 7.4,
 *   "myIntegerCustomField" : 422,
 *   "myListCustomField" : "ListItem5",
 *   "myPasswordCustomField" : "42*W$E)121",
 *   "myCustomAttribute" : ["value1", "value2", "value3"],
 *   "removeACustomField" : null
 * }
 */
export class Properties {
    [key: string]: string | number | boolean | string[] | null;

    constructor(properties: Properties) {
        for (const key in properties) {
            this[key] = properties[key];
        }
    }
}

/** 
 * PersonReference object
 * Refers to a person in xMatters.
 * 
 * 
 * id: string - The unique identifier of the person.
 * 
 * targetName: string - The user id of the person.
 * 
 * firstName: string - The first name of the person.
 * 
 * lastName: string - The last name of the person.
 * 
 * recipientType: string - The type of user (for example, PERSON).
 * 
 * links: SelfLink object - A link that can be used to retrieve the person using this API.
 * 
 * 
 * Example:
 * {
 *     "id" : "481086d8-357a-4279-b7d5-d7dce48fcd12",
 *     "targetName": "mmcbride",
 *     "firstName": "mary",
 *     "lastName": "mcbride",
 *     "recipientType": "PERSON",
 *     "links":
 *     {
 *       "self":"/api/xm/1/people/481086d8-357a-4279-b7d5-d7dce48fcd12"
 *     },
 * }
 */    
export class PersonReference {
    id: string;
    targetName: string;
    firstName: string;
    lastName: string;
    recipientType: string;
    links: SelfLink;

    constructor(id: string, targetName: string, firstName: string, lastName: string, recipientType: string, links: SelfLink) {
        this.id = id;
        this.targetName = targetName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.recipientType = recipientType;
        this.links = links;
    }
}

/** 
 * UserQuota object
 * Refers to the type and number of licenses for the users in your xMatters system. Users with a 
 * Stakeholder license type can be assigned the same roles and permissions as full users and they 
 * can access information in the web user interface and mobile app, but they cannot respond to 
 * any notifications they receive, act as an incident resolver, trigger forms that send messages, 
 * or initiate incidents or flows.
 *  	 
 * total: integer 
 * The total number of licenses, both unused and active, available for your xMatters instance.
 * 
 * active: integer - The number of active, or used, licenses for your instance.
 * 
 * unused: integer - The number of unused, or available, licenses for your instance.
 * 
 * 
 * Example:
 * {
 *     "stakeholderUsersEnabled": true,
 *     "stakeholderUsers": {
 *       "total": 10,
 *       "active": 6,
 *       "unused": 4
 *     },
 *     "fullUsers": {
 *       "total": 300,
 *       "active": 169,
 *       "unused": 131
 *     }
 * }
 */
export class UserQuota {
    stakeholderUsersEnabled: boolean;
    stakeholderUsers: UserQuotaCount;
    fullUsers: UserQuotaCount;

    constructor(stakeholderUsersEnabled: boolean, stakeholderUsers: UserQuotaCount, fullUsers: UserQuotaCount) {
        this.stakeholderUsersEnabled = stakeholderUsersEnabled;
        this.stakeholderUsers = stakeholderUsers;
        this.fullUsers = fullUsers;
    }
}

export class UserQuotaCount {
    total: number;
    active: number;
    unused: number;

    constructor(total: number, active: number, unused: number) {
        this.total = total;
        this.active = active;
        this.unused = unused;
    }
}