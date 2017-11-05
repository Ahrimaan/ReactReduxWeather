import axios from 'axios';

const API_KEY = 'INSERT KEY HERE !';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    let url = `${ROUTE_URL}&q=${city},de`;
    let request = axios.get(url);

    console.log('Request:', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}