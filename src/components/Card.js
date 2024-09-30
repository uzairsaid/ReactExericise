import PropTypes from "prop-types";
import { useContext } from "react";
import { WeatherContext } from "../contexts/DataContext";
import '../style/weather_card.scss';
function Card({title}){
    const {data} = useContext(WeatherContext);
    const {loading} = useContext(WeatherContext);

    // if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="card-container">

            <div className="card-title">
                <h2>{title}</h2>
            </div>
        {loading && <div className="loading"></div>}
        {data?
                (<div className="card-body">
                
    
                <p><i className="fa-solid fa-cloud"></i>Weather : {data.weather[0].main}{data.weather[0].main ==="Rain"?(<i className="fa-solid fa-cloud-rain"></i>):data.weather[0].main ==="Clouds"?(<i className="fa-solid fa-cloud"></i>):(<i className="fa-solid fa-sun"></i>)}</p>
                <p><i className="fa-solid fa-cloud"></i>Weather Description: {data.weather[0].description}</p>
                <p><i className="fa-solid fa-wind"></i>Wind Speed: {data.wind.speed}</p>
                <p> <i className="fa-solid fa-temperature-half"></i>Temperature: {(parseFloat(data.main.temp)-273.15).toFixed(1)}&deg;C </p>
                <p> <i className="fa-solid fa-temperature-low"></i> Minimum temperature: {(parseFloat(data.main.temp_min)-273.15).toFixed(1)}&deg;C </p>
                <p> <i className="fa-solid fa-temperature-high"></i> Maximum temperature: {(parseFloat(data.main.temp_max)-273.15).toFixed(1)}&deg;C </p>
                <p><i className="fa-solid fa-snowflake"></i> Humidity: {data.main.humidity} %</p>
                <p><i className="fa-solid fa-star"></i> Atmopheric pressure: {data.main.pressure} hPa</p>
                <p><i className="fa-solid fa-water"></i> Sea Level pressure: {data.main.sea_level} hPa</p>
                <p><i className="fa-solid fa-globe"> </i> Ground Level pressure: {data.main.grnd_level} hPa</p>

            </div>)
            : 
            (<p>Meteo not available</p>)}
        </div>
    )

}
Card.propTypes = {
    title: PropTypes.string,
}

export default Card