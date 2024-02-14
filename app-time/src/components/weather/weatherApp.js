import { useState, useEffect } from "react";
import Loading from "./loading";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

// importe de modules.css 
import styles from "./weatherApp.module.css";
// creación de la aplicacion weather
export default function WeatherApp() {
  // creación de un estado
  const [weather, setWeather] = useState(null);

  // funcion para hacer un efecto cada vez que se actualiza un estado
  useEffect(() => {
    loadInfo();
  }, []);

  // cambio de título cada vez que se actualiza weather
  useEffect(() => {
    document.title = "Weather | " + weather?.location?.name ?? "";
  }, [weather]);

  // función asincrona para cargar la información
  async function loadInfo(city = "london") {
    console.log(
      `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    );
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`//primera parte llama al endpoint, luego a nuestra key y la ciudad
      );
      const json = await request.json();
      console.log(json);

      // Se añade un timer de 2 segundos y se actualiza weather con las propiedades recibidas por json
      setTimeout(() => {
        setWeather({ ...json });
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  }

  // función para cambiar la ciudad
  function handleOnChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleOnChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}
