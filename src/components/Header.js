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
        latitude: -3.2196819,
        longitude: 30.5466187,
      },
      {
        provinceName: "Karusi",
        latitude: -3.100096,
        longitude: 30.163019,
      },
      {
        provinceName: "Ruyigi",
        latitude: -3.4750027,
        longitude: 30.2483881,
      },
      {
        provinceName: "Mwaro",
        latitude: -3.5639,
        longitude: 29.7208,
      },
      {
        provinceName: "Cibitoke",
        latitude: -2.8102897,
        longitude: 29.1855785,
      },
      {
        provinceName: "Bubanza",
        latitude: -3.083377,
        longitude: 29.393463,
      },
      {
        provinceName: "Rutana",
        latitude: -3.7346,
        longitude: 30.2384,
      },
      {
        provinceName: "Muyinga",
        latitude: -2.85,
        longitude: 30.3333333,
      },
      {
        provinceName: "Kirundo",
        latitude: -2.584837,
        longitude: 30.096129,
      },
      {
        provinceName: "Rumonge",
        latitude: -3.973145,
        longitude: 29.4382459,
      },
    ],
  },
  {
    name: "Rwanda",
    provinces: [
      {
        provinceName: "Kigali",
        latitude: "-1.943889",
        longitude: "30.059444",
      },
      {
        provinceName: "Amajyaruguru",
        latitude: "-1.580969",
        longitude: "29.926977",
      },
      {
        provinceName: "Amajyepfo",
        latitude: "-2.33333",
        longitude: "29.6667",
      },
      {
        provinceName: "Iburasirazuba",
        latitude: "-1.7500",
        longitude: "30.5000",
      },
      {
        provinceName: "Iburengerazuba",
        latitude: "-2.379905",
        longitude: "29.2015345",
      },
    ],
  },
  {
    name: "DRC",
    provinces: [
      {
        provinceName: "Uvira",
        latitude: "-3.372884",
        longitude: "29.144879",
      },
      {
        provinceName: "Nord Kivu",
        latitude: "-0.791773",
        longitude: "29.045993",
      },
      {
        provinceName: "Kinshasa",
        latitude: "-4.32758",
        longitude: "15.31357",
      },
      {
        provinceName: "Sud Kivu",
        latitude: "-3.011658",
        longitude: "28.299435",
      },
    ],
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
    provinces: [
      { provinceName: "Dodoma", latitude: "-6.161184", longitude: "35.745426" },
      {
        provinceName: "Kigoma",
        latitude: "-4.8861508",
        longitude: "29.6383185",
      },
      {
        provinceName: "Arusha",
        latitude: "-3.386925",
        longitude: "36.682995",
      },
      {
        provinceName: "Shinyanga",
        latitude: "-3.680996",
        longitude: "33.427139",
      },
      {
        provinceName: "Dar es Salaam",
        latitude: "-6.83523",
        longitude: "39.19597",
      },
    ],
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
  const [isOnline, setisOnline] = useState(navigator.onLine);
  const [error, setError] = useState(null);
  const appid = "dde0a4dcefbdab3fac4077a9e9c86a05";
  const [isSubmenuOPen, setIsSubmenuOPen] = useState(false);
  const [isMenuOPen, setIsMenuOPen] = useState(false);
  const [country, setCountry] = useState("");

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

    const fetchData = async () => {
      try {
        console.log("data fecthing.....");
        setLoading(true);
        setIsSubmenuOPen(false);
        setIsMenuOPen(false);

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
        <div className="toggle-menu" onClick={() => setIsMenuOPen(!isMenuOPen)}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <ul className={`menus ${isMenuOPen ? "show" : ""}`}>
          <li>
            <button
              onClick={handleMenuClick}
              name="Burundi"
              className="button-menu"
            >
              Burundi
            </button>

            {isSubmenuOPen && country === "Burundi" && (
              <ul className="submenus">
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Bubanza"
                    className="button-submenu"
                  >
                    Bubanza
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Bujumbura Rural"
                    className="button-submenu"
                  >
                    Bujumbura Rural
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Bururi"
                    className="button-submenu"
                  >
                    Bururi
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Cankuzo"
                    className="button-submenu"
                  >
                    Cankuzo
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Cibitoke"
                    className="button-submenu"
                  >
                    Cibitoke
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Gitega"
                    className="button-submenu"
                  >
                    Gitega
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Kayanza"
                    className="button-submenu"
                  >
                    Kayanza
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Karusi"
                    className="button-submenu"
                  >
                    Karusi
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Kirundo"
                    className="button-submenu"
                  >
                    Kirundo
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Mairie"
                    className="button-submenu"
                  >
                    Mairie
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Makamba"
                    className="button-submenu"
                  >
                    Makamba
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Mwaro"
                    className="button-submenu"
                  >
                    Mwaro
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Muyinga"
                    className="button-submenu"
                  >
                    Muyinga
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Muramvya"
                    className="button-submenu"
                  >
                    Muramvya
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Ngozi"
                    className="button-submenu"
                  >
                    Ngozi
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Rumonge"
                    className="button-submenu"
                  >
                    Rumonge
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Rutana"
                    className="button-submenu"
                  >
                    Rutana
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Ruyigi"
                    className="button-submenu"
                  >
                    Ruyigi
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              name="Rwanda"
              className="button-menu"
              onClick={handleMenuClick}
            >
              Rwanda
            </button>
            {isSubmenuOPen && country === "Rwanda" && (
              <ul className="submenus">
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Kigali"
                    className="button-submenu"
                  >
                    Kigali
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Amajyaruguru"
                    className="button-submenu"
                  >
                    Amajyaruguru
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Amajyepfo"
                    className="button-submenu"
                  >
                    Amajyepfo
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Iburasirazuba"
                    className="button-submenu"
                  >
                    Iburasirazuba
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Iburengerazuba"
                    className="button-submenu"
                  >
                    Iburengerazuba
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              name="Tanzania"
              className="button-menu"
              onClick={handleMenuClick}
            >
              Tanzania
            </button>
            {isSubmenuOPen && country === "Tanzania" && (
              <ul className="submenus">
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Arusha"
                    className="button-submenu"
                  >
                    Arusha
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Dar es Salaam"
                    className="button-submenu"
                  >
                    Dar es Salaam
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Dodoma"
                    className="button-submenu"
                  >
                    Dodoma
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Kigoma"
                    className="button-submenu"
                  >
                    Kigoma
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Shinyanga"
                    className="button-submenu"
                  >
                    Shinyanga
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              name="DRC"
              className="button-menu"
              onClick={handleMenuClick}
            >
              DRC
            </button>
            {isSubmenuOPen && country === "DRC" && (
              <ul className="submenus">
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Kinshasa"
                    className="button-submenu"
                  >
                    Kinshasa
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Nord Kivu"
                    className="button-submenu"
                  >
                    Nord Kivu
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Sud Kivu"
                    className="button-submenu"
                  >
                    Sud Kivu
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSubMenuClick}
                    name="Uvira"
                    className="button-submenu"
                  >
                    Uvira
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button name="Ouganda" className="button-menu">
              Ouganda
            </button>
          </li>
          <li>
            <button name="Kenya" className="button-menu">
              Kenya
            </button>
          </li>
          <li>
            <button name="Somalia" className="button-menu">
              Somalia
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
