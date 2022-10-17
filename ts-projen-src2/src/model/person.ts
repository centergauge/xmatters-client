

Person Object
This example shows a person object including roles. Roles are included in the Person object when the query parameter ?embed=roles is used with the request.

{
  "id":"9407eb2e-8eb2-43d9-88a8-875237af941d",
  "targetName":"mmcbride",
  "recipientType":"PERSON",
  "licenseType": "FULL_USER",
  "externallyOwned":false,
  "links":    
  {
    "self":"/api/xm/1/people/9407eb2e-8eb2-43d9-88a8-875237af941d"
  },
  "firstName":"Mary",
  "lastName":"McBride",
  "language":"en",
  "timezone":"US/Pacific",
  "webLogin":"mmcbride",
  "phoneLogin": "23423",
  "phonePin": "46189",
  "site":
  {
    "id":"f0c572a8-45ec-fe23-289c-df749cf19a5e",
    "links":
    {
      "self":"/api/xm/1/sites/f0c572a8-45ec-fe23-289c-df749cf19a5e"
    }
  },
  "roles": {
    "count": 2,
    "total": 2,
    "data": [
      {
        "id": "c2bdcd9e-1a18-0ff6-ffde-76e4022c94e6",
        "name": "Standard User"
      },
      {
        "id": "593433b0-e3b7-2e4c-f0cf-9faf2110b069",
        "name": "Group Monitor"
      }
    ]
  },
  "lastLogin": "2019-06-14T22:17:31.450Z",
  "status":"ACTIVE"
}