import styles from "./Fectures.module.css";
import {
  FaShieldAlt,
  FaCarSide,
  FaMicrochip,
  FaLeaf,
  FaWifi,
  FaTools,
} from "react-icons/fa";

export default function Features() {
  return (
    <section className={styles.featuresSection} id="caracteristicas">
      <div className={styles.featuresContainer}>
        <h2 className={styles.title}>Características Destacadas</h2>
        <p className={styles.subtitle}>
          Tecnología, seguridad y confort que hacen única la experiencia Toyota.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaLeaf className={styles.icon} />
            <h3>Motor Híbrido</h3>
            <p>
              Rendimiento superior con eficiencia de combustible y bajas
              emisiones.
            </p>
          </div>
          <div className={styles.card}>
            <FaShieldAlt className={styles.icon} />
            <h3>Seguridad Avanzada</h3>
            <p>Con Toyota Safety Sense para protegerte en cada trayecto.</p>
          </div>
          <div className={styles.card}>
            <FaMicrochip className={styles.icon} />
            <h3>Tecnología Inteligente</h3>
            <p>
              Conectividad, navegación y sistemas de asistencia de última
              generación.
            </p>
          </div>
          <div className={styles.card}>
            <FaCarSide className={styles.icon} />
            <h3>Diseño Funcional</h3>
            <p>Espacio optimizado para pasajeros y carga sin perder estilo.</p>
          </div>
          <div className={styles.card}>
            <FaWifi className={styles.icon} />
            <h3>Conectividad</h3>
            <p>Sistemas multimedia con integración inalámbrica total.</p>
          </div>
          <div className={styles.card}>
            <FaTools className={styles.icon} />
            <h3>Calidad Garantizada</h3>
            <p>Respaldada por años de experiencia e innovación continua.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
