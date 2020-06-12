import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";


function App() {
    return (
        <div className="App">
            <WeatherEngine location="10024" /> 
            <WeatherEngine location="97035" /> 
            <WeatherEngine location="32540" /> 
            <WeatherEngine location="33109" /> 
            <WeatherEngine location="30022" /> 
            <WeatherEngine location="94562" />  
       </div>
    );
}

export default App;
