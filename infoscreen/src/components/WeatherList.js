import React, {Component} from "react";
import Weather from "./Weather";
import "../stylesheets/WeatherList.css";

class WeatherList extends Component {
    render(){
        var weather = this.props.weather.map(function (object, i) {
            return(
                <Weather obj={object} key={i}/>
            )
        })
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Weather</th>
                        <th>Description</th>
                    </tr>
                    {weather}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WeatherList;
