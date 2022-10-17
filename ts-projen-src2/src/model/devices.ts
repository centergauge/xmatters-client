/** 
 * Device objects
 * Device objects represent devices in xMatters.
 * 
 * Device objects include the fields defined in Recipient object in addition to fields specific to 
 * device recipients. (See also Recipient object)
 * 
 * The Device object is a base for specific types of devices such as email and voice devices. When 
 * you retrieve a device, it contains the fields included in Recipient object, Device object, and 
 * the specific type of device. 
 * See also:
 *    - Recipient object
 *    - Email device object
 *    - Voice device object
 *    - SMS device object
 *    - Text Pager device object
 *    - Apple Push device object
 *    - Android Push device object
 *    - Fax device object
 *    - Public Address device object
 *    - Generic device object
 * 
 *  	 
 * defaultDevice: Boolean - True if this device can receive notifications when the person has no active devices.
 * 
 * delay: integer - The number of minutes to wait for a response on this device before contacting the next device.
 * 
 * description: string - A system-generated description of the device.
 * 
 * deviceType: string - The type of device. 
 * Use one of the following values: 
 *    {“ANDROID_PUSH”, “APPLE_PUSH”, “EMAIL”, “FAX”, “GENERIC”, “TEXT_PAGER”, “TEXT_PHONE”, “VOICE”, “VOICE_IVR”}
 * 
 * name: string - The name of the device. Example: “Work Email” or “Home Phone”
 * 
 * owner: PersonReference object - A link to the person who owns the device.
 * 
 * priorityThreshold: string
 * The minimum priority that an event must have for it to be delivered to this device. 
 * Use one of the following values:
 *     {“LOW”, “MEDIUM”, “HIGH”}
 * 
 * provider: ReferenceById object - The name of the provider used to send notifications to this device.
 * 
 * recipientType: string - The type of this object. For devices, this value is “DEVICE”.
 * 
 * sequence: string - The order in which the device will be contacted, where 1 represents the first device contacted.
 * 
 * targetName: string - For devices, the target name is the user name, followed by the | (pipe) character, followed by the device name. Example: “mmcbride|Work Phone”
 * 
 * testStatus: string - Whether the device has been tested. 
 * Use one of the following values:
 *     {“UNTESTED”, “PENDING”, “TESTED”}
 * 
 * timeframes: array [DeviceTimeframes object]
 * optional	The timeframes the device is active and able to receive notifications. This field is included when the query parameter ?embed=timeframes is included in supported requests.
 * 
 * 
 * 
 * Example:
 * This example shows an email device object that includes timeframes. Device objects for other
 * device types omit the emailAddress field and include fields specific to the type of device.
 * 
 * {
 *     "id": "77c7ec54-8609-47da-9b6b-80d4b24bead1",
 *     "name": "Home Email",
 *     "emailAddress": "akaur@example.com",
 *     "targetName": "akaur|Home Email",
 *     "deviceType": "EMAIL",
 *     "description": "akaur@example.com",
 *     "testStatus": "UNTESTED",
 *     "externallyOwned": false,
 *     "defaultDevice": true,
 *     "priorityThreshold": "LOW",
 *     "sequence": 1,
 *     "delay": 0,
 *     "owner":
 *     {
 *         "id": "031313cc-42d3-4703-a90e-36cc5f5f6209",
 *         "targetName": "akaur",
 *         "links":
 *         {
 *             "self": "/api/xm/1/people/031313cc-42d3-4703-a90e-36cc5f5f6209"
 *         }
 *     },
 *     "links":
 *     {
 *         "self": "/api/xm/1/devices/77e7ec54-8609-47da-9b6b-80d4b24bead1"
 *     },
 *     "recipientType": "DEVICE",
 *     "status": "ACTIVE",
 *     "provider":
 *     {
 *         "id": "(x)matters Email Gateway"
 *     }  
 *     "timeframes":
 *     [
 *         {
 *             "name":"Weekdays",
 *             "startTime":"08:00",
 *             "durationInMinutes":840,
 *             "days": ["MO", "TU", "WE", "TH", "FR"],
 *             "excludeHolidays": true
 *         },
 *         {
 *             "name":"Weekends",
 *             "startTime":"09:00",
 *             "durationInMinutes":480,
 *             "days": ["SU", "SA"],
 *             "excludeHolidays": false
 *         }
 *     ]
 * }
 */



// ==================================================================================================================================================
/** 
Email device object

Email device objects include the fields of Recipient object and Device object, as well as the following fields:


deviceType: string - For email devices, the device type is “EMAIL”.

emailAddress: string
The email address associated with the device. Your system administrator may restrict the 
domains that are allowed to be associated with an email device.

Example: 
"deviceType": "EMAIL",
"emailAddress": "akaur@example.com",
*/




// ==================================================================================================================================================



/** 
 * Voice device object
 * Voice device objects include the fields of Recipient object and Device object, as well as the following fields:
 * 
 *  	 
 * deviceType: string - For phone devices, the device type is “VOICE”.
 * phoneNumber: string
 * The phone number associated with this voice device. The phone number uses E.164 international 
 * format including country code and extension.
 * 
 * Example: +16045551234
 * 
 * 
 * "deviceType": "VOICE",
 * "phoneNumber": "604 555 1234;ext=83",
 * 
 */





// ==================================================================================================================================================





/**
SMS device object
SMS devices receive text messages. SMS device objects include the fields of Recipient object
and Device object, as well as the following fields:

 	 
deviceType: string - For SMS (text message) devices, the device type is “TEXT_PHONE”.
phoneNumber: string
The phone numbers associated with this device. Phone numbers for SMS devices are stored with no 
spaces between the numbers. The phone number uses E.164 international format including country 
code and extension.

Example: +12505551212

"deviceType": "TEXT_PHONE",
"phoneNumber": "+12505551212",
*/




// ==================================================================================================================================================




/**
 * Text pager device object
Text pager device objects include the fields of Recipient object and Device object, as well as the following fields:

 	 
deviceType: string - For text pager devices, the device type is “TEXT_PAGER”.
pin: string - The PIN code for the pager.
twoWayDevice: Boolean
True if the pager is capable of sending a return message in response to a notification. 
False if the pager can only receive notifications.

"deviceType": "TEXT_PAGER",
"pin": "1234",
"twoWayDevice": true,

*/



// ==================================================================================================================================================

/** 
Apple push device object

Apple push devices are Apple devices such as iPhones and iPads that use the xMatters mobile app. 
Push devices are added to xMatters automatically the first time they are used to log on to the 
system. They can be retrieved but not created with this API.

Apple push device objects include the fields of Recipient object and Device object, as well as 
the following fields:

 	 
deviceType: string - For Apple push devices, the device type is “APPLE_PUSH”.
accountId: string - The email address associated with the device.
apnToken: string - The APN token associated with the device.
alertSound: string - The alert sound associated with the device.
soundStatus: string - The sound status of the device.
soundThreshold: string - The sound threshold of the device.

"deviceType": "APPLE_PUSH",
"accountid": "",
"apnToken" : "",
"alertSound" : "",
"soundStatus" : "",
"soundThreshold" : ""
*/

// ==================================================================================================================================================
/**
Android push device object
Android push device object
"deviceType": "ANDROID_PUSH",
"accountId": "",
"registrationId": "",
Android push devices are devices such as Android phones that use the xMatters mobile app. Push devices are added to xMatters automatically the first time they are used to log on to the system. They can be retrieved but not created with this API.

Android push device objects include the fields of Recipient object and Device object, as well as the following fields:

 	 
deviceType   string
For Android push devices, the device type is “ANDROID_PUSH”.
accountId	string
The account ID of the device.
registrationId	string
The registration ID associated with the device.

*/
// ==================================================================================================================================================
/**
Fax device object
Fax device object
"deviceType": "FAX",
"phoneNumber": "4035551919",
"country": "US",
Fax device objects include the fields of Recipient object and Device object, as well as the following fields:

 	 
deviceType	string
For fax devices, the device type is “FAX”.
phoneNumber	string
The phone number, not including country code, for the fax. The phone number follows the regular expression pattern ^d{5, 20}$
Example: 4035551919 (when country code is US)
Note: This phone number format differs from the phone number format used for voice, public address, and SMS devices.
country	string
The country code of the fax device.

*/


// ==================================================================================================================================================
/**
Public address device object
Public address device object
"deviceType": "VOICE_IVR",
"phoneNumber": "+177855556782;ext=120",
Public address devices are one-way broadcast devices that play voice notifications but do not include response options. Public address device objects include the fields of Recipient object and Device object, as well as the following fields:

 	 
deviceType	string
For public address devices, the device type is “VOICE_IVR”.
phoneNumber	string
The phone numbers associated with this device. The phone number uses E.164 international format including country code and extension.
Example: +15555551212;ext=838

*/
// ==================================================================================================================================================
/**
Generic device object
Generic device object
"deviceType": "GENERIC",
"pin": "",
Generic device objects include the fields of Recipient object and Device object, as well as the following fields:

 	 
deviceType	string
For generic devices, the device type is “GENERIC”.
pin	string
The PIN of the device.

*/


// ==================================================================================================================================================
/**
Device timeframes object
Device timeframes object
[
  {
    "name":"Weekdays",
    "startTime":"08:00",
    "durationInMinutes":840,
    "days": ["MO", "TU", "WE", "TH", "FR"],
     "excludeHolidays": true
   },
   {
     "name":"Weekends",
     "startTime":"09:00",
     "durationInMinutes":480,
     "days": ["SU", "SA"],
     "excludeHolidays": false
   }
 ]
Device timeframes objects list the timeframes that the device is active and able to receive notifications.

 	 
days	string
List of the days of the week this timeframe is active. Valid values include the following:
“SU”
“MO”
“TU”
“WE”
“TH”
“FR”
“SA”
durationInMinutes	integer
The length of the timeframe in minutes.
excludeHolidays	Boolean
True if the timeframe is not active on holidays.
name	string
The name of the timeframe.
startTime	string
The time of day that the timeframe begins.
Example: “08:00”
timezone	string
The time zone of the startTime value.
Example: “US/Pacific”

*/

// ==================================================================================================================================================
/**
DeviceReference object
Device reference object

The reference to a device in xMatters returned when the device is a listed as a recipient on a form.

 	 
id	string
The unique identifier of the device.
recipientType	string
The type of this object. For devices, this value is “DEVICE”.
name	string
The name of the device.
Example: “Work Email” or “Home Phone”
deviceType	string
The type of device. Use one of the following values:
“ANDROID_PUSH”
“APPLE_PUSH”
“EMAIL”
“FAX”
“GENERIC”
“TEXT_PAGER”
“TEXT_PHONE”
“VOICE”
“VOICE_IVR”
owner	PersonReference object
A link to the person who owns the device.

{
    "id": "77c7ec54-8609-47da-9b6b-80d4b24bead1",
    "recipientType": "DEVICE",
    "name": "Home Email",
    "deviceType": "EMAIL",
    "owner":
      {
        "id": "031313cc-42d3-4703-a90e-36cc5f5f6209",
        "targetName": "akaur",
        "links":
          {
            "self": "/api/xm/1/people/031313cc-42d3-4703-a90e-36cc5f5f6209"
          }
      },
  }
*/