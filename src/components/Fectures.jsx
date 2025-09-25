// src/components/Features.jsx
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Features.module.css"; // <-- corrige aquí si tu archivo se llama distinto
import {
  FaShieldAlt,
  FaCarSide,
  FaMicrochip,
  FaLeaf,
  FaWifi,
  FaTools,
  FaGasPump,
  FaHandshake,
} from "react-icons/fa";

export default function Features() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0.2 : 0.55;
  const stagger = reduce ? 0.04 : 0.1;

  const variants = useMemo(
    () => ({
      wrap: {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: "easeOut" },
        },
      },
      grid: {
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      },
      card: {
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration, ease: "easeOut" },
        },
        hover: reduce
          ? {}
          : {
              y: -6,
              rotateX: 1.3,
              rotateY: -1.3,
              boxShadow: "0 12px 24px rgba(0,0,0,.15)",
              transition: { duration: 0.18, ease: "easeOut" },
            },
      },
      icon: {
        rest: { scale: 1 },
        hover: reduce
          ? { scale: 1 }
          : { scale: 1.08, transition: { duration: 0.18 } },
      },
    }),
    [duration, stagger, reduce]
  );

  const items = [
    {
      icon: <FaLeaf className={styles.icon} />,
      title: "Motor Híbrido",
      text: "Rendimiento superior con eficiencia de combustible y bajas emisiones.",
    },
    {
      icon: <FaShieldAlt className={styles.icon} />,
      title: "Seguridad Avanzada",
      text: "Con Toyota Safety Sense para protegerte en cada trayecto.",
    },
    {
      icon: <FaMicrochip className={styles.icon} />,
      title: "Tecnología Inteligente",
      text: "Conectividad, navegación y sistemas de asistencia de última generación.",
    },
    {
      icon: <FaCarSide className={styles.icon} />,
      title: "Diseño Funcional",
      text: "Espacio optimizado para pasajeros y carga sin perder estilo.",
    },
    {
      icon: <FaWifi className={styles.icon} />,
      title: "Conectividad",
      text: "Sistemas multimedia con integración inalámbrica total.",
    },
    {
      icon: <FaTools className={styles.icon} />,
      title: "Calidad Garantizada",
      text: "Respaldada por años de experiencia e innovación continua.",
    },
    {
      icon: <FaHandshake className={styles.icon} />,
      title: "Respaldo y Garantía",
      text: "Cobertura extendida y red de servicio confiable a nivel nacional.",
    },
    {
      icon: <FaGasPump className={styles.icon} />,
      title: "Eficiencia de Consumo",
      text: "Motores optimizados para recorrer más kilómetros con menor gasto de combustible.",
    },
  ];

  return (
    <section
      className={styles.featuresSection}
      id="caracteristicas"
      aria-labelledby="features-title"
    >
      <motion.div
        className={styles.featuresContainer}
        variants={variants.wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className={styles.title} id="features-title">
          Características Destacadas
        </h2>
        <p className={styles.subtitle}>
          Tecnología, seguridad y confort que hacen única la experiencia Toyota.
        </p>

        <motion.div
          className={styles.grid}
          variants={variants.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((f, i) => (
            <motion.article
              key={i}
              className={styles.card}
              variants={variants.card}
              whileHover="hover"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <motion.div
                variants={variants.icon}
                initial="rest"
                animate="rest"
                whileHover="hover"
                aria-hidden
              >
                {f.icon}
              </motion.div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </motion.article>
          ))}
        </motion.div>
        <div className={styles.sectionCta}>
          <button className={styles.ctaButton}>Ver tecnologia Toyota</button>
        </div>
      </motion.div>
    </section>
  );
}
