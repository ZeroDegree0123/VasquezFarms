import sendRequest from './send-request';
const BASE_URL = '/api/reviews';


export function allReviews(reviews) {
     return sendRequest(BASE_URL);
}

export function makeReview(reviews) {
    console.log('api happy')
    return sendRequest(`${BASE_URL}/new`, 'POST', reviews);
}

export function destroyReview(reviews) {
    return sendRequest(`${BASE_URL}/:id`, 'DELETE', reviews);
}