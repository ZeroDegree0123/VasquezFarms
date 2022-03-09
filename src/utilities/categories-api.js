import sendRequest from './send-request';
const BASE_URL = '/api/categories';
export function makeCategory(categories) {
    console.log('api happy')
    return sendRequest(`${BASE_URL}/new`, "POST", categories);
}