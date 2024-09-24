import PropTypes from "prop-types"
import { useContext } from "react"
import { WeatherContext } from "../contexts/DataContext"
function Card({title}){
    const {data} = useContext(WeatherContext);

    return (
        <div className="card-container">

            <div className="card-title">
                <h2>{title}</h2>
            </div>

        {data? (<div className="card-body">
                {data.main.temp}
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