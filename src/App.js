import './App.css';
import React from'react';
import Meteo from './components/Meteo'
import Ville from './components/Ville'
import'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const Api_Key = "d3f6aac75e30840a28b779820d6e428a";


class App extends React.Component {
  constructor() {
    super();
    this.state={
      ville: undefined,
      pays: undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };
    this.weatherIcon = {
      Eclair: "wi-thunderstorm",
      Brume: "wi-sleet",
      Pluie: "wi-storm-showers",
      Neige: "wi-snow",
      Atmosphere: "wi-fog",
      Soleil: "wi-day-sunny",
      Nuageux: "wi-day-fog"
    };
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Eclair });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Brume });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Pluie });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Neige });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Soleil });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Nuageux });
        break;
      default:
        this.setState({ icon: icons.Nuageux });
    }
  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getVille = async e => {
    e.preventDefault();

    const pays = e.target.elements.pays.value;
    const ville = e.target.elements.ville.value;
  


 if (pays && ville) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${ville},${pays}&appid=${Api_Key}`
      );

      const reponse = await api_call.json();

      this.setState({
        ville: `${reponse.name}, ${reponse.sys.pays}`,
        pays: reponse.sys.pays,
        main: reponse.weather[0].main,
        celsius: this.calCelsius(reponse.main.temp),
        temp_max: this.calCelsius(reponse.main.temp_max),
        temp_min: this.calCelsius(reponse.main.temp_min),
        description: reponse.weather[0].description,
        error: false
      });


      this.get_WeatherIcon(this.weatherIcon, reponse.weather[0].id);

      console.log(reponse);
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Meteo loadweather={this.getVille} error={this.state.error} />
    
        <Ville
          villename={this.state.ville}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;