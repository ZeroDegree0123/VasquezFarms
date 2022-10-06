import sendRequest from './send-request';
const BASE_URL = '/api/soaps';


export function makeSoap(soaps) {
    return sendRequest(`${BASE_URL}/new`, "POST", soaps);
}

export function allSoaps() {
    return sendRequest(BASE_URL);
}

export function showSoap(soapId) {
    return sendRequest(`${BASE_URL}/${soapId}`)
} 
