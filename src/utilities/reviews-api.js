import sendRequest from './send-request';
const BASE_URL = '/api/reviews';


export function makeReview(reviews) {
    return sendRequest(`${BASE_URL}/new`, "POST", reviews);
}

export function allReviews() {
     return sendRequest(BASE_URL);
}
console.log('api happy')

export function destroyReview(reviews) {
    return sendRequest(`${BASE_URL}/:id`, 'DELETE', reviews);
}