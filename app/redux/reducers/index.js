// Copyright (c) 2020-2021 by Brijesh Shiroya, All rights reserved
import { combineReducers } from 'redux';
import weatherReducer from './Weather';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
