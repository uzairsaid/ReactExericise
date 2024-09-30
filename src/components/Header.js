import React, { useContext } from "react";
import { useState ,useEffect} from "react";
import { WeatherContext } from "../contexts/DataContext";
import '../style/header.scss';

function Header(){
    const {setData} = useContext(WeatherContext);
    const text = "Meteo app";
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const {setLoading} = useContext(WeatherContext);
    const [status, setStatus] = useState('empty');
    const [isOnline, setisOnline] = useState(navigator.onLine);
    const [error, setError] = useState(null);
    const appid = "dde0a4dcefbdab3fac4077a9e9c86a05";

    const handleLatitudeChange = (e)=>{  
        setLatitude(e.target.value);
        setStatus('ok');
        
    }

    const handleLongitudeChange = (e)=>{  
        setLongitude(e.target.value);
        setStatus('ok');
        
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
        fetchData(); // Call fetchData when loading is true
        

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
                    <input type="text" name="latitude" className="latitude-input" disabled={status==='submitting'} onChange={handleLatitudeChange}/>
                    <label>Longitude</label>
                    <input type="text" name="longitude" className="longitude-input" disabled={status==='submitting'} onChange={handleLongitudeChange}/>
                    <button type="submit" className="validation-btn" disabled={status==='submitting' || status==='empty'}>Check meteo </button>
                </form>
            </div>   
       </div>
    );
}

export default Header