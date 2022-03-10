import sendRequest from './send-request';
const BASE_URL = '/api/soaps';


export function makeSoap(soaps) {
    console.log('api happy')
    return sendRequest(`${BASE_URL}/new`, "POST", soaps);
}

// export function showSoap(soapData) {
//     return sendRequest(BASE_URL);
// }