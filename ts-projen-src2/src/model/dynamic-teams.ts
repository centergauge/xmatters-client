/** 
 * Dynamic team object
 *
 * A dynamic team is a set of users (based on the Recipient object) that are automatically generated 
 * based on a common attribute such as their skills, location, or other attributes. When returned by
 * your system, dynamic teams do not include the status field because dynamic teams are always 
 * active. When a dynamic team is a member of a group it is included in the returned list of group 
 * members.
 * 
 * 
 * id: string - A unique identifier that represents the dynamic team.
 * 
 * targetName: string - The name of the dynamic team.
 * 
 * recipientType: string For dynamic teams, this value is “DYNAMIC_TEAM”.
 * 
 * responseCount: integer
 * When an event is configured to count responses for this dynamic team, this field indicates
 * the number of dynamic team members that have responded positively to the event. If this 
 * number is greater than the responseCountThreshold then the response or “fill” counts for 
 * this team have been met.
 * 
 * responseCountThreshold: integer
 * When an event is configured to count responses for this dynamic team, this field indicates 
 * the number of dynamic team members required to respond to the event. Once this threshold 
 * is met, additional dynamic team members are no longer notified.
 * 
 * externallyOwned: Boolean
 * See externallyOwned.
 * 
 * useEmergencyDevice: Boolean
 * True if the dynamic team is configured to contact failsafe devices when no other devices 
 * are configured to receive notifications.
 * 
 * examples: 
 * {
 *   "targetName": "DynamicTeam",
 *   "useEmergencyDevice": false,
 *   "externallyOwned": false,
 *   "recipientType": "DYNAMIC_TEAM",
 *   "id": "88ba7243-a4bc-477e-9b76-c49200a54b35",
 *   "responseCount" : 2,
 *   "responseCountThreshold" : 1
 *  }
 */
