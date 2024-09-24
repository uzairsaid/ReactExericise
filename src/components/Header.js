import React, { useContext } from "react";
import { useState ,useEffect} from "react";
import { WeatherContext } from "../contexts/DataContext";

function Header(){
    const {setData} = useContext(WeatherContext);
    const text = "Welcome to meteo app";
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const {loading, setLoading} = useContext(WeatherContext);


    const appid = "dde0a4dcefbdab3fac4077a9e9c86a05";

    const handleLatitudeChange = (e)=>{  
        setLatitude(e.target.value)
        
    }

    const handleLongitudeChange = (e)=>{  
        setLongitude(e.target.value)
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);

    }
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}`);
          
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
        }
      };
  
      if (loading) {
        fetchData(); // Call fetchData when loading is true
      }
    }, [loading,setLoading, latitude, longitude, appid, setData]); // Include appid in the dependencies
  
    
    if (error) return <div>Error: {error.message}</div>;


    return (
       <div>
            <h1>{text}</h1>
            
            <form onSubmit={handleSubmit}>
                <input type="text" name="latitude" className="latitude-input" onChange={handleLatitudeChange}/>
                <input type="text" name="longitude" className="longitude-input" onChange={handleLongitudeChange}/>
                <button type="submit">Check meteo </button>

            </form>
            
       </div>
    );
}

export default Header