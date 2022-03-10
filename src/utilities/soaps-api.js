import sendRequest from './send-request';
const BASE_URL = '/api/soaps';


export function makeSoap(soaps) {
    return sendRequest(`${BASE_URL}/new`, "POST", soaps);
}

export function showSoap() {
    console.log('api happy')
    return sendRequest(BASE_URL);
}