import {
  REQUEST_WEATHER_LIST,
  SUCCESS_WEATHER_LIST,
  FAILURE_WEATHER_LIST
} from '../types';
import { weatherList } from '../../services/Api';

export const getWeatherList = (locationInfo) => (dispatch) => {
  dispatch({ type: REQUEST_WEATHER_LIST });
  try {
    weatherList(locationInfo).then(response => {
      if (response?.status === 200) {
        dispatch({ type: SUCCESS_WEATHER_LIST, payload: response?.data?.list });
      } else {
        dispatch({ type: FAILURE_WEATHER_LIST, payload: response?.error });
      }
    })
  } catch (error) {
    dispatch({ type: FAILURE_WEATHER_LIST, payload: error });
  }
};