import sendRequest from './send-request';

const BASE_URL = '/api/activityPlans';

export function getMyplan() {
    return sendRequest(`${BASE_URL}/myplan`);
}

export function addActivityToPlan(activityId) {
    return sendRequest(`${BASE_URL}/myplan/activities/${activityId}`, 'POST');
}

export function markComplete() {
    return sendRequest(`${BASE_URL}/myplan/markComplete`, 'POST');
}