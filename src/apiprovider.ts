import { AttachmentsAPI } from "./api/attachments-api";
import { AuditsAPI } from "./api/audits-api";
import { ChangeIntelligenceAPI } from "./api/change-intelligence-api";
import { DevicesAPI } from "./api/devices-api";
import { DynamicTeamsAPI } from "./api/dynamic-teams-api";
import { EventsAPI } from "./api/events-api";
import { ExternalConferenceBridgesAPI } from "./api/external-conference-bridges-api";
import { FormsAPI } from "./api/forms-api";
import { GroupsAPI } from "./api/groups-api";
import { ImportJobsAPI } from "./api/import-jobs-api";
import { IncidentsAPI } from "./api/incidents-api";
import { IntegrationsAPI } from "./api/integrations-api";
import { OnCallAPI } from "./api/on-call-api";
import { PeopleAPI } from "./api/people-api";
import { PlansAPI } from "./api/plans-api";
import { RolesAPI } from "./api/roles-api";
import { ScenariosAPI } from "./api/scenarios-api";
import { ScheduledMessagesAPI } from "./api/scheduled-messages-api";
import { ServicesAPI } from "./api/services-api";
import { SharedLibrariesAPI } from "./api/shared-libraries-api";
import { ShiftsAPI } from "./api/shifts-api";
import { SitesAPI } from "./api/sites-api";
import { SubscriptionFormsAPI } from "./api/subscription-forms-api";
import { TemporaryAbsencesAPI } from "./api/temporary-absences-api";
import { UploadUsersAPI } from "./api/upload-users-api";

/**
 * Centralized API provider - Manages a session given a set of credentials and a client configuration
 */
export class APIProvider {

    constructor() {

    }

    /**
     * Get the attachments API
     * @returns {AttachmentsAPI}
     */
    getAttachmentsAPI(): AttachmentsAPI {
        return new AttachmentsAPI();
    }

    /**
     * Get the audits API
     * @returns {AuditsAPI}
     */
    getAuditsAPI(): AuditsAPI {
        return new AuditsAPI();
    }

    /**
     * Get the change intelligence API
     * @returns {ChangeIntelligenceAPI}
     */
    getChangeIntelligenceAPI(): ChangeIntelligenceAPI {
        return new ChangeIntelligenceAPI();
    }

    /**
     * Get the devices API
     * @returns {DevicesAPI}
     */
    getDevicesAPI(): DevicesAPI {
        return new DevicesAPI();
    }

    /**
     * Get the dynamic teams API
     * @returns {DynamicTeamsAPI}
     */
    getDynamicTeamsAPI(): DynamicTeamsAPI {
        return new DynamicTeamsAPI();
    }

    /**
     * Get the events API
     * @returns {EventsAPI}
     */
    getEventsAPI(): EventsAPI {
        return new EventsAPI();
    }

    /**
     * Get the external conference bridges API
     * @returns {ExternalConferenceBridgesAPI}
     */
    getExternalConferenceBridgesAPI(): ExternalConferenceBridgesAPI {
        return new ExternalConferenceBridgesAPI();
    }

    /**
     * Get the forms API
     * @returns {FormsAPI}
     */
    getFormsAPI(): FormsAPI {
        return new FormsAPI();
    }

    /**
     * Get the groups API
     * @returns {GroupsAPI}
     */
    getGroupsAPI(): GroupsAPI {
        return new GroupsAPI();
    }

    /**
     * Get the import jobs API
     * @returns {ImportJobsAPI}
     */
    getImportJobsAPI(): ImportJobsAPI {
        return new ImportJobsAPI();
    }

    /**
     * Get the incidents API
     * @returns {IncidentsAPI}
     */
    getIncidentsAPI(): IncidentsAPI {
        return new IncidentsAPI();
    }

    /**
     * Get the integrations API
     * @returns {IntegrationsAPI}
     */
    getIntegrationsAPI(): IntegrationsAPI {
        return new IntegrationsAPI();
    }

    /**
     * Get the on-call API
     * @returns {OnCallAPI}
     */
    getOnCallAPI(): OnCallAPI {
        return new OnCallAPI();
    }

    /**
     * Get the people API
     */
    getPeopleAPI(): PeopleAPI {
        return new PeopleAPI();
    }

    /**
     * Get the plans API
     * @returns {PlansAPI}
     */
    getPlansAPI(): PlansAPI {
        return new PlansAPI();
    }

    /**
     * Get the roles API
     * @returns {RolesAPI}
     */
    getRolesAPI(): RolesAPI {
        return new RolesAPI();
    }

    /**
     * Get the scenarios API
     * @returns {ScenariosAPI}
     */
    getScenariosAPI(): ScenariosAPI {
        return new ScenariosAPI();
    }

    /**
     * Get the scheduled messages API
     * @returns {ScheduledMessagesAPI}
     */
    getScheduledMessagesAPI(): ScheduledMessagesAPI {
        return new ScheduledMessagesAPI();
    }

    /**
     * Get the services API
     * @returns {ServicesAPI}
     */
    getServicesAPI(): ServicesAPI {
        return new ServicesAPI();
    }

    /**
     * Get the shared libraries API
     * @returns {SharedLibrariesAPI}
     */
    getSharedLibrariesAPI(): SharedLibrariesAPI {
        return new SharedLibrariesAPI();
    }

    /**
     * Get the shifts API
     * @returns {ShiftsAPI}
     */
    getShiftsAPI(): ShiftsAPI {
        return new ShiftsAPI();
    }

    /**
     * Gets the sites API
     * @returns {SitesAPI}
     */
    getSitesAPI(): SitesAPI {
        return new SitesAPI();
    }

    /**
     * Get the subscription forms API
     * @returns {SubscriptionFormsAPI}
     */
    getSubscriptionFormsAPI(): SubscriptionFormsAPI {
        return new SubscriptionFormsAPI();
    }

    /**
     * Get the temporary absences API
     * @returns {TemporaryAbsencesAPI}
     */
    getTemporaryAbsencesAPI(): TemporaryAbsencesAPI {
        throw new Error("Not implemented");
        return new TemporaryAbsencesAPI();
    } 

    /**
     * Get the upload users API
     * @returns {UploadUsersAPI}
     */
    getUploadUsersAPI(): UploadUsersAPI {
        return new UploadUsersAPI();
    } 
}