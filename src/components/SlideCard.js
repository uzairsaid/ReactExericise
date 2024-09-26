import {useContext} from 'react';
import { WeatherContext } from '../contexts/DataContext';
import '../style/slide_card.scss';


function SlideCard(){
    const {data} = useContext(WeatherContext);
    const {loading} = useContext(WeatherContext);
    return (
        <div className='card-container'>
            {loading && <div className='loading'></div>}
            {data?
                (<div className='card-body'>
                    <p className='temperature'> <i className="fa-solid fa-temperature-half"></i>{(parseFloat(data.main.temp)-273.15).toFixed(1)}&deg;C </p>
                    <p className='country'><i className="fa-solid fa-flag"></i>{data.sys.country}</p>
                    <p className='town'><i className="fa-solid fa-home"></i>{data.name}</p>
                </div>):
                (<p>Meteo not available</p>)
            }       
        </div>);

}

export default SlideCard;