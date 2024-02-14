import styles from "./loading.module.css";

// app que muestra la pantalla de carga
export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>
  );
}
