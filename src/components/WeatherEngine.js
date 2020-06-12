import React, {useState, useEffect} from "react";
import WeatherCard from './WeatherCard/component';
import useStaleRefresh from "./apiCache/useStaleRefresh";
import apiFetch from "./apiCache/apiFetch";


const  WeatherEngine  = ({ location }) => {

  // init for our state variables
  const [zipCode, setZipCode] = useState(null);
  const [query, setQuery] = useState("");
  var weather = {
    city : null,
    state: null,
    lat: null, // 34.028927, 
    lng: null, // -84.198578, 
    temp: null,
    condition: null,
    error: null,
    errDesc: null,
  };
  const setHeaders = {
    method: 'GET',
    headers: { 
    'x-rapidapi-host': 'dark-sky.p.rapidapi.com',
    'x-rapidapi-key': 'Elec4ZMqvjmshjliDsTiNmglXqeKp1igIGRjsnqL5jKh7szD65' 
    }
  };


    // ******** API CALL **************
    // Get State name, city name, latitude, longitude from ZipCode API
    // Make an asynchronously call but Cache results in 
    // memory to improve performance if same call is made later.
    weather.error =false;
    weather.errDesc='There was an error!';
    let bSkip = (zipCode==null ? true:false);
    //console.log("bSkip="+bSkip);

    const [zipCodes, isZipCodeLoading] = useStaleRefresh(
      apiFetch,
      [`http://api.zippopotam.us/us/${zipCode}`], bSkip, null,
          { data: [] }
       );
    try {
        if (!isZipCodeLoading) {
          if( isEmptyObject(zipCodes) ) { throw new Error("Nothing returned!"); }; 
            weather.state = zipCodes.places[0].state;
            weather.lat = zipCodes.places[0].latitude;
            weather.lng = zipCodes.places[0].longitude;
            weather.city = zipCodes.places[0]["place name"];
        //           console.log("zipCode ="+zipCode+" lat:"+ weather.lat + " lng:"+weather.lng);
          } else bSkip=true;               
    } catch (err) {  weather.error =true; weather.errDesc = err; bSkip=true; console.log("(1):"+err);  };
   

    // ********* API CALL ****************
    // Get weather info about the input City.
    // Make an asynchronously call but Cache results in 
    // memory to improve performance if same call is made later. 

    
      const [weatherDat, isWeatherLoading] = useStaleRefresh(apiFetch,
                    [`https://dark-sky.p.rapidapi.com/${weather.lat},${weather.lng}?lang=en&units=auto`],
                       bSkip,
                        setHeaders,
                          { data: [] });
      try {
      if (!isWeatherLoading && weatherDat !== undefined && !bSkip ) {
        if( weatherDat.toString().startsWith("Err"))  weather.error =true;
            console.log( weatherDat);
            weather.temp = weatherDat.currently.apparentTemperature;
            weather.condition = weatherDat.currently.summary;   
        } 
      } catch (err) { ;  console.log("(2):"+err);  };
 
            
   function isEmptyObject(obj){
        return JSON.stringify(obj) === '{}';
    }

   useEffect(() => {
    setZipCode(location);
    //console.log(location);
  }, [location]); 

   const handleSearch = (e) => {
     e.preventDefault();
     setZipCode(query);
     console.log("setZipCode:"+zipCode);
    };



    const divStyle = {
      color: 'black',
      textAlign: 'center',
      width: '180px'
    };
    return (
      <div> 
         { (!isZipCodeLoading && !isWeatherLoading) && !weather.error ? (
          <div>
            <WeatherCard temp= {weather.temp} condition={weather.condition} city={weather.city} country={weather.state}/>  
            <form>
              <input value={query} onChange={e => setQuery(e.target.value)} style={{ width: '100px' }}  />
              <button onClick={e => handleSearch(e)}>Search</button>
            </form> 
          </div>  
        ) : (isZipCodeLoading || isWeatherLoading) ? ( 
          <div  style={divStyle}>Loading</div>
        ) : ( weather.error ? ( <div style={divStyle}><p>Sorry, I don't have it!</p> 
                                    <button onClick={() => setZipCode(30022)}>Reset</button> </div>  ) : null)
      }
    </div>
    );
  }
export default WeatherEngine;
