import { Pagination } from "./common";

/**
 * Event object
 * The Event object describes information about an xMatters event including the form and response 
 * choices, conference bridge information, the event initiator, and up to 100 directly-targeted 
 * recipients of the event.
 * 
 *  	 
 * annotations : Pagination of Annotation objects
 * The comments that were made when users responded to a notification. This field contains only 
 * the first page of results (up to 100 messages). This object is included when 
 * ?embed=annotations is included in the request.
 * 
 * attachments: AttachmentsReference objects - The files that are attached to the event.
 * 
 * bypassPhoneIntro: Boolean
 * When this value is set to true, xMatters omits the standard greeting and plays the message immediately.
 * 
 * created: string 
 * The date and time the event was initiated (in UTC format).
 * 
 * conference: Conference object 
 * Describes the conference bridge used with this event.
 * 
 * escalationOverride: Boolean 
 * When this value is set to true, xMatters ignores shift escalation delays and sends an immediate broadcast message to all recipients.
 * 
 * eventId: string 
 * The integer identifier used to identify this event in the xMatters user interface.
 * 
 * eventType: string
 * The type of event:
 *    - “USER”: this includes events sent via an integration and events manually triggered using the Messages tab in the web user interface or using a POST /triggers request.
 *    - “SYSTEM”: notifications from xMatters about events within xMatters (for example, device validation updates, temporary replacement notifications or issues with integrations).
 * 
 * expirationInMinutes: integer 
 * The number of minutes the event is active before it terminates.
 * 
 * floodControl: Boolean 
 * True if some notifications were not delivered because notification flood control was activated for this event. Because the event is created before notifications are sent, this value will always be FALSE when an event is first created. Once notifications are generated and sent, the value is set to TRUE if any notifications are subject to flood control.
 * 
 * plan: PlanReference object 
 * The communication plan that triggered the event.
 * 
 * form: FormReference object 
 * The form that triggered the event.
 * 
 * id: string 
 * The unique identifier of this event.
 * 
 * incident: string 
 * The incident ID of the event.
 * 
 * messages: Pagination of Messages object 
 * The messages sent for the event. This field contains only the first page of results (up to 100 messages). This object is included when ?embed=messages is included in the request.
 * 
 * overrideDeviceRestrictions: Boolean 
 * When this value is set to true, xMatters ignores device timeframes and delays. This allows users to be notified on any device at any time, regardless of their preferences.
 * 
 * otherResponseCount: string 
 * For events that count responses, this represents the number of responses recieved by users counted as ‘others’. When this value is greater than or equal to the otherResponseCountThreshold field, then the response counts (fill counts) for 'others’ is considered to be met.
 * 
 * otherResponseCountThreshold: string 
 * For events that count responses, this represents the number of responses from users counted as 'others’ required before the event stops sending notifictations to more other users.
 * 
 * priority: string - The priority of the event. 
 * Use one of the following values:
 *    {“LOW”, “MEDUIM”, “HIGH”}
 * 
 * 
 * Example:
 * {
 *   "id":"ced9fac9-1065-4659-82ab-1c9664a777b2",
 *   "name":"SQL Database outage",
 *   "eventType": "USER",
 *   "plan": {
 *     "id": "c56730a9-1435-4ae2-8c7e-b2539e635ac6",
 *     "name": "Database monitoring"
 *   },
 *   "form":
 *   {
 *     "id":"ef62b6ac-ba7e-40e8-9253-a837efcd38ea",
 *     "name" : "Database Outage"
 *   },
 *   "floodControl" : "false",
 *   "submitter":
 *   {
 *     "id":"661f3f18-75ab-44fd-a22a-4bb0fe15917e",
 *     "targetName":"mmcbride",
 *     "firstName":"Mary",
 *     "lastName":"Mcbride",
 *     "recipientType":"PERSON",
 *     "links":
 *     {
 *       "self":"/api/xm/1/people/661f3f18-75ab-44fd-a22a-4bb0fe15917e"
 *     }
 *   },
 *   "recipients":
 *   {
 *     "count":1,
 *     "total":1,
 *     "data": [
 *     {
 *       ...truncated Recipient object...
 *     }],
 *   },
 *   "priority":"MEDIUM",
 *   "annotations": {
 *     "count": 1,
 *     "total": 1,
 *     "data": [
 *       {
 *         "id": "f223698e-dbd0-4089-a4c3-e6b7c76c639d",
 *         "event":
 *         {
 *           "id": "ced9fac9-1065-4659-82ab-1c9664a777b2",
 *           "eventId": "408005",
 *           "links":
 *           {
 *             "self": "/api/xm/1/events/ced9fac9-1065-4659-82ab-1c9664a777b2"
 *           }
 *         },
 *         "author":
 *         {
 *           "id": "c21b7cc9-c52a-4878-8d26-82b26469fdc7",
 *           "targetName": "admin",
 *           "firstName": "Mary",
 *           "lastName": "McBride",
 *           "recipientType": "PERSON",
 *           "links":
 *           {
 *             "self": "/api/xm/1/people/c21b7cc9-c52a-4878-8d26-82b26469fdc7"
 *           }
 *         },
 *         "comment": "I can help out.",
 *         "created": "2016-10-31T22:17:31.450Z"
 *       }
 *     ]
 *   },
 *   "attachments": {
 *     "count": 2,
 *     "total": 2,
 *     "data": [
 *     {
 *         "name": "MIM Error 1",
 *         "path": "events/ced9fac9-1065-4659-82ab-1c9664a777b2/attachments/MIM Error 1",
 *         "links":
 *           {
 *             "self": "/api/xm/1/events/ced9fac9-1065-4659-82ab-1c9664a777b2/attachments/MIM Error 1"
 *           }
 *     },
 *     {
 *         "name": "Customer_error_1",
 *         "path": "/events/ced9fac9-1065-4659-82ab-1c9664a777b2/attachments/Customer_error_1",
 *         "links":
 *           {
 *             "self": "/api/xm/1/events/ced9fac9-1065-4659-82ab-1c9664a777b2/attachments/Customer_error_1"
 *           }
 *     }
 * 
 *     ],
 *   },
 *   "incident":"INCIDENT_ID-408005",
 *   "expirationInMinutes":180,
 *   "eventId":"408005",
 *   "created":"2016-10-31T22:37:35.301+0000",
 *   "terminated":"2016-10-31T22:38:40.063+0000",
 *   "status":"TERMINATED_EXTERNAL",
 *   "otherResponseCount" : 2,
 *   "otherResponseCountThreshold" : 1,
 *   "conference": {
 *     "bridgeId":"67955226",
 *     "type":"BRIDGE"
 *   },
 *   "responseOptions": {
 *     "count":2,
 *     "total":2,
 *     "data": [
 *     {
 *       "id":"b1697b84-c0cf-412c-b956-af810cd86bae",
 *       "number":1,
 *       "text":"Join",
 *       "description":"Join",
 *       "prompt":"I will join the conference bridge",
 *       "action":"RECORD_RESPONSE",
 *       "contribution":"NONE",
 *       "joinConference":true,
 *       "allowComments": false
 *      },
 *     {
 *       "id": "1ea8906f-be05-410d-9077-fa7587d7b626",
 *       "number":2,
 *       "text":"Reject",
 *       "description":"Reject",
 *       "prompt":"I cannot assist",
 *       "action":"STOP_NOTIFYING_USER",
 *       "contribution":"NONE",
 *       "joinConference":false,
 *       "allowComments": true,
 *       "translations": {
 *         "count": 3,
 *         "total": 3,
 *         "data": [
 *            {
 *              "id": "046fd6e9-06a3-4350-acce-f672124b6484",
 *              "language": "hi",
 *              "text": "ठीक",
 *              "description": "ठीक"
 *            },
 *            {
 *             "id": "fb747f5b-10c8-48a9-9f3f-a679d2090963",
 *             "language": "fr",
 *             "text": "d'accord",
 *             "prompt": "",
 *             "description": "d'accord"
 *            },
 *            {
 *             "id": "1775b40f-07b2-45cd-8a05-b140286081d9",
 *             "language": "zh_CN",
 *             "text": "同意"
 *            }
 *          ]
 *        }
 *     }]
 *   },
 *   "properties":
 *   {
 *     "myNumberProperty": 323423,
 *     "myPasswordProperty": "ilovecats123",
 *     "myTextProperty#en": "This is urgent. Please respond.",
 *     "myListProperty": [
 *       "iOS",
 *       "Android",
 *       "Windows 10"
 *     ],
 *     "myBooleanProperty": true,
 *     "myComboProperty": "Oracle Database",
 *     "myHierarchyProperty": [
 *       {
 *         "category": "Country",
 *         "value": "USA"
 *       },
 *       {
 *         "category": "State",
 *         "value": "WA"
 *       },
 *       {
 *         "category": "City",
 *         "value": "Seattle"
 *       }
 *     ]
 *   },
 *   "messages": {
 *      "count": 1,
 *      "total": 1,
 *      "data": [
 *      {
 *        "id": "e3d4e459-732d-4b4f-8f85-159ec25db729",
 *        "messageType": "SUBJECT_AND_BODY",
 *        "subject": "Outage in NOC 4",
 *        "body": "<div><span style=\"white-space: nowrap;"\>[First Name]&nbsp;[Last Name]&nbsp; - a new task was assigned to you</span></div><span style=\"white-space: nowrap;"\></span>Description:</span><div><span style=\"white-space: nowrap;"\>Please investigate the reported outage.</span></div><div><span style=\"white-space: nowrap;"\><br></span></div><div><span style=\"white-space: nowrap;"\>https://servicedesk.example.com/90834903q095</span></div>"
 *     }]
 *   }  
 * }
 */
export class Event {


    annotations: Pagination<Annotation>;
    attachments: AttachmentsReference;
    bypassPhoneIntro: boolean;
    created: string;
    conference: Conference;
    escalationOverride: boolean;
    eventId: string;
    eventType: string;
    expirationInMinutes: number;
    floodControl: boolean;
    plan: PlanReference
    form: FormReference
    id: string
    incident: string
    messages: Pagination<Message>
    overrideDeviceRestrictions: boolean;    
    otherResponseCount: string
    otherResponseCountThreshold: string
    priority: string
    properties: Properties;
    recipients: Pagination<Recipient>;
    requirePhonePassword: boolean;
    responseCountsEnabled: boolean;
    responseOptions: ResponseOptions;
    submitter: PersonReference;
    status: string;
    suppressions: EventSuppression;
    terminated: string;
    voicemailOptions: VoicemailOptions;

}




// ==================================================================================================================================================

/**
properties	Properties object
The properties of the form. Use these to look up the event’s message details. This object is included when ?embed=properties is included in the request.
recipients	Pagination of Recipient object
The recipients of the event. This field contains only the first page of results (up to 100 recipients). This object is included when ?embed=recipients is included in the request.
requirePhonePassword	Boolean
When this value is true, the recipient must enter their phone password before a voice notification is played. This option cannot be used with options to leave the message content as voicemail.
responseCountsEnabled	Boolean
True if the event is configured to count responses.
responseOptions	ResponseOptions object
The response options sent as part of the notification. This object is included when ?embed=responseOptions is included in the request. Returns the response in the user’s original language when the request includes ?embed=responseOptions,responseOptions.translations. Translations are not currently available for historical data.
submitter	PersonReference object
The user who initiated the event.
status	string
The current status of this event. Use one of the following values:
“ACTIVE”
“SUSPENDED”
“TERMINATED”
“TERMINATED_EXTERNAL”
“SUPPRESSED”
suppressions	Event Suppression object
A list of any suppressions of this event as a result of an event flood control rule.
terminated	string
The date and time the event was terminated (in UTC format). This field is only present for terminated events.
voicemailOptions	VoicemailOptions object
For voice notifications, this defines whether to try the call again or leave a message.
*/

// ==================================================================================================================================================
/**
EventReference object
EventReference object

An EventReference object contains a reference to an event.

 	 
id	string
The unique identifier of the event.
eventId	string
The numeric identifier of the event as displayed in the event report.
links	SelfLink object
A link that can be used to access the event.


{
    "id": "a7ab8012-0583-4e5b-a5dd-36f67ec016f3",
    "eventId": "1562001",
    "links":
    {
      "self": "/api/xm/1/events/a7ab8012-0583-4e5b-a5dd-36f67ec016f3"
    }
  }
*/
// ==================================================================================================================================================

/**
FormReference object
FormReference object
Describes a reference to a form, including its name and unique identifier.

 	 
id	string
The unique identifier of the form.
name	string
The name of the form.

{
    "id":"ef62b6ac-ba7e-40e8-9253-a837efcd38ea",
    "name" : "Database Outage"
  }
*/  
// ==================================================================================================================================================
/** 
Conference object
Conference object


The Conference object describes xMatters-hosted and externally-hosted conference bridges associated with an event. See ConferencePointer object for information on the conference object when triggering an event.

 	 
id	string
The unique identifier of the conference bridge. Returned only for xMatters-hosted conference bridges.
bridgeId	string
For xMatters-hosted bridges, this field contains the xMatters bridge number. For externally-hosted conference bridges, this field contains the name of the external conference bridge.
bridgeNumber	string
For xMatters-hosted bridges, this field repeats the xMatters bridge number. For externally-hosted conference bridges, this field contains the static or dynamic number of the external conference bridge (the number that identifies the conference to the conference bridge provider).
type	string
Whether the conference bridge is an xMatters-hosted conference bridge or hosted by a third-party provider. Use one of the following values:
“BRIDGE” : for xMatters-hosted bridges
“EXTERNAL”: for externally-hosted bridges


{
    "bridgeId":"67955226",
    "bridgeNumber": "67955226",
    "type":"BRIDGE"
  }
*/  
// ==================================================================================================================================================

/**
Properties object
Properties object - without translations

  {
    "myNumberProperty": 323423,
    "myPasswordProperty": "ilovecats123",
    "myTextProperty#en": "This is urgent. Please respond.",
    "myListProperty":
    [
      "iOS",
      "Android",
      "Windows 10"
    ],
    "myBooleanProperty": true,
    "myComboProperty": "Oracle Database",
    "myHierarchyProperty":
    [
      {
        "category": "Country",
        "value": "USA"
      },
      {
        "category": "State",
        "value": "WA"
      },
      {
        "category": "City",
        "value": "Seattle"
      }
    ]
  }  

Properties object - with text property translations

  {
    "myNumberProperty": {"value": 323423},
    "myPasswordProperty": {"value": "ilovecats123"},
    "myTextProperty": {
      "value": "This is urgent. Please respond.",
      "translations": {
          "en": "This is urgent. Please respond.",
          "fr": "C'est urgent. Répond s'il te plait."
        }
    },  
    "myListProperty": {"values":
      [
        "iOS",
        "Android",
        "Windows 10"
      ]
    },
    "myBooleanProperty": {"value": true},
    "myComboProperty": {"value": "Oracle Database"},
    "myHierarchyProperty": {"values":
      [
       {
          "category": "Country",
          "value": "USA"
        },
       {
          "category": "State",
          "value": "WA"
        },
        {
          "category": "City",
          "value": "Seattle"
        }
     ]
    }
  }  

The Properties object contains information about the event’s form properties.

By inspecting form properties you can extract message details and use them with other systems in your toolchain, for example, you could extract a ticket number from an event and then use it to close a ticket in your service desk system.

The names of fields in the Properties object correspond to the names of the actual form properties and are unique for every form.

The following table shows the example format of each property type if the text property is submitted without translations:

Property Type	Description	Example
Number	An integer.	"myNumberProperty": 323423
Text	A string. Text property names include the language code.	"myTextProperty#en": "This is urgent. Please respond."
Password	A string in plain text.	"myPasswordProperty": "ilovecats123"
List	An array of strings that represent the selected choices.	"myListProperty": [
  "listItem1",
  "listItem2",
  "listItem3"
]
Boolean	A Boolean value.	"myBooleanProperty" : true
Combo Box	A string that represents the selected choice.	"myComboProperty": "Oracle Database"
Hierarchy	An array of objects that include category and value fields that represent each level of the hierarchy of the selected value.	"myHeirarchyProperty"[
  {
    "category": "Country",
    "value": "USA"
  },
  {
    "category": "State",
    "value": "WA"
  },
  {
    "category": "City",
    "value": "Seattle"
  }
]
Text Property with Translations: The following table shows the format of each property type if the text property is submitted with translations:

Property Type	Description	Example
Number	An integer.	"myNumberProperty": {"value": 323423}
Text	A string. Text properties are made up of a value and any language the text property is translated into.	"myTextProperty": [
  "value": "This is urgent. Please respond.",
  "translations": {
    "en": "This is urgent. Please respond.",
    "fr": "C'est urgent. Répond s'il te plait.",
 },
]
Password	A string in plain text.	"myPasswordProperty": {"value": "ilovecats123"}
List	An array of strings that represent the selected choices.	"myListProperty": {"values": [
  "listItem1",
  "listItem2",
  "listItem3"
]}
Boolean	A Boolean value.	"myBooleanProperty": {"value": true}
Combo Box	A string that represents the selected choice.	"myComboProperty": {"value": "Oracle Database"}
Hierarchy	An array of objects that include category and value fields that represent each level of the hierarchy of the selected value.	"myHeirarchyProperty": {"values": [
  {
    "category": "Country",
    "value": "USA"
  },
  {
    "category": "State",
    "value": "WA"
  },
  {
    "category": "City",
    "value": "Seattle"
  }
]
]}
*/


// ==================================================================================================================================================

/**
VoicemailOptions object
VoicemailOptions object


Voicemail Options settings configure the handling behavior for standard phone notifications and conference calls when voicemail is detected.

 	 
retry	integer
optional	The number of times to attempt to contact the user after reaching voicemail on the initial attempt.
every	integer
optional	The number of seconds to wait between retry attempts.
leave	string
optional	The action to take when voicemail is detected and there are no more retry attempts. Valid values include (web user interface equivalent in brackets):
callbackandmessage: Leave the message and callback information (Message Content and Callback Info). This option cannot be selected when the event requires a phone password.
messageonly: Leave the message content but do not leave callback information (Message Content Only). This option cannot be selected when the event requires a phone password.
callbackonly: Leave a voicemail message that only includes callback information so the recipient can call in and retrieve the message (Callback Info Only). This is the default if no option is selected.
hangup: do not leave a message (Do Not Leave Message).


"voicemailOptions":
    {
    "retry": 0,
    "every": 60,
    "leave": "callbackonly"
    }

*/

// ==================================================================================================================================================

/** 
ResponseOptions object
ResponseOptions object

The ResponseOptions object describes the response options for the event. You can use it to display the form’s existing responses, override properties of existing responses, create new responses, or see the response in the user’s original language. You can configure all parts of the response except for translations and voice recordings.

 	 
id	string
The unique identifier of the response to select. To use a response as it is defined on the form, include the id field and do not provide any other values. To use an existing response and modify part of it, include the id field and the fields you want to modify. To create a new response, omit the id field and provide the remaining fields.
number	integer
The keypad digit to press when responding to a voice notification.
text	string
Specifies how the response choice is displayed on text devices and the mobile app, and how the link appears in email responses. Corresponds to the Response field in the web interface.
description	string
Allows you to specify a longer description of the response choice to be included in emails. Corresponds to the Email Description field in the web user interface.
prompt	string
The text that is used with Text-To-Speech when delivering a voice notification. Corresponds to the Voice Prompt field in the web user interface.
action	string
If the form is not configured to count responses, valid values include:
“RECORD_RESPONSE”
“STOP_NOTIFYING_USER”
“STOP_NOTIFYING_TARGET”
“ESCALATE”
“ASSIGN_TO_USER”
“END”
If the form is configured to count responses, valid values include:
“COUNT_RESPONSE”
“OMIT_RESPONSE_COUNT”
contribution	string
Describes whether to count the response as positive, negative, or neutral for reporting purposes. Valid values include:
“NONE”
“POSITIVE”
“NEUTRAL”
“NEGATIVE”
joinConference	Boolean
When this is true, choosing the response from a voice notification automatically connects the responder to the conference bridge.
allowComments	Boolean
When this is true, the recipient is given the option to add comments when they select this response option. When this is false, they’re not able to add comments when they respond.
redirectUrl	string
An HTTP or HTTPS URL associated with the response option. When the user responds with this choice from email, mobile apps, or the web user interface, they are automatically redirected to this URL. For example, you can use this to open a service desk ticket related to the incident or direct people to a chat room where they can discuss the issue.
translations	string
The original language of the user’s response. The two-letter code used in the language field adheres to ISO 639 standards. Translations are not available for historical data. For more information, see Languages in the online help.


Example: Configure response options. This example shows how to choose an existing response, modify an existing response, and create a new response

"responseOptions" : 
[
  {
    "id" : "fee39ecf-75a7-45eb-9e63-ffc441499c4f"
  },
  {
    "id" : "085d4bea-9dfb-4d2b-8136-22e19b1baaf6",
    "redirectUrl" : "https://jira.example.com/view/INCD-2933",
    "contribution": "POSITIVE",
    "action": "STOP_NOTIFYING_TARGET"
  },
  {
      "number": 3,
      "text": "Reject",
      "description": "I cannot help",
      "prompt": "Reject",
      "action": "RECORD_RESPONSE",
      "contribution": "NEGATIVE",
      "joinConference": true,
      "allowComments": false,
      "redirectUrl": "https://jira.example.com/",
      "translations": {
        "count": 3,
        "total": 3,
        "data": [
          {
            "id": "046fd6e9-06a3-4350-acce-f672124b6484",
            "language": "hi",
            "text": "ठीक",
            "description": "ठीक"
          },
          {
            "id": "fb747f5b-10c8-48a9-9f3f-a679d2090963",
            "language": "fr",
            "text": "d'accord",
            "prompt": "",
            "description": "d'accord"
          },
          {
            "id": "1775b40f-07b2-45cd-8a05-b140286081d9",
            "language": "zh_CN",
            "text": "同意"
          }
         ]
       }
    }
  ]
*/

// ==================================================================================================================================================

/** 
ConferencePointer object
ConferencePointer object

If the form contains a conference section, you can use this section to configure the conference bridge.

If the form is configured to use xMatters-hosted conference bridges, you choose to use an in-progress xMatters conference bridge or to create a new one. You can also select an externally-hosted conference bridge if the form is configured to allow them.

If you do not specify a conference bridge, the event will either use a new xMatters-hosted conference bridge or will return an error if the form is only configured to allow externally-hosted bridges.

See Conference object for information on the conference object in GET /events results.

 	 
bridgeId	string
The name or ID of the bridge.
To use an existing xMatters-hosted bridge, use the bridge number visible on the Conferences page.
To use a new xMatters-hosted bridge, omit this value.
To use an externally-hosted bridge, set this value to the name of the external bridge.
type	string
The type of bridge. Use one of the following values:
“BRIDGE” : xMatters-hosted conferences bridge
“EXTERNAL” : externally-hosted conference bridge
bridgeNumber	string
The number that identifies the conference to the conference bridge provider. Use only when triggering an externally-hosted conference bridge with a dynamically set bridge number.




Example: New xMatters-hosted conference bridge

"conference":
{
  "type": "BRIDGE"
}
Example: In-progress xMatters-hosted conference bridge

"conference":
{
  "bridgeId": "3882920",
  "type": "BRIDGE"
}
Example: Externally-hosted conference bridge with a static bridge number

"conference":
{
  "bridgeId": "Corporate WebEx",
  "type": "EXTERNAL"
}
Example: Externally-hosted conference bridge with a dynamic bridge number

"conference":
{
  "bridgeId": "Corporate WebEx",
  "type": "EXTERNAL",
  "bridgeNumber": "88737396"
}
*/

// ==================================================================================================================================================
/** 
PropertyValues object
PropertyValues object
Sets the values of the form properties.

The names of the properties are unique to each communication plan and form. Depending on how the form is configured, these properties may have minimum and maximum values or other restrictions. Refer to your form in the xMatters user interface to see how the properties are configured.

You must provide values for mandatory form fields that are not configured to use default values. All other form fields are optional.

Property Type	Definition
Boolean	Boolean
Use true or false.
Examples:
"EOCActivated" : false
"updateRequired" : true
Number	integer
A whole number. Write negative numbers using the - character.
Examples:
"severity" : 3
"rating" : -2
Text	string
A string that represents the text property. Text property translations are supported upon submission. See Text Translations for the accepted format.
List	array [string]
Provide an array of string values that represent one or more list box selections.
Examples:
"Affected Locations" : ["Seattle", "Portland"]
"Department" : ["Accounting"]
Combo Box	string
A string that represents a single selection in a combo box field.
Examples:
"Severity" : "LOW"
Password	string
A string representation of a password
Examples:
"password" : "38se*#Ehww1"
Heirarchy	array [objects]
Provide an array of objects that define a value for each level of the hierarchy. Each object defines the selection using two key/value pairs: thecategory field defines the name of the level and the value field defines the selection. The following example shows how to select a value from a Country > State > City heirarchy.
Example:
"region" : [
  {"category" : "Country", "value" : "USA"},
  {"category" : "State", "value" : "California"},
  {"category" : "City", "value" : "Los Angeles"}
]


"properties" : 
{
  "myBooleanProperty" : false,
  "myNumberProperty": 22183,
  "myTextProperty" : "See the attached evacuation route map.",
  "myListProperty" : ["Grocery", "Automotive", "Seasonal"],
  "myComboProperty" : "Shelter in place.",
  "myPasswordProperty" : "e293Usf@di",
  "myHeirarchyProperty" : [
    {"category" : "country", "value": "USA"},
    {"category" : "state", "value" : "California"}
    {"category" : "city", "value" : "Los Angeles"}
  ]
}
*/

// ==================================================================================================================================================

/** 
Recipient Trigger
Recipient Trigger object
This is the format for specifying recipients when triggering an event. If your form is configured to count responses, you can include the response count (fill count) for each group or dynamic team recipient.

 	 
id	string
The target name or unique identifier of the recipient.
recipientType	string
optional	The type of recipient. It is recommended to provide the recipient type to increase the performance of triggering an event. Value values include the following:
“PERSON”
“DEVICE”
“GROUP”
“DYNAMIC_TEAM”
responseCountThreshold	integer
When a form uses response counts, this value specifies the number of responses that are required before xMatters stops notifying the remaining members of a group or dynamic team. This value applies only to group and dynamic team recipients.


"recipients" :
[

  {"id":"mmcbride", "recipientType": "PERSON"},
  {"id":"bfdbcb31-d02e-4a4f-a91c-7d68fbe416df", "recipientType": "PERSON"},
  {"id":"mmcbride|Work Email", "recipientType": "DEVICE"},
  {"id":"4a0fdfb4-7c49-4581-9cd9-804f2956e19b", "recipientType": "DEVICE"},
  {"id":"Executives", "recipientType": "GROUP"},
  {"id":"f19d8b10-923a-4c23-8348-06ced678075e", "recipientType": "GROUP", "responseCountThreshold" : 3},
  {"id":"First Aid Attendants", "recipientType": "DYNAMIC_TEAM", "responseCountThreshold" : 1},
  {"id":"ed2606c5-ef2b-4ce8-9259-d5cdacd5bd90", "recipientType": "DYNAMIC_TEAM"} 
]
*/
// ==================================================================================================================================================

/** 
 * Annotation Object
Annotation object
The annotation object contains the comment that was made and links to the person who made the comment and the event that it applies to.

 	 
id	string
The id of the annotation
event	EventReference object
A link to the event where the comment was made
author	PersonReference object
The person who made the comment
comment	string
The comment that was made on the event.
created	string
The date and time the comment was made.


{
    "count": 1,
    "totat": 1,
    "data": [
        "id": "f223698e-dbd0-4089-a4c3-e6b7c76c639d",
        "event": {
            "id": "ced9fac9-1065-4659-82ab-1c9664a777b2",
            "eventId": "408005",
            "links": {
                "self": "/api/xm/1/events/ced9fac9-1065-4659-82ab-1c9664a777b2"
            }
        },
        "author": {
            "id": "c21b7cc9-c52a-4878-8d26-82b26469fdc7",
            "targetName": "admin",
            "firstName": "Mary",
            "lastName": "McBride",
            "recipientType": "PERSON",
            "links": {
                "self": "/api/xm/1/people/c21b7cc9-c52a-4878-8d26-82b26469fdc7"
            }
        },
        "comment": "I can help out.",
        "created": "2017-10-31T22:17:31.450Z",
        "links": {
            "self": "/api/xm/1/events/ced9fac9-1065-4659-82ab-1c9664a777b2/annotations/f223698e-dbd0-4089-a4c3-e6b7c76c639d"
        }
  }
*/

// ==================================================================================================================================================
/** 
Device Name Object
DeviceName object

A list of the device names to target. These names may be customized for your company but typically include options such as 'Work Email’, 'Work Phone’, 'Home Email’, 'Home Phone’, 'Mobile Phone’, 'SMS Phone’, and so on.

To see the list of device names configured for your system, use GET /device-names or log on to the user interface and create a device.

 	 
name	string
The name of the type of device to target.


"targetDeviceNames" : [
    {"name" : "Work Email"}, 
    {"name" : "Work Phone"}
    {"name" : "Home Email"}, 
    {"name" : "Home Phone"}, 
    {"name" : "SMS Phone"}, 
    {"name" : "Fax"}, 
    {"name" : "Numeric Pager"},
    {"name" : "Pager"},
    {"name" : "Mobile Phone"},
    {"name" : "My custom device name"}
  ]
*/
// ==================================================================================================================================================
/** 
Messages Object
Messages object
The Messages object contains the messages that were sent to recipients as notifications for the event.

 	 
id	string
The unique identifier of the message.
messageType	string
The type of message; valid values are:
“SUBJECT_AND_BODY”: Indicates an email or mobile app message.
“TEXT”: Indicates a text message.
“VOICE”: Indicates a voicemail.
subject	string
The subject of the email or mobile app message.
body	string
The source code (in HTML) of the email or mobile app message body.



"messages": 
{
  "count": 1,
  "total": 1,
  "data": 
  [
    {
      "id": "e3d4e459-732d-4b4f-8f85-159ec25db729",
      "messageType": "SUBJECT_AND_BODY",
      "subject": "Outage in NOC 4",
      "body": "<div><span style=\"white-space: nowrap;\">[First Name]&nbsp;[Last Name]&nbsp; - a new task was assigned to you</span></div><span style=\"white-space: nowrap;\">Description:</span><div><span style=\"white-space: nowrap;\">Please investigate the reported outage.</span></div><div><span style=\"white-space: nowrap;\"><br></span></div><div><span style=\"white-space: nowrap;\">https://servicedesk.example.com/90834903q095</span></div>"
    }
  ]
*/

// ==================================================================================================================================================

/** 
User Delivery Data Object
User Delivery Data Object

This object describes notifications for Group and Device recipient types. Notifications for group recipients indicate which groups the user was part of. Notifications for devices indicate which user devices were targeted for messages.

 	 
event	EventReference object
The event that triggered the notifications.
person	PersonReference object
The user who received the notification.
deliveryStatus	string
A consolidated status from across all notifications sent to all of a user’s devices based on the most relevant status for an event.

For example, a user has four devices and all four are notified of an event. One of the notifications doesn’t reach the device and returns to xMatters as FAILED. The status of the notification (if requested at that moment) would be FAILED. The user receives the notification on the other three devices. The notification status would be DELIVERED if queried at that time. The user responds to the notification on a device and the status is updated to RESPONDED. Valid values include:
“RESPONDED”: The user has responded to a notification from one or more of their devices.
“DELIVERED”: A notification has reached one or more of the user’s devices.
“PENDING”: The notification was created but has not yet been sent to any of the user’s devices.
“FAILED”: Any notification that could not be delivered to a user’s devices
notifications	Notifications object
A list of the notifications generated for the user.
response	User Delivery Response object
If a user receives notifications to multiple devices, they can respond from each devices that receives the notification. The response field displays the last response received from the user, including the timestamp.
links	SelfLink object
A link that can be used to access the event.



{
    "count": 1,
    "total": 1,
    "data": [
      {
        "event": {
          "id": "7af4cab7-5301-4156-9d9e-33983a7f2b18",
          "eventId": "24721002",
          "links": {
            "self": "/api/xm/1/events/7af4cab7-5301-4156-9d9e-33983a7f2b18?at=2019-11-13T21:48:51Z"
          }
        },
        "person": {
          "id": "bc434d9d-a9a9-4b6d-8520-dc9adce0c57f",
          "targetName": "thanks",
          "recipientType": "PERSON",
          "links": {
            "self": "/api/xm/1/people/bc434d9d-a9a9-4b6d-8520-dc9adce0c57f?at=2019-11-13T21%3A48%3A51Z"
          },
          "firstName": "Tom",
          "lastName": "Hanks",
          "site": {
            "id": "87165184-f025-46ec-bc8e-11314b4ddeb5",
            "name": "Default Site",
            "links": {
              "self": "/api/xm/1/sites/87165184-f025-46ec-bc8e-11314b4ddeb5?at=2019-11-13T21%3A48%3A51Z"
            }
          },
          "properties": {
            "isFirstAid": [
              "true"
            ],
            "isCPR": [
              "true"
            ],
            "firstAidLevel": [
              "1"
            ],
            "location": [
              "Denver office"
            ],
          }
        },
        "deliveryStatus": "RESPONDED",
        "notifications": {
          "count": 1,
          "total": 1,
          "data": [
            {
              "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6",
              "category": "DEVICE",
              "recipient": {
                "id": "32d54bb4-9b3e-438b-bb9f-ea6060f5092b",
                "targetName": "1st Aid Email",
                "recipientType": "DEVICE",
                "deviceType": "EMAIL",
                "name": "",
                "links": {
                  "self": "/api/xm/1/devices/32d54bb4-9b3e-438b-bb9f-ea6060f5092b?at=2019-11-13T21%3A48%3A51Z"
                }
              },
              "deliveryStatus": "RESPONDED",
              "deliveryAttempted": "2019-11-12T16:54:14.918Z",
              "responses": {
                "count": 2,
                "total": 2,
                "data": [
                  {
                    "text": "On my way - be there in 5 minutes.",
                    "notification": {
                      "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6"
                    },
                    "received": "2019-11-12T16:54:37.656+0000"
                  },
                  {
                    "text": "First aid attendant unavailable - call 911.",
                    "notification": {
                      "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6"
                    },
                    "received": "2019-11-12T16:54:31.328+0000"
                  }
                ]
              },
              "delivered": "2019-11-12T16:54:15.789Z",
              "responded": "2019-11-12T16:54:31.328Z"
            }
          ]
        },
        "response": {
          "text": "On my way - be there in 5 minutes",
          "notification": {
            "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6"
          },
          "received": "2019-11-12T16:54:37.656+0000"
        }
      }
    ],
    "links": {
      "self": "/api/xm/1/events/24721002/user-deliveries?limit=100&at=2019-11-13T21%3A48%3A51Z&embed=person.properties&offset=0"
    }
  }
*/
// ==================================================================================================================================================

/** 
Notifications Object
Notifications Object

This object contains information about the notification that was sent to the users when an event occurred.

 	 
id	string
The unique identifier of this notification.
recipient	Recipient object
The user, group, device or dynamic team in xMatters that can receive notifications.
created	string
The timestamp of when the notification was created.
delivered	string
The timestamp of when the notification was delivered to the user.
responded	string
The timestamp of when the user responded to the notification.
deliveryStatus	string
The status of the delivery. Valid values include:
“RESPONDED”
“DELIVERED”
“PENDING”
“FAILED”
responses	string
A list of the user’s responses, which can include multiple responses from multiple device types.


{
    "notifications": {
         "count": 1,
         "total": 1,
         "data": [
           {
             "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6",
             "category": "DEVICE",
             "recipient": {
               "id": "32d54bb4-9b3e-438b-bb9f-ea6060f5092b",
               "targetName": "1st Aid Email",
               "recipientType": "DEVICE",
               "deviceType": "EMAIL",
               "name": "",
               "links": {
                 "self": "/api/xm/1/devices/32d54bb4-9b3e-438b-bb9f-ea6060f5092b?at=2019-11-13T21%3A48%3A51Z"
               }
             },
             "deliveryStatus": "RESPONDED",
             "deliveryAttempted": "2019-11-12T16:54:14.918Z",
             "responses": {
               "count": 2,
               "total": 2,
               "data": [
                 {
                   "text": "On my way - be there soon.",
                   "notification": {
                     "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6"
                   },
                   "received": "2019-11-12T16:54:37.656+0000"
                 },
                 {
                   "text": "Unavailable, call 911.",
                   "notification": {
                     "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6"
                   },
                   "received": "2019-11-12T16:54:31.328+0000"
                 }
               ]
             },
             "delivered": "2019-11-12T16:54:15.789Z",
             "responded": "2019-11-12T16:54:31.328Z"
           }
         ]
       },
*/
// ==================================================================================================================================================

/** 
 * User Delivery Response Object
 * The response object contains information about how a user responded to an event.
 *  	 
 * text: string - The text of the response option selected by the user.
 * 
 * notification: string - The unique identifier of the notification.
 * 
 * received: string - The timestamp of when the response was received.
 * 
 * 
 * Example: 
 * {
 *       "response": {
 *         "text": "On my way - be there soon",
 *         "notification": {
 *           "id": "e6ba5be1-3482-4b61-9d98-eddd049bf1f6"
 *         },
 *         "received": "2019-11-12T16:54:37.656+0000"
 *       }
 * }
 */
export class UserDeliveryResponse {
    text: string;
    notification: string;
    received: string;

    constructor(text: string, notification: string, received: string) {
        this.text = text;
        this.notification = notification;
        this.received = received;
    }
}