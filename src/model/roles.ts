

/**
 * Role Object
 * Describes a role in xMatters.
 * 
 *  	 
 * id: string - The unique identifier of the role.
 * 
 * name: string - The name of the role.
 * 
 * description: string - A description of the functions the role can perform.
 *
 * 
 * Example:
 * This example shows a single role object.
 * {
 *   "id":"9407eb2e-8eb2-43d9-88a8-875237af941d",
 *   "name":"Incident Manager",
 *   "description": "Adds the ability to access major incident workflows and associated events."
 * }
 */
export class Role {
    id: string;
    name: string;
    description: string;

    constructor(id: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}