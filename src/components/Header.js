import React, { useContext } from "react";
import { useState ,useEffect} from "react";
import { WeatherContext } from "../contexts/DataContext";
import '../style/header.scss';

function Header(){
    const {setData} = useContext(WeatherContext);
    const text = "Meteo app";
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const {setLoading} = useContext(WeatherContext);
    const [status, setStatus] = useState('empty');
    const [isOnline, setisOnline] = useState(navigator.onLine);
    const [error, setError] = useState(null);
    const appid = "dde0a4dcefbdab3fac4077a9e9c86a05";

    const [formErrors, setFormErrors] = useState({});

   
    const handleLatitudeChange = (e)=>{
      const newLatitude = e.target.value;   
      setLatitude(newLatitude);
      console.log(` latitude is ${newLatitude}`);
      if(!newLatitude.trim()){
        setStatus('empty');
        setFormErrors({latitude:"Latitude is required"});
      }
      else if (!parseFloat(newLatitude)){
        setFormErrors({latitude:"Latitude must be an float"});
      }
      else {
        setStatus("ok");
      }
       
  }

  const handleLongitudeChange = (e)=>{  
    let newLongitude = e.target.value; 
    setLongitude(newLongitude);
    if(!newLongitude.trim()){
      setFormErrors({longitude:"Longitude is required"});
    }
    else if (!parseFloat(newLongitude)){
      setFormErrors({longitude:"Longitude must be an float"});
    }
    else {
      setFormErrors({longitude: ''});
      setStatus("ok");
    }
     
}
    

    async function fetchData(){
      try {
          console.log("data fecthing.....");
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}`);
          console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (err) {
        setError(err);

      } finally {
        setLoading(false); 
        setStatus('empty');
      }
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setStatus('submitting');
        setLoading(true);
        fetchData();
        
    }
    
    useEffect(()=>{
      function handleOnline(){
        setisOnline(true);
      }
  
      function  handleOffline(){
        setisOnline(false);
      } 

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return ()=>{
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      
      }
    },[]);
    
    if (error) return <div>Error: {error.message}</div>;
    
    return (
       <div className="header">
            <div className="header-title">
                <h1>{text} <i className="fa-solid fa-cloud-sun-rain"></i> </h1>
                <p>{isOnline?"Online":"Offline"}</p>
            </div>
            
            <div className="header-form">
                <form onSubmit={handleSubmit}>
                   
                    <label>Latitude</label>
                    <input type="text" name="latitude" className="latitude-input" disabled={status==='submitting'} onChange={handleLatitudeChange} on/>
                    {formErrors&&<p style={{color:'red'}} >{formErrors.latitude}</p>}
                    <label>Longitude</label>
                    <input type="text" name="longitude" className="longitude-input" disabled={status==='submitting'} onChange={handleLongitudeChange}/>
                    {formErrors&&<p style={{color:'red'}}>{formErrors.longitude}</p>}
                    <button type="submit" className="validation-btn" disabled={status==='submitting' || status==='empty'}>Check meteo </button>
                </form>
            </div>   
       </div>
    );
}

export default Header