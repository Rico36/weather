import React from 'react';
import styled from '@emotion/styled';

const Condition = ({temp, condition}) => {
    const Container = styled.div` 
        text-align: center;
    `
    const Temp = styled.h2` 
        font-family: 'Merriweather', sans-serif;
        font-size: 1.6rem;
        font-weight: 200;
    `   
    const State = styled.h3` 
        font-family: 'Merriweather', sans-serif; 
        font-size: 1.1rem;
    `

    return (
        <Container>
            <Temp>{temp}&deg;F</Temp>
            <State>{condition}</State>
        </Container>    
      );
  }
 
export default Condition;