import React, {Component} from "react";
import icon1 from '../icons/01d.png';
import icon2 from '../icons/02d.png';
import icon3 from '../icons/03d.png';
import icon4 from '../icons/04d.png';
import icon9 from '../icons/09d.png';
import icon10 from '../icons/10d.png';
import icon11 from '../icons/11d.png';
import icon13 from '../icons/13d.png';
import icon50 from '../icons/50d.png';

class Icon extends Component {

    icons = {
        '01d':icon1,
        '02d':icon2,
        '03d':icon3,
        '04d':icon4,
        '09d':icon9,
        '10d':icon10,
        '11d':icon11,
        '13d':icon13,
        '50d':icon50,
        '01n':icon1,
        '02n':icon2,
        '03n':icon3,
        '04n':icon4,
        '09n':icon9,
        '10n':icon10,
        '11n':icon11,
        '13n':icon13,
        '50n':icon50,
    };

    getIcon(id){
        if(this.icons.hasOwnProperty(id)){
            console.log(id)
            return this.icons[id];
        }
    }

    render(){

        return(
            <img src={this.getIcon(this.props.icon)} role="presentation"/>
        )
    }
}

export default Icon;