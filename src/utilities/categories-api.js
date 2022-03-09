import sendRequest from './send-request';
const BASE_URL = '/api/categories';


export function makeCategory(categories) {
    return sendRequest(`${BASE_URL}/new`, "POST", categories);
}

export function showCategory(categoriesData) {
    console.log('api happy')
    return sendRequest(BASE_URL);
}