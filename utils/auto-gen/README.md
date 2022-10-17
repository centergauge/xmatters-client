
// /// Get each model object entry
// document.querySelectorAll('ul.tocify-header').forEach(a => console.log(a.children[0].attributes['data-unique']))


// // Get each sub-component/supporting function of each model object.
// document.querySelectorAll('ul.tocify-header').forEach(a => Array.from(a.children[1].children).forEach(el => console.log(el.attributes['data-unique'])))

// if (s === undefined) {
//   let s = ""; 
// } else {
//   s = "";
// }
// document.querySelectorAll('ul.tocify-header').forEach(a => {
//   s += a.children[0].attributes['data-unique'].value;
//   s += "\n";
//   Array.from(a.children[1].children).forEach(el => {
//       s += "   -- "; 
//       s += el.attributes['data-unique'].value; 
//       s += '\n';
//   })
// });
// console.log(s);

// xmatters-rest-api
//  -- workflows-and-communication-plans
//  -- events-and-alerts
//  -- roles-and-permissions
//  -- versions
//  -- authentication
//  -- base-url
//  -- accessing-data
//  -- http-methods
//  -- identifying-resources
//  -- request-body-format
//  -- character-encoding-in-requests
//  -- response-format
//  -- http-response-codes
//  -- error-responses
//  -- results-pagination
//  -- special-characters-in-responses
//  -- common-query-parameters
//  -- common-fields
//  -- common-objects
// attachments
//  -- upload-an-attachment
//  -- attachments-objects
// audits
//  -- audit-types
//  -- get-event-audit-information
//  -- audit-objects
// change-intelligence
//  -- get-changes
//  -- create-a-change-record
//  -- change-objects
// devices
//  -- get-a-device
//  -- get-devices
//  -- create-a-device
//  -- modify-a-device
//  -- delete-a-device
//  -- device-objects
// device-names
//  -- get-device-names
//  -- create-a-device-name
//  -- modify-a-device-name
//  -- delete-a-device-name
//  -- devicename-objects
// device-types
//  -- get-device-types
//  -- devicetypes-object
// dynamic-teams
//  -- get-dynamic-teams
//  -- get-a-dynamic-team
//  -- get-dynamic-team-members
//  -- create-a-dynamic-team
//  -- update-a-dynamic-team
//  -- delete-a-dynamic-team
//  -- dynamic-team-object
// events
//  -- get-events
//  -- get-an-event
//  -- get-event-annotations
//  -- get-an-event-annotation
//  -- get-an-event-attachment
//  -- get-user-delivery-data
//  -- trigger-an-event
//  -- add-a-comment-to-an-event
//  -- change-the-status-of-an-event
//  -- event-objects
// event-suppressions
//  -- get-suppressed-events
//  -- event-suppression-objects
// external-conference-bridges
//  -- get-conference-bridges
//  -- get-a-conference-bridge
//  -- create-an-external-conference-bridge
//  -- modify-a-conference-bridge
//  -- delete-a-conference-bridge
//  -- conference-bridge-objects
// forms
//  -- get-forms
//  -- get-forms-in-a-plan
//  -- get-a-form-in-a-plan
//  -- get-form-response-options
//  -- get-form-sections
//  -- create-a-plan-form
//  -- create-form-message-templates
//  -- create-form-response-options
//  -- modify-a-plan-form
//  -- modify-a-form-message-template
//  -- modify-a-form-response-option
//  -- form-objects
// groups
//  -- get-a-group
//  -- get-groups
//  -- create-a-group
//  -- modify-a-group
//  -- delete-a-group
//  -- get-a-group-39-s-supervisors
//  -- get-group-license-quotas
//  -- group-objects
// group-roster
//  -- get-the-group-roster
//  -- add-a-member-to-the-group-roster
//  -- remove-a-member-from-the-group-roster
// import-jobs
//  -- get-import-jobs
//  -- get-an-import-job
//  -- get-import-job-messages
//  -- import-job-objects
// incidents
//  -- get-incidents
//  -- get-an-incident
//  -- trigger-an-incident
//  -- create-an-incident
//  -- modify-an-incident
//  -- add-a-timeline-note
//  -- incidents-objects
// integrations
//  -- get-an-integration
//  -- get-integrations
//  -- get-integration-logs
//  -- create-an-integration
//  -- modify-an-integration
//  -- delete-an-integration
//  -- integration-objects
// oauth
//  -- obtain-an-access-token-and-refresh-token
//  -- authorize-a-request
//  -- refresh-an-access-token
//  -- oauth-objects
// on-call
//  -- get-who-is-on-call
//  -- on-call-objects
// on-call-summary
//  -- get-on-call-summary
//  -- on-call-summary-objects
// people
//  -- get-a-person-by-id
//  -- get-a-person-by-query
//  -- get-people
//  -- create-a-person
//  -- modify-a-person
//  -- delete-a-person
//  -- get-a-person-39-s-devices
//  -- get-a-person-39-s-groups
//  -- get-a-person-39-s-supervisors
//  -- get-user-license-quotas
//  -- person-objects
// plans
//  -- get-communication-plans
//  -- get-a-communication-plan
//  -- create-a-communication-plan
//  -- modify-communication-plan
//  -- delete-a-plan
//  -- communication-plan-objects
// plan-constants
//  -- get-plan-constants
//  -- create-a-plan-constant
//  -- modify-a-plan-constant
//  -- delete-a-plan-constant
//  -- plan-constant-objects
// plan-endpoints
//  -- get-plan-endpoints
//  -- create-plan-endpoint
//  -- modify-a-plan-endpoint
//  -- delete-a-plan-endpoint
//  -- plan-endpoint-objects
// plan-properties
//  -- get-plan-properties
//  -- create-plan-properties
//  -- modify-plan-properties
//  -- plan-property-objects
// roles
//  -- get-roles
//  -- role-objects
// scenarios
//  -- get-scenarios
//  -- get-a-scenario
//  -- get-scenarios-in-a-form
//  -- get-a-scenario-attachment
//  -- create-a-scenario
//  -- modify-a-scenario
//  -- upload-attachment-to-a-scenario
//  -- scenario-objects
// scheduled-messages
//  -- get-scheduled-messages
//  -- get-a-scheduled-message
//  -- get-a-scheduled-message-attachment
//  -- create-a-scheduled-message
//  -- modify-a-scheduled-message
//  -- delete-a-scheduled-message
//  -- scheduled-message-objects
// service-dependencies
//  -- get-service-dependencies
//  -- create-a-service-dependency
//  -- modify-a-service-dependency
//  -- delete-a-service-dependency
//  -- service-dependencies-objects
// services
//  -- get-services
//  -- get-a-service
//  -- create-a-service
//  -- modify-a-service
//  -- delete-a-service
//  -- services-objects
// shared-libraries
//  -- get-shared-libraries
//  -- get-a-shared-library
//  -- create-a-shared-library
//  -- modify-a-shared-library
//  -- delete-a-shared-library
//  -- shared-library-objects
// shifts
//  -- get-a-shift
//  -- get-shifts-in-a-group
//  -- get-members-in-a-shift
//  -- create-a-shift
//  -- add-a-member-to-a-shift
//  -- delete-a-shift
//  -- shift-objects
// sites
//  -- get-a-site
//  -- get-sites
//  -- create-a-site
//  -- modify-a-site
//  -- delete-a-site
//  -- site-objects
// subscription-forms
//  -- get-a-subscription-form
//  -- get-subscription-forms
//  -- get-subscription-forms-in-a-plan
//  -- create-a-subscription-form
//  -- modify-a-subscription-form
//  -- subscription-form-objects
// subscriptions
//  -- get-subscriptions
//  -- get-a-subscription
//  -- get-subscribers
//  -- create-a-subscription
//  -- modify-a-subscription
//  -- delete-a-subscription
//  -- unsubscribe-a-user
//  -- subscription-objects
// temporary-absences
//  -- get-temporary-absences
//  -- create-a-temporary-absence
//  -- delete-a-temporary-absence
//  -- temporary-absence-objects
// upload-users
//  -- upload-a-user-upload-file
//  -- upload-an-epic-zipsync-file


import axios from 'axios';

function fetchPage(url: string): Promise<string | undefined> {
  const HTMLData = axios
    .get(url)
    .then(res => res.data)
    .catch((error: AxiosError) => {
      console.error(`There was an error with ${error.config.url}.`);
      console.error(error.toJSON());
    });

  return HTMLData;
}


let xmattersApiUrl = "https://help.xmatters.com/xmapi/index.html";
