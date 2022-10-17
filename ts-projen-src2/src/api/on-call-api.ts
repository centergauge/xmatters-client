


// export class OnCallResponse {
//     "onCall": [
//         {
//             "id": string,
//             "name": string,
//             "description": string,
//             "startDate": string,
//             "endDate": string,
//             "schedule": {
//                 "id": string,
//                 "name": string,
//                 "description": string,
//                 "startDate": string,
//                 "endDate": string,
//                 "timeZone": string,
//                 "recurrence": {
//                     "type": string,
//                     "interval": number,
//                     "daysOfWeek": [
//                         string
//                     ],
//                     "daysOfMonth": [
//                         number
//                     ],
//                     "weeksOfMonth": [
//                         number
//                     ],
//                     "monthsOfYear": [
//                         number
//                     ],
//                     "occurrences": number,
//                     "until": string,
//                     "weekStart": string
//                 },
//                 "participants": [
//                     {
//                         "id": string,
//                         "name": string,
//                         "description": string,
//                         "startDate": string,
//                         "endDate": string,
//                         "timeZone": string,
//                         "recurrence": {
//                             "type": string,
//                             "interval": number,
//                             "daysOfWeek": [
//                                 string
//                             ],
//                             "daysOfMonth": [
//                                 number
//                             ],
//                             "weeksOfMonth": [
//                                 number
//                             ],
//                             "monthsOfYear": [
//                                 number
//                             ],
//                             "occurrences": number,
//                             "until": string,
//                             "weekStart": string
//                         },
//                         "participants": [
//                             {
//                                 "id": string,
//                                 "name": string,
//                                 "description": string,
//                                 "startDate": string,
//                                 "endDate": string,
//                                 "timeZone": string,
//                                 "recurrence": {
//                                     "type": string,
//                                     "interval": number,
//                                     "daysOfWeek": [
//                                         string
//                                     ],
//                                     "daysOfMonth": [
//                                         number
//                                     ],
//                                     "weeksOfMonth": [
//                                         number
//                                     ],
//                                     "monthsOfYear": [
//                                         number
//                                     ],
//                                     "occurrences": number,
//                                     "until": string,
//                                     "weekStart": string
//                                 },
//                                 "participants": [
//                                     {
//                                         "id": string,
//                                         "name": string,
//                                         "description": string,
//                                         "startDate": string,
//                                         "endDate": string,
//                                         "timeZone": string,
//                                         "recurrence": {
//                                             "type": string,
//                                             "interval": number,
//                                             "daysOfWeek": [
//                                                 string
//                                             ],


export class OnCallAPI {

    getWhoIsOnCall(): Promise<OnCallResponse> {
        return new Promise<OnCallResponse>((resolve, reject) => {
            const options = {
                hostname: 'api.xmatters.com',
                port: 443,
                path: '/api/xm/1/on-call',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(process.env.XM_USER + ':' + process.env.XM_PASSWORD).toString('base64'),
                    'Content-Type': 'application/json'
                }
            }

            const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)

                res.on('data', d => {
                    process.stdout.write(d)
                    resolve(JSON.parse(d.toString()));
                })
            })

            req.on('error', error => {
                console.error(error)
                reject(error);
            })

            req.end()
        });
    }


    getAllOnCallObjects(): Array<OnCall>
    ]
},
{
    "name": "on-call-summary",
    "subComponents": [
        "get-on-call-summary",
        "on-call-summary-objects"
    ]
}
],
}