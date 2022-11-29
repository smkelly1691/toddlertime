import { useRevalidator } from 'react-router-dom';
import sendRequest from './send-request';

const BASE_URL = '/api/activityPlans';

export function getMyplan() {
    return sendRequest(`${BASE_URL}/myplan`);
}