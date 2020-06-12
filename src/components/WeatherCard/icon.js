import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {
    const Container = styled.img` 
        width: 30%;
    `;

    var icon = "";
    switch (props.condition) {
     case "Clouds":
     case "Mostly Cloudy":
        icon = `./img/Weather Icons/Mostly Cloudy-2x.png`;
        break;
     case "Partly Cloudy":
        icon = `./img/Weather Icons/Party Cloudy-2x.png`;
        break;
     case "Clear":
        icon = `./img/Weather Icons/Mostly Sunny-2x.png`;
        break;
      case "Haze":
        icon = `./img/Weather Icons/Haze-2x.png`;
        break;
      case "Hail":
        icon = `./img/Weather Icons/Hail-2x.png`;
        break;
      case "Fog":
        icon = `./img/Weather Icons/Fog-2x.png`;
        break;
      case "Tornado":
        icon = `./img/Weather Icons/Tornado-2x.png`;
        break;
      case "Dust":
        icon = `./img/Weather Icons/Dust-2x.png`;
        break;
      case "Heavy Rain":
        icon = `./img/Weather Icons/Heavy Rain-2x.png`;
        break;
      case "Drizzle":  
      case "Light Rain":
        icon = `./img/Weather Icons/Drizzle-2x.png`;
        break;
      case "Snow":
        icon = `./img/Weather Icons/Snow-2x.png`;
        break;
      case "Rain":
        icon = `./img/Weather Icons/Rain-2x.png`;
        break;
      case "Breezy":
        icon = `./img/Weather Icons/Breezy-2x.png`;
        break;
      case "Drizzle":
        icon = `./img/Weather Icons/Drizzle-2x.png`;
        break;
      case "Thunderstorm":
        icon = `./img/Weather Icons/Severe Thunderstorm-2x.png`;
        break;
      case "Blizzard":
        icon = `./img/Weather Icons/Blizzard-2x.png`;
        break;
      default:
        icon = `./img/Weather Icons/Fog-2x.png`;
        break;
    }
    return ( <Container
                src={icon}
                alt="Weather Icon">
            </Container> )
}
 
export default Icon;