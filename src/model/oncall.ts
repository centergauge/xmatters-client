

// On-call Object

//   "group":{ ... },
//   "shift":{ ... },
//   "members":
//   {
//     "count": 1,
//     "total": 1,
//     "data":
//     [
//       { ... }
//     ],
//     "links":
//     {
//       "self": "/api/xm/1/groups/954ada78-7b89-4356-b02c-df85ff30dfd2/shifts/62bdfe6b-6825-4c53-82e4-d147269666ff/occurrences/2017-04-17T04:00:00Z/members?offset=0&limit=3"
//     }
//   },
//   "end": "2017-04-18T04:00:00Z",
//   "start": "2017-04-17T04:00:00Z"
export class OnCall {

}

//   ShiftReference object
//   "shift":
//   {
//       "id": "31f69e50-fd0c-45d7-a212-63b300c68340",
//       "name": "Weekend On-call",
//       "links":
//       {
//         "self": "/api/xm/1/groups/292a2cd7-53d7-4523-b752-d10209532ed4/shifts/31f69e50-fd0c-45d7-a212-63b300c68340"
//       }
//   }
export class ShiftReference {}

//   ShiftOccurrenceMember object
// "position": 1,
// "delay": 0,
// "member":
// {
//     "id": "ceb08e86-2674-4812-9145-d157b0e24c17",
//     "targetName": "ddirk",
//     "recipientType": "PERSON",
//     "externallyOwned": false,
//     "links":
//     {
//       "self": "/api/xm/1/people/ceb08e86-2674-4812-9145-d157b0e24c17"
//     },
//     "firstName": "Don",
//     "lastName": "Dirk",
//     "language": "en",
//     "timezone": "US/Pacific",
//     "webLogin": "ddirk",
//     "phoneLogin": "3244",
//     "site":
//     {
//       "id": "8f2d98ed-eaa9-4b0b-b366-c1db06b27e1f",
//       "links":
//       {
//         "self": "/api/xm/1/sites/8f2d98ed-eaa9-4b0b-b366-c1db06b27e1f"
//       }
//     },
//     "status": "ACTIVE"
// }
export class ShiftOccurrenceMember {}


// Temporary Replacement object

// "start": "2017-04-17T04:00:00Z",
// "end": "2017-04-17T07:00:00Z",
// "replacement": 
// {
//   "id": "e87403fb-f8ca-40e7-a105-0330e2d125ba",
//   "targetName": "balves",
//   "recipientType": "PERSON",
//   "links":
//   {
//     "self": "/api/xm/1/people/e87403fb-f8ca-40e7-a105-0330e2d125ba"
//   },
//   "firstName": "Benito",
//   "lastName": "Alves",
//   "status": "ACTIVE"
// }
export class TemporaryReplacement {}


// Replacer object

// {
//   "id": "e87403fb-f8ca-40e7-a105-0330e2d125ba",
//   "targetName": "balves",
//   "recipientType": "PERSON",
//   "links":
//   {
//     "self": "/api/xm/1/people/e87403fb-f8ca-40e7-a105-0330e2d125ba"
//   },
//   "firstName": "Benito",
//   "lastName": "Alves",
//   "status": "ACTIVE"
// }
export class Replacer {}