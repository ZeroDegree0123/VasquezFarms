import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getOrders() {
  return sendRequest(`${BASE_URL}/history`)
}

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addSoapToCart(soapId) {
  return sendRequest(`${BASE_URL}/cart/soaps/${soapId}`, 'POST');
}

export function setSoapQtyInCart(soapId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { soapId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}