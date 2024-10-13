import contentImage from '../assets/meteo_picture.jpeg';
import '../style/content_card.scss';


function Content(){

    return(
        
        <div className='content-card'>
              
            <div className='card-img'>
                <img src={contentImage} alt='content-picture'/>
            </div>
            <div className='content-body'>
              
                    <p className='content-paragraph'>
                    Stay one step ahead of the weather with MeteoApp, 
                    your ultimate weather companion! Whether you're planning a weekend getaway, 
                    heading out for a morning run, or just curious about the day ahead, 
                    MeteoApp provides you with accurate, real-time weather updates and forecasts tailored to your location.
                    </p>
            </div>   
        </div>
    );
}

export default Content;