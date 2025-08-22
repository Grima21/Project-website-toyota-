// src/components/Models.jsx
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Models.module.css";

const vehicles = [
  {
    image: "/assets/Yaris/Yaris2025.webp",
    badge: "Hybrid EV",
    year: "2025",
    name: "Toyota Yaris",
    tagline: "Compacto, eficiente y moderno",
    price: "$19,900",
    spec: "39/37 Est. MPG",
  },
  {
    image: "/assets/LC300/images.jpeg",
    badge: "Gasoline",
    year: "2025",
    name: "Land Cruiser",
    tagline: "Potencia legendaria y lujo",
    price: "$110,000",
    spec: "20/25 Est. MPG",
  },
  {
    image: "/assets/Prado/bannerCopia.jpg",
    badge: "Hybrid",
    year: "2025",
    name: "Land Cruiser Prado",
    tagline: "Versátil y refinado",
    price: "$80,000",
    spec: "32/28 Est. MPG",
  },
  {
    image: "/assets/hilux/La-Toyota-Hilux-SRX.jpg",
    badge: "Diesel",
    year: "2025",
    name: "Hilux SRX",
    tagline: "Resistente e imparable",
    price: "$50,000",
    spec: "28/22 Est. MPG",
  },
  // …si quieres más, agrega acá
];

export default function Models() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0.2 : 0.55;
  const stagger = reduce ? 0.04 : 0.11;

  const variants = useMemo(
    () => ({
      grid: {
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      },
      card: {
        hidden: { y: 18, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: { duration, ease: "easeOut" },
        },
        hover: reduce
          ? {}
          : {
              y: -6,
              scale: 1.01,
              transition: { duration: 0.18, ease: "easeOut" },
            },
      },
      imageWrap: {
        rest: { scale: 1 },
        hover: reduce
          ? { scale: 1 }
          : { scale: 1.03, transition: { duration: 0.25 } },
      },
    }),
    [duration, stagger, reduce]
  );

  return (
    <section
      className={styles.modelsSectionWrapper}
      id="modelos"
      aria-labelledby="models-title"
    >
      <h2 className={styles.modelsTitle} id="models-title">
        Explora Todos Nuestros Modelos
      </h2>
      <p className={styles.modelsSubtitle}>
        Tecnología, diseño y eficiencia para cada estilo de vida
      </p>

      {/* Grid animado */}
      <motion.div
        className={styles.modelsSection}
        variants={variants.grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {vehicles.map((v, i) => (
          <motion.article
            key={`${v.name}-${i}`}
            className={styles.card}
            variants={variants.card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover="hover"
          >
            <motion.div
              className={styles.imageContainer}
              variants={variants.imageWrap}
              initial="rest"
              animate="rest"
              whileHover="hover"
              aria-label={`${v.name} ${v.year}`}
            >
              <span className={styles.badge}>{v.badge}</span>
              <img
                src={v.image}
                alt={`${v.name} ${v.year}`}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <div className={styles.info}>
              <p className={styles.year}>{v.year}</p>
              <h3 className={styles.name}>{v.name}</h3>
              <p className={styles.tagline}>{v.tagline}</p>

              <div
                className={styles.meta}
                role="list"
                aria-label="Resumen de especificaciones"
              >
                <div role="listitem">
                  <p className={styles.price}>{v.price}</p>
                  <p className={styles.sub}>Starting MSRP*</p>
                </div>
                <div role="listitem">
                  <p className={styles.spec}>{v.spec}</p>
                  <p className={styles.sub}>Up to Est. MPG*</p>
                </div>
              </div>

              <div className={styles.buttons}>
                <motion.button
                  className={styles.explore}
                  whileHover={!reduce ? { y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => console.log(`Explorar ${v.name}`)}
                  aria-label={`Explorar ${v.name}`}
                >
                  Explore
                </motion.button>

                <motion.button
                  className={styles.build}
                  whileHover={!reduce ? { y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => console.log(`Configurar ${v.name}`)}
                  aria-label={`Configurar ${v.name}`}
                >
                  Build <span aria-hidden>›</span>
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className={styles.modelsButtonContainer}>
        <motion.button
          className={styles.viewAllButton}
          whileHover={!reduce ? { scale: 1.03 } : {}}
          whileTap={{ scale: 0.98 }}
          onClick={() => console.log("Ir a /todos-los-modelos 🚗")}
        >
          Ver Todos los Modelos
        </motion.button>
      </div>
    </section>
  );
}
