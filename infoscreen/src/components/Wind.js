import React, { Component } from 'react';

class Wind extends Component {
    render(){
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Windspeed</th>
                    </tr>
                    <tr>
                        <td>{this.props.wind.speed}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Wind;