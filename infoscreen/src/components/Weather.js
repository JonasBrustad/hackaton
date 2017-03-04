import React, {Component} from "react";

class Weather extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.obj.main}</td>
                <td>{this.props.obj.description}</td>
            </tr>

        )
    }
}

export default Weather;
