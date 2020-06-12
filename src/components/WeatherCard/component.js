import React from 'react';
/* 
    npx create-react-app .
    npm i @emotion/styled @emotion/core
    npm install webfontloader --save
    npm i use-position --save

*/

import styled from '@emotion/styled';

import Location from './location';
import Condition from './condition';
import Icon from './icon';

/* load my special fonts from Google fonts */
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Fira Sans|Merriweather', 'sans-serif']
  }
});


const WeatherCard = ({temp, condition, city, country}) => {

    /*let temp = 35;*/
    let highColor =0;
    let lowColor =0;
    let warmTemp = 65; /*  ~65F where temp starts to warm up */
    let bg = null;
    if(temp > warmTemp) {    /* this is for hot weather */
        highColor = (1- (temp-warmTemp) / (130-warmTemp)) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(
            to top, 
            rgb(255,${highColor},0), 
            rgb(255,${lowColor},0) 
            )`;
    } else {
        highColor = (1- (temp+ warmTemp) / 65) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(
            to top, 
            rgb(0,${highColor},255), 
            rgb(0,${lowColor},255) 
            )`;
    }
    const Card = styled.div` 
        margin: 0 auto;
        color: white;
        background: ${bg}; 
        width: 190px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px; 
        /* 
        @import url('https://fonts.googleapis.com/css2?family=Fira+Sans|Merriweather&display=swap');
        */
    `

    return (  
       <Card>
           <Location city={city} country={country} />
           <Icon condition={condition}/>
           <Condition temp={temp} condition={condition} />
       </Card>
    );
}
 
export default WeatherCard;