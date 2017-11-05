import { combineReducers } from 'redux';
import WeatherReducer from './reduxer_weather';

const rootReducer = combineReducers({
  weather:WeatherReducer
});

export default rootReducer;
