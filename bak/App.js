import React from "react";
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App (props) {


        let state = {
              location: {
                  city: null,
                  state: null,
                  zipCode: 30022,
                  lat: 34.028927,
                  long: -84.198578
              },
              temp: 0,
              condition: "NOLO",
              currentWeather: null,
              currentIcon: null,
              dailySummary: null
          } 

          const setHeaders = {
            method: 'GET',
            headers: { 
              'x-rapidapi-host': 'dark-sky.p.rapidapi.com',
              'x-rapidapi-key': 'Elec4ZMqvjmshjliDsTiNmglXqeKp1igIGRjsnqL5jKh7szD65' 
             }
           };

           const data = async () => {
             await fetch(`https://dark-sky.p.rapidapi.com/${state.location.lat},${state.location.long}?lang=en&units=auto`,
                          setHeaders )
                .then(async response => {
                  const dat = await response.json();
      
                  // check for error response
                  if (!response.ok) {
                      // get error message from body or default to response status
                      const error = (dat && dat.message) || response.status;
                      return Promise.reject(error);
                  }
            //     console.log( dat );
            //     console.log (dat.minutely.icon);
                 
                 return dat;
              })
              .catch(error => {
                  this.setState({ errorMessage: error });
                  console.error('There was an error!', error);
              });

            /* this.setState({ data: json });  */

          }
          // Once the data arrives asynchronously, then display it in console
          data().then(res => console.log(res));       



/*       const data = async () => {
        const darkSkyApi = 'Elec4ZMqvjmshjliDsTiNmglXqeKp1igIGRjsnqL5jKh7szD65';     
        const res = await fetch(
          "https://api.darksky.net/forecast/${darkSkyApi}/${this.state.location.lat},${this.state.location.long}"
        )
 *//*         .then((res) => {
          let presentState = {...this.state};
          presentState.temp = res.data.currently.apparentTemperature;
          presentState.currentWeather = res.data.currently.summary;
          presentState.currentIcon = res.data.currently.icon;
          presentState.dailySummary = res.data.daily.summary;
          this.setState({
              ...presentState
          })
        } 

      }; */

    return (
      <div className="App">
        <WeatherCard temp={-20} condition={state.condition} city="Alpharetta" country="USA"/>
        <WeatherCard temp={20} condition="Thunderstorm" city="Alpharetta" country="USA" />
        <WeatherCard temp={35} condition="Clouds" city="Alpharetta" country="USA" />
      </div>
    );
  }


export default App;
