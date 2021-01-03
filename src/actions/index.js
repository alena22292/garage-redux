// TODO: add and export your own actions
const ROOT_URL = `https://wagon-garage-api.herokuapp.com`;

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETE = 'CAR_DELETE';

export function fetchCars(garage) {
  const promise = fetch(`${ROOT_URL}/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${ROOT_URL}/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const request = fetch(`${ROOT_URL}/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(res => res.json())
    .then(callback);
  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function deleteCar(history, car) {
  fetch(`${ROOT_URL}/cars/${car.id}`, {
    method: 'DELETE'
  }).then(res => res.json())
    .then(() => history.push(""));
  return {
    type: CAR_DELETE,
    payload: car
  };
}
