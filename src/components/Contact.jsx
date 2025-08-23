import styles from "./Contact.module.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      className={styles.contactSection}
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className={styles.grid}>
        {/* Columna izquierda: título + copy + logo */}
        <motion.div
          className={styles.pitch}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-title" className={styles.title}>
            Agenda tu Test Drive Hoy
          </h2>
          <p className={styles.subtitle}>
            Da el primer paso hacia la experiencia Toyota. Reserva tu test drive
            y conoce de primera mano la tecnología, seguridad y confort de
            nuestros modelos.
          </p>

          {/* Logo opcional */}
          <div className={styles.brand}>
            <img
              src="/assets/LogoToyota/toyota_logo_icon_169445.ico"
              alt="Toyota"
            />
          </div>
        </motion.div>

        {/* Columna derecha: tarjeta con formulario */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h3 className={styles.formTitle}>
            Completa el formulario para reservar
          </h3>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "✅ Tu solicitud ha sido enviada. Pronto nos contactaremos contigo."
              );
            }}
          >
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="phone">Teléfono</label>
              <input id="phone" name="phone" type="tel" required />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="model">Modelo Toyota</label>
              <select id="model" name="model" required>
                <option value="">Selecciona un modelo</option>
                <option>Corolla</option>
                <option>Hilux</option>
                <option>RAV4</option>
                <option>Yaris</option>
                <option>Camry</option>
                <option>Land Cruiser</option>
              </select>
            </div>

            <button className={styles.submitBtn} type="submit">
              Reservar
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
