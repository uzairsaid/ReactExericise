import "../style/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <h3>Meteo App</h3>
          <p>
            Meteo app is web application which help us to know the situation of
            meteo in Burundi, DRC, Tanzania and Rwanda
          </p>
        </div>

        <div className="links">
          <h3>Links</h3>
          <p>Contact us</p>
        </div>

        <div className="social-media">
          <h3>Community</h3>
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
            <i className="fa-brands fa-instagram"></i> Instagram : Meteoapp
          </p>

          <p>
            <i className="fa-brands fa-whatsapp"></i> Whatsapp : +257 61 641 097
          </p>
        </div>
      </div>

      <div className="copy-right">
        <p>meteoapp &copy; 2024</p>
      </div>
    </div>
  );
}

export default Footer;
