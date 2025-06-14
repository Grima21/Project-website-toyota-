import styles from "./Hero.module.css";
function Hero() {
  return (
    <>
      <section className={styles.container}>
        <section className={styles.hero}>
          <nav className={styles.nav}>
            <div className={styles.containerNav}>
              <div className={styles.logo}>
                <a href="http://localhost:5173/">
                  <img
                    src="./assets/LogoToyota/toyota_logo_icon_169445.ico"
                    alt="Toyota"
                  />
                </a>
              </div>

              <div className={styles.navLinks}>
                <a href="#modelos" className={styles.navLink}>
                  Modelos
                </a>
                <a href="#caracteristicas" className={styles.navLink}>
                  Caracteristicas
                </a>
                <a href="#contacto" className={styles.navLink}>
                  Contacto
                </a>
              </div>
              <div className={styles.button}>
                <button className={styles.navBtn}>Agendar Test Drive</button>
              </div>
            </div>
          </nav>
        </section>
        <section className={styles.header}>
          <div className={styles.containerHeader}>
            <div className={styles.banner}>
              <div className={styles.containerBanner}>
                <div className={styles.descriptionBanner}>
                  <h1 className={styles.descriptionTitle}>
                    Descubre la Experiencia Toyota
                  </h1>
                  <p className={styles.descriptionParrafo}>
                    Innovacion, calidad y confiabilidad en cada modelo.
                    Encuentra el Toyota Perfecto para ti.
                  </p>
                  <button
                    className={styles.descriptionBtn}
                    onClick={() =>
                      document
                        .getElementById("modelos")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Ver Modelos >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
