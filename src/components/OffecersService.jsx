import { motion, useReducedMotion } from "framer-motion";
import styles from "./OffersServices.module.css";

const items = [
  {
    title: "Programa tu Servicio Toyota",
    kicker: "FEATURED STORIES",
    description:
      "Agenda tu mantenimiento en línea en tu concesionario Toyota más cercano.",
    cta: "Agendar ahora",
    href: "#contacto",
    image: "/assets/service.webp",
    theme: "dark", // dark o light (para elegir contraste del overlay)
  },
  {
    title: "Toyota Parts Center Online",
    kicker: "FEATURED STORIES",
    description: "Compra repuestos originales con garantía y envío confiable.",
    cta: "Comprar",
    href: "#",
    image: "/assets/Parts.jpg",
    theme: "dark",
  },
  {
    title: "Financiamiento SmartPath",
    kicker: "FEATURED STORIES",
    description:
      "Simula tu compra, elige plazos y obtén una pre‑aprobación rápida.",
    cta: "Más información",
    href: "#",
    image: "/assets/smartpath.webp",
    theme: "dark",
  },
  {
    title: "Toyota Rewards Visa Signature®",
    kicker: "FEATURED STORIES",
    description: "Acumula beneficios en mantenimiento y accesorios Toyota.",
    cta: "Conocer beneficios",
    href: "#",
    image: "/assets/Visa.png",
    theme: "dark",
  },
  {
    title: "Asistencia en Carretera",
    kicker: "OFFERS & SERVICES",
    description: "24/7 en todo el país con cobertura de grúa y auxilio.",
    cta: "Ver cobertura",
    href: "#",
    image: "/assets/roadside.jpg",
    theme: "dark",
  },
  {
    title: "Garantía Extendida",
    kicker: "OFFERS & SERVICES",
    description: "Protege tu inversión por más tiempo, sin sorpresas.",
    cta: "Cotizar",
    href: "#",
    image: "/assets/warranty.webp",
    theme: "dark",
  },
];

export default function OffersServices() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0.2 : 0.55;
  const stagger = reduce ? 0.04 : 0.12;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: 0.1 } },
  };

  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration, ease: "easeOut" },
    },
    hover: reduce
      ? {}
      : { y: -6, scale: 1.01, transition: { duration: 0.18, ease: "easeOut" } },
  };

  return (
    <section className={styles.wrap} aria-labelledby="offers-title">
      <header className={styles.head}>
        <h2 id="offers-title" className={styles.title}>
          Ofertas y Servicios
        </h2>
        <nav className={styles.tabs} aria-label="Categorías">
          <button className={`${styles.tab} ${styles.active}`} type="button">
            Featured Stories
          </button>
          <button className={styles.tab} type="button">
            Vehicles & Technology
          </button>
          <button className={styles.tab} type="button">
            Offers & Services
          </button>
        </nav>
      </header>

      {/* Grid */}
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {items.map((it, i) => (
          <motion.article
            key={i}
            className={`${styles.card} ${
              it.theme === "dark" ? styles.dark : styles.light
            }`}
            variants={card}
            whileHover="hover"
          >
            <img
              src={it.image}
              alt=""
              className={styles.media}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <p className={styles.kicker}>{it.kicker}</p>
              <h3 className={styles.heading}>{it.title}</h3>
              <p className={styles.desc}>{it.description}</p>
              <a href={it.href} className={styles.cta} aria-label={it.title}>
                {it.cta}
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
