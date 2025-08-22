import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Hero.module.css";

function Hero() {
  const reduce = useReducedMotion();

  // Variantes (respetan prefers-reduced-motion: animación más corta/sutil)
  const duration = reduce ? 0.2 : 0.5;
  const stagger = reduce ? 0.05 : 0.12;

  const variants = useMemo(
    () => ({
      // Nav bar baja desde arriba con fade
      nav: {
        hidden: { y: -20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration, ease: "easeOut" } },
      },
      // Stagger para los ítems del nav
      navStagger: {
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      },
      navItem: {
        hidden: { y: -10, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration } },
      },
      // Hero: texto sube con fade
      heroBlock: {
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: { duration, ease: "easeOut", delay: 0.1 },
        },
      },
      // Botón “latido” suave al entrar
      cta: {
        hidden: { scale: 0.96, opacity: 0 },
        show: {
          scale: 1,
          opacity: 1,
          transition: { duration, ease: "easeOut", delay: 0.2 },
        },
      },
    }),
    [duration, stagger]
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className={styles.container}>
        {/* NAV */}
        <section className={styles.hero}>
          <motion.nav
            className={styles.nav}
            aria-label="Navegación principal"
            variants={variants.nav}
            initial="hidden"
            animate="show"
          >
            <div className={styles.containerNav}>
              {/* Logo */}
              <motion.div
                variants={variants.navItem}
                initial="hidden"
                animate="show"
                className={styles.logo}
              >
                <a href="/" aria-label="Ir al inicio">
                  <img
                    src="./assets/LogoToyota/toyota_logo_icon_169445.ico"
                    alt="Toyota"
                    width={120}
                    height={50}
                    loading="eager"
                  />
                </a>
              </motion.div>

              {/* Links */}
              <motion.div
                className={styles.navLinks}
                variants={variants.navStagger}
                initial="hidden"
                animate="show"
              >
                <motion.a
                  href="#modelos"
                  className={styles.navLink}
                  variants={variants.navItem}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Modelos
                </motion.a>
                <motion.a
                  href="#caracteristicas"
                  className={styles.navLink}
                  variants={variants.navItem}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Características
                </motion.a>
                <motion.a
                  href="#contacto"
                  className={styles.navLink}
                  variants={variants.navItem}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contacto
                </motion.a>
              </motion.div>

              {/* CTA Nav */}
              <motion.div
                className={styles.button}
                variants={variants.navItem}
                initial="hidden"
                animate="show"
              >
                <motion.button
                  className={styles.navBtn}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("contacto")}
                >
                  Agendar Test Drive
                </motion.button>
              </motion.div>
            </div>
          </motion.nav>
        </section>

        {/* HERO */}
        <section className={styles.header}>
          <div className={styles.containerHeader}>
            <div className={styles.banner}>
              <div className={styles.containerBanner}>
                <motion.div
                  className={styles.descriptionBanner}
                  variants={variants.heroBlock}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <h1 className={styles.descriptionTitle}>
                    Descubre la Experiencia Toyota
                  </h1>
                  <p className={styles.descriptionParrafo}>
                    Innovación, calidad y confiabilidad en cada modelo.
                    Encuentra el Toyota perfecto para ti.
                  </p>

                  <motion.button
                    className={styles.descriptionBtn}
                    variants={variants.cta}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollTo("modelos")}
                    aria-label="Ver modelos"
                  >
                    Ver Modelos &gt;
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
