import '../style/footer.scss';


function Footer(){

    return (
        <div className="footer">
            <div className="footer-content"> 
                <div className="footer-description">
                    <p>
                        <span className='app-name'>Meteo App</span> <br/>
                        Meteo app is web application which help us to know the situation of meteo
                        in Burundi, DRC,Kenya, Ouganda, Tanzania, Somalia and Rwanda 
                    </p>

                </div>

                <div className="links">
                    <p>
                        Contact us
                    </p>

                </div>

                <div className="social-media">
                    <p>
                        <i className="fa-solid fa-envelope"></i> E-mail : meteapp@gmail.com
                    </p>
                    <p>
                        <i className="fa-brands fa-x"></i> X : meteoapp
                    </p>

                    <p>
                        <i className="fa-brands fa-facebook"></i> Facebook : meteo app
                    </p>

                    <p>
                        <i className="fa-brands fa-instagram"></i>  Instagram : Meteoapp
                    </p>

                    <p>
                        <i className="fa-brands fa-whatsapp"></i> Whatsapp : +257 62883939
                    </p>

                </div>
            </div>

            <div className="copy-right">
                        <p>
                             meteoapp &copy; 2024
                        </p>
                        
            </div>

        </div>
        
    );
}

export default Footer;