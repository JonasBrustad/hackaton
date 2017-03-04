import React, {Component} from "react";
import "../stylesheets/Description.css";

class Description extends Component {
    render() {
        return (
            <div className="Description">
                <table>
                    <tbody>
                    <tr>
                        <td>{this.props.obj.main}</td>
                    </tr>
                    <tr>
                        <td>{this.props.obj.description}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Description;
