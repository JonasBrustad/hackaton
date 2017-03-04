import React, {Component} from "react";
import axios from "axios";
import WeatherList from "../components/WeatherList";
import Temperature from "../components/Temperature";
import Wind from "../components/Wind";
import Icon from "../components/Icon";
import Header from "../components/Header";
import Button from "../components/Button";
import "../stylesheets/App.css";

class App extends Component {

    city = 1;

    constructor(props){
        super(props);
        this.state = {
            weather:[],
            main:{},
            wind:{},
            icon:''
        };
    }

    update(){
        if(this.city === 1){
            this.city = 2;
            this.fetchWeatherData(5128581)
        } else {
            this.city = 1;
            this.fetchWeatherData(6453366)
        }
    }

    updateCity(city){
        switch (city){
            case 'New York':
                this.fetchWeatherData(5128581)
                break;
            case 'Oslo':
                this.fetchWeatherData(6453366)
                break;
        }
    }

    fetchWeatherData(id){
        var self = this;
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=' + id + '&APPID=&units=metric')
            .then(function(response){
                self.setState({
                    weather: response.data.weather,
                    main: response.data.main,
                    wind: response.data.wind,
                    name: response.data.name,
                    icon: response.data.weather[0].icon
                })
            });
    }

    componentDidMount(){
        //6453366
        //5128581
        this.fetchWeatherData(6453366);
    }

    render() {
        return (
            <div className="App">
                <Header city={this.state.name}/>
                <Icon icon={this.state.icon}/>
                <WeatherList weather={this.state.weather} />
                <Temperature main={this.state.main}/>
                <Wind wind={this.state.wind}/>
                <Button onClick={this.update.bind(this)} text={this.city === 1 ? 'New York' : 'Oslo'}/>
            </div>
        );
    }
}

export default App;
