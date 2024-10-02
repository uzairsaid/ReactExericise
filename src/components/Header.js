import React, { useContext } from "react";
import { useState ,useEffect} from "react";
import { WeatherContext } from "../contexts/DataContext";
import '../style/header.scss';


const countriesLocalisation = [
    {
      name: "Burundi",
      latitude: "-3.3731",
      longitude: "29.9189"
    },
    {
      name: "Rwanda",
      latitude: "-1.9403",
      longitude: "29.8739"
    },
    {
      name: "DRC",
      latitude: "-4.0383",
      longitude: "21.7587"
    },
    {
      name: "Kenya",
      latitude: "-1.2864",
      longitude: "36.8172"
    },
    {
      name: "Ouganda",
      latitude: "1.3733",
      longitude: "32.2903"
    },
    {
      name: "Tanzania",
      latitude: "-6.3660",
      longitude: "34.8888"
    },

    {
      name: "Somalia",
      latitude: "5.1521",
      longitude: "46.1996"
    }
];
  



function Header(){
    const {setData} = useContext(WeatherContext);
    const text = "Meteo app";
    const [selectedValue, setSelectedValue] = useState('');
    const {setLoading} = useContext(WeatherContext);
    const [status, setStatus] = useState('empty');
    const [isOnline, setisOnline] = useState(navigator.onLine);
    const [error, setError] = useState(null);
    const appid = "dde0a4dcefbdab3fac4077a9e9c86a05";

 
    const handleSelectedValueChange = (e)=>{
      setSelectedValue(e.target.value);
      setStatus('ok');
    }

    function getSelectedValueData(selectedValue){
      const countryData = countriesLocalisation.find((obj)=>obj.name.toLowerCase()===selectedValue);
      return countryData;
    }

    async function fetchData(){
      const countryData = getSelectedValueData(selectedValue);
      try {
          console.log("data fecthing.....");
          setLoading(true);
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countryData.latitude}&lon=${countryData.longitude}&appid=${appid}`);
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
            
            <div className="header-search">
                    <select onChange={handleSelectedValueChange} className="country-select">
                          <option value=""></option>
                          <option value="burundi">Burundi</option>
                          <option value="rwanda">Rwanda</option>
                          <option value="tanzania">Tanzania</option>
                          <option value="drc">DRC</option>
                          <option value="ouganda">Ouganda</option>
                          <option value="kenya">Kenya</option>
                          <option value="somalia">Somalia</option>
                    </select>
                    <button type="button" className="validation-btn" disabled={status==='empty'} onClick={fetchData}>Check meteo </button>
            </div>   
       </div>
    );
}

export default Header