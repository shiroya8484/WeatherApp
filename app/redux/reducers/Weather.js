import {
  REQUEST_WEATHER_LIST,
  SUCCESS_WEATHER_LIST,
  FAILURE_WEATHER_LIST
} from '../types';

const initialState = {
  loading: false,
  weatherList: null,
  error: null
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER_LIST:
      return { ...state, loading: true };
    case SUCCESS_WEATHER_LIST:
      return { ...state, weatherList: action.payload, loading: false };
    case FAILURE_WEATHER_LIST:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;

