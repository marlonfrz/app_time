import { useState } from "react";

import styles from "./weatherForm.module.css";

// formulario
export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  // función para el cambio
  function handleChange(e) {
    setCity(e.target.value);
  }

  // funcion para enviar
  function handleSubmit(e) {
    e.preventDefault();
    if (!city || city !== "") {
      onChangeCity(city);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Escribe una ciudad"
        value={city}
        onChange={handleChange}
      />
    </form>
  );
}
