import React, { Component } from 'react';
import "../stylesheets/Temperature.css";

class Temperature extends Component {
    render(){
        return(
          <div>
            <table>
                <tbody>
                <tr>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                    <th>Temp-min</th>
                    <th>Temp-max</th>
                </tr>
                <tr>
                    <td>{this.props.main.temp}</td>
                    <td>{this.props.main.pressure}</td>
                    <td>{this.props.main.humidity}</td>
                    <td>{this.props.main.temp_min}</td>
                    <td>{this.props.main.temp_max}</td>
                </tr>
                </tbody>
            </table>
          </div>
        );
    }
}

export default Temperature;