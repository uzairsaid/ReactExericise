import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { WeatherContext } from "../contexts/DataContext";
import "../style/header.scss";

const countriesLocalisation = [
  {
    name: "Burundi",

    provinces: [
      {
        provinceName: "Mairie",
        latitude: -3.4614,
        longitude: 29.3088,
      },
      {
        provinceName: "Bujumbura Rural",
        latitude: -3.3828,
        longitude: 29.3599,
      },
      {
        provinceName: "Gitega",
        latitude: "-3.3731",
        longitude: "29.9189",
      },
      {
        provinceName: "Ngozi",
        latitude: -2.92,
        longitude: 29.891,
      },
      {
        provinceName: "Kayanza",
        latitude: -2.9767,
        longitude: 29.608,
      },
      {
        provinceName: "Muramvya",
        latitude: -3.38,
        longitude: 29.5262,
      },
      {
        provinceName: "Makamba",
        latitude: -4.1652,
        longitude: 29.9796,
      },
      {
        provinceName: "Bururi",
        latitude: -3.8356,
        longitude: 29.6852,
      },
      {
        provinceName: "Cankuzo",
        latitude: -3.7346,
        longitude: 30.2384,
      },
      {
        provinceName: "Karusi",
        latitude: -3.5221,
        longitude: 29.7901,
      },
      {
        provinceName: "Ruyigi",
        latitude: -3.561,
        longitude: 30.3905,
      },
      {
        provinceName: "Mwaro",
        latitude: -3.5639,
        longitude: 29.7208,
      },
      {
        provinceName: "Cibitoke",
        latitude: -3.418,
        longitude: 29.0448,
      },
      {
        provinceName: "Bubanza",
        latitude: -3.38,
        longitude: 29.5262,
      },
      {
        provinceName: "Rutana",
        latitude: -3.7346,
        longitude: 30.2384,
      },
      {
        provinceName: "Muyinga",
        latitude: -2.8584,
        longitude: 30.4554,
      },
    ],
  },
  {
    name: "Rwanda",
    latitude: "-1.9403",
    longitude: "29.8739",
  },
  {
    name: "DRC",
    latitude: "-4.0383",
    longitude: "21.7587",
  },
  {
    name: "Kenya",
    latitude: "-1.2864",
    longitude: "36.8172",
  },
  {
    name: "Ouganda",
    latitude: "1.3733",
    longitude: "32.2903",
  },
  {
    name: "Tanzania",
    latitude: "-6.3660",
    longitude: "34.8888",
  },

  {
    name: "Somalia",
    latitude: "5.1521",
    longitude: "46.1996",
  },
];

function Header() {
  const { setData } = useContext(WeatherContext);
  const text = "Meteo app";
  const { setLoading } = useContext(WeatherContext);
  const [status, setStatus] = useState("empty");
  const [isOnline, setisOnline] = useState(navigator.onLine);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const appid = "dde0a4dcefbdab3fac4077a9e9c86a05";
  const [isSubmenuOPen, setIsSubmenuOPen] = useState(false);
  const [country, setCountry] = useState("");

  function getCountryData(country) {
    const countryData = countriesLocalisation.find(
      (obj) => obj.name.toLowerCase() === country
    );
    return countryData;
  }

  // on country click
  const handleMenuClick = (e) => {
    const selectedCountry = e.target.name;
    setCountry(selectedCountry);
    setIsSubmenuOPen(true);
  };
  const handleSubMenuClick = (e) => {
    const selectedProvince = e.target.name;
    const countryData = countriesLocalisation.find(
      (obj) => obj.name === country
    );
    const provData = countryData.provinces.find(
      (obj) => obj.provinceName === selectedProvince
    );
    console.log(selectedProvince);

    const fetchData = async () => {
      try {
        console.log("data fecthing.....");
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${provData.latitude}&lon=${provData.longitude}&appid=${appid}`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setStatus("empty");
      }
    };

    fetchData();
  };

  useEffect(() => {
    function handleOnline() {
      setisOnline(true);
    }

    function handleOffline() {
      setisOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000);
    return () => {
      clearInterval(setTime);
    };
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="header">
      <div className="header-title">
        <h1>
          {text} <i className="fa-solid fa-cloud-sun-rain"></i>{" "}
        </h1>
        <p>{isOnline ? "Online" : "Offline"}</p>
      </div>

      <div className="menu-div">
        {/* <h2>{time}</h2> */}
        <ul className="menus">
          <li>
            <button onClick={handleMenuClick} name="Burundi">
              Burundi
            </button>

            {isSubmenuOPen && (
              <ul className="submenus">
                <li>
                  <button onClick={handleSubMenuClick} name="Bubanza">
                    Bubanza
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Bujumbura Rural">
                    Bujumbura Rural
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Bururi">
                    Bururi
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Cankuzo">
                    Cankuzo
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Cibitoke">
                    Cibitoke
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Gitega">
                    Gitega
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Kayanza">
                    Kayanza
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Karusi">
                    Karusi
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Mairie">
                    Mairie
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Makamba">
                    Makamba
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Mwaro">
                    Mwaro
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Muyinga">
                    Muyinga
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Muramvya">
                    Muramvya
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Ngozi">
                    Ngozi
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Rutana">
                    Rutana
                  </button>
                </li>
                <li>
                  <button onClick={handleSubMenuClick} name="Ruyigi">
                    Ruyigi
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>Rwanda</li>
          <li>Tanzania</li>
          <li>DRC</li>
          <li>Ouganda</li>
          <li>Kenya</li>
          <li>Somalia</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
