import { SelfLink } from "./common";

/** 
 * Attachments Object
 * Describes a file uploaded to xMatters for use as an attachment.
 *  
 * name: string - The unique user-provided name for the attached file.
 * path: string - The temporary storage location of the file in xMatters. Files are held at this location until they are used with a form, event, or scenario.
 * size: integer - The size of the attachment in bytes.
 * 
 * 
 * Example:
 * {
 *     "name": "Company_Logo",
 *     "path": "attachments/18a2e807-6466-471e-a378-4c6e5bb5bccb/Company_Logo.png",
 *     "size": 12635,
 *     "links": {
 *         "self": "api/xm/1/attachments/18a2e807-6466-471e-a378-4c6e5bb5bccb/Company_Logo.png"
 *     }
 * }
 */
export class Attachment {
    name: string;
    path: string;
    size: number;
    links: SelfLink;

    constructor(name: string, path: string, size: number, links: SelfLink) {
        this.name = name;
        this.path = path;
        this.size = size;
        this.links = links;
    }
}

/** 
 * Attachments Reference Object
 * Describes a file in xMatters that has been used as an attachment to an event or scenario.
 *  	 
 * path: string - The location of the file in xMatters, based on the event or scenario the file 
 * is attached to
 * 
 * 
 * Example: 
 * {
 *     "path": "events/a6c6e823-6466-471e-a378-4c6e5ae4f1a2/Company_Logo.png",
 * }
 */
export class AttachmentReference {
    path: string;

    constructor(path: string) {
        this.path = path;
    }
}