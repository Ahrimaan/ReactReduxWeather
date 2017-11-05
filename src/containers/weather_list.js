import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(data => data.main.temp - 273);
        const humidity = cityData.list.map(data => data.main.humidity);
        const pressure = cityData.list.map(data => data.main.pressure);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /> </td>
                <td><Chart color="red" data={temps} unit="C" /></td>
                <td><Chart color="green" data={pressure} unit="hPa" /></td>
                <td><Chart color="black" data={humidity} unit="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidty (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);