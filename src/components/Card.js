import PropTypes from "prop-types"
import { useContext } from "react"
import { WeatherContext } from "../contexts/DataContext"
function Card({title}){
    const {data} = useContext(WeatherContext);
    const {loading} = useContext(WeatherContext);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="card-container">

            <div className="card-title">
                <h2>{title}</h2>
            </div>

        {data?
                (<div className="card-body">
                
                <p>Country : {data.sys.country}</p>
                <p>Name : {data.name}</p>
                <p>Weather : {data.weather[0].main}</p>
                <p>Weather Description: {data.weather[0].description}</p>
                <p>Wind Speed: {data.wind.speed}</p>
                <p>Temperature: {data.main.temp}K </p>
                <p>Minimum temperature: {data.main.temp_min}K </p>
                <p>Maximum temperature: {data.main.temp_max}K </p>
                <p>Humidity: {data.main.humidity} %</p>
                <p>Atmopheric pressure: {data.main.pressure} hPa</p>
                <p>Sea Level pressure: {data.main.sea_level} hPa</p>
                <p>Ground Level pressure: {data.main.grnd_level} hPa</p>

            </div>)
            : 
            (<p>Meteo not available</p>)}
        </div>
    )

}
Card.propTypes = {
    title: PropTypes.string,
    // content : PropTypes.object.isRequired
}

export default Card