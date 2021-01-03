import { FETCH_CARS, FETCH_CAR, CAR_DELETE } from '../actions';

const carsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case CAR_DELETE:
      return state.filter(car => car !== action.payload);
    default:
      return state;
  }
};

export default carsReducer;
