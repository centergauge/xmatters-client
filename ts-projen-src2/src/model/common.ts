/* 
Error object
Describes an error. For a complete list of error response codes, see HTTP response codes.

 	 
code	integer
The HTTP error code.
reason	string
A description of the error code.
message	string
A description of the specific error that occurred.


{
    "code" : 404,
    "reason" : "Not Found",
    "message" : "Could not find a person with id 0313142d3-4703-a90e-36cc5f5f6209"
}
*/

// ==================================================================================================================================================
Pagination object
Pagination object
EXAMPLE (data truncated)

A page of results. Use the links in the links field to retrieve the rest of the result set. See also Results pagination.

 	 
count	integer
The number of items in this page of results.
data	array [object]
An array of the paginated objects.
links	PaginationLinks object
Links to the current, previous, and next pages of results.
total	integer
The total number of items in the result set.


{
    "count": 100,
    "total": 235,
    "data": 
    [
      {
        "id" : "8f2d98ed-eaa9-4b0b-b366-c1db06b27e1f"
        ...
      }
      ...
    ],
    "links": 
    {
      "self": "/api/xm/1/people?offset=0&limit=100",
      "next": "/api/xm/1/people?offset=100&limit=100"
    }
  }
  

// ==================================================================================================================================================
PaginationLinks object
PaginationLinks object

Provides links to the current, previous, and next pages of a paginated result set. See also Results pagination.

 	 
next	string
A link to the next page of results.
previous	string
A link to the previous page of results.
self	string
A link to this page of results.


{
    "links": 
    {
      "self": "/api/xm/1/people?offset=100&limit=100",
      "previous": "/api/xm/1/people?offset=0&limit=100",
      "next": "/api/xm/1/people?offset=200&limit=100"
    }
  }






// ==================================================================================================================================================

/** 
 * Recipient object
 * See Group object, Device object, Person object, or Dynamic team object.
 * 
 * A recipient is a user, group, device or dynamic team in xMatters that can receive notifications. 
 * The recipient object provides a base for Group object, Device object, Person object, and Dynamic 
 * team object.
 * 
 *  	 
 * id:	string - A unique identifier that represents the recipient.
 * 
 * targetName:	string - The common name of the recipient.
 * 
 * recipientType: string - The type of this object. 
 * Values include:
 *     {“GROUP”, “PERSON”, “DEVICE”, “DYNAMIC_TEAM”}
 * 
 *     externalKey: string - See externalKey.
 * 
 * externallyOwned: Boolean - See externallyOwned.
 * 
 * locked: array [string] - A list of fields that cannot be modified in the xMatters user interface.
 * 
 * status: string - Whether the recipient is active. Inactive recipients do not receive notifications. 
 * Use one of the following values:
 *     {“ACTIVE”, “INACTIVE”}
 * 
 * Note: this field is not included with dynamic teams because they are always active.
 * 
 * links: SelfLink object - A link that can be used to access the object from within the API.
 */








// ==================================================================================================================================================
SelfLink object
SelfLink object

A link that can be used to reference this object in the xMatters API.

 	 
self	string
A link that can be used to access this resource with a GET request.


{
    "self": "/api/xm/1/people/84a6dde7-82ad-4e64-9f4d-3b9001ad60de"
}


// ==================================================================================================================================================
ReferenceById object
ReferenceById object
The identifier of a resource.

 	 
id	string
The identifier of the resource.


{
    "id" : "84a6dde7-82ad-4e64-9f4d-3b9001ad60de"
  }
  


// ==================================================================================================================================================
ReferenceByName object
ReferenceByName object

Identifies a resource by name.

 	 
name	string
The name of the resource.



{
    "name" : "Incident Manager"
  }


// ==================================================================================================================================================
ReferenceByIdAndSelfLink object
ReferenceByIdAndSelfLink object

The identifier of a resource and a SelfLink object that contains a URL to the resource.

 	 
id	string
The identifier of the resource.
links	SelfLink object
A link that can be used to access the resource with this API.


{
    "id":"f0c572a8-45ec-fe23-289c-df749cf19a5e",
    "links":
    {
      "self":"/api/xm/1/sites/f0c572a8-45ec-fe23-289c-df749cf19a5e"
    }
  }





// ==================================================================================================================================================
RecipientPointer object

A reference to a recipient.

 	 
id	string
The unique identifier or target name of the group member.
Examples:
mmcbride
mmcbride|Work Email
Oracle Administrators
438e9245-b32d-445f-916bd3e07932c892
recipientType	string
optional	The type of the group member. Providing this optional field allows xMatters to process your request more efficiently and improves performance. Use one of the following values:
“PERSON”
“GROUP”
“DEVICE”


{
    "id": "438e9245-b32d-445f-916bd3e07932c892",
    "recipientType": "GROUP"
}