import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  {
    quote:
      "Mi Toyota Corolla híbrido me cambió la vida: ahorro combustible todos los días y la conducción es súper suave.",
    name: "Jorge Martínez",
    role: "Cliente Toyota Corolla 2024",
    avatar: "/assets/avatars/jorge.jpg",
  },
  {
    quote:
      "Compré una Hilux para mi empresa y ha sido la mejor inversión. Potente, resistente y nunca me ha dejado botado.",
    name: "Lucía Fernández",
    role: "Propietaria Hilux SRX",
    avatar: "/assets/avatars/lucia.jpg",
  },
  {
    quote:
      "Agendé mi test drive de la RAV4 online y la experiencia fue impecable. El vehículo tiene toda la tecnología que buscaba.",
    name: "Pedro Castillo",
    role: "Cliente Toyota RAV4 2025",
    avatar: "/assets/avatars/pedro.jpg",
  },
  {
    quote:
      "El Toyota Yaris es perfecto para la ciudad: compacto, fácil de estacionar y con un consumo bajísimo.",
    name: "Mariana López",
    role: "Propietaria Toyota Yaris 2025",
    avatar: "/assets/avatars/mariana.jpg",
  },
  {
    quote:
      "La Land Cruiser Prado me ha acompañado en viajes largos y terrenos difíciles, siempre con el máximo confort.",
    name: "Ricardo Gómez",
    role: "Cliente Toyota Land Cruiser Prado",
    avatar: "/assets/avatars/ricardo.jpg",
  },
  {
    quote:
      "Con mi Toyota Camry siento que manejo un sedán de lujo, silencioso y con un diseño espectacular.",
    name: "Valeria Herrera",
    role: "Propietaria Toyota Camry 2024",
    avatar: "/assets/avatars/valeria.jpg",
  },
  {
    quote:
      "Mi Toyota Corolla híbrido me cambió la vida: ahorro combustible todos los días y la conducción es súper suave.",
    name: "Jorge Martínez",
    role: "Cliente Toyota Corolla 2024",
    avatar: "/assets/avatars/jorge.jpg",
  },
  {
    quote:
      "Compré una Hilux para mi empresa y ha sido la mejor inversión. Potente, resistente y nunca me ha dejado botado.",
    name: "Lucía Fernández",
    role: "Propietaria Hilux SRX",
    avatar: "/assets/avatars/lucia.jpg",
  },
  {
    quote:
      "Agendé mi test drive de la RAV4 online y la experiencia fue impecable. El vehículo tiene toda la tecnología que buscaba.",
    name: "Pedro Castillo",
    role: "Cliente Toyota RAV4 2025",
    avatar: "/assets/avatars/pedro.jpg",
  },
  {
    quote:
      "El Toyota Yaris es perfecto para la ciudad: compacto, fácil de estacionar y con un consumo bajísimo.",
    name: "Mariana López",
    role: "Propietaria Toyota Yaris 2025",
    avatar: "/assets/avatars/mariana.jpg",
  },
  {
    quote:
      "La Land Cruiser Prado me ha acompañado en viajes largos y terrenos difíciles, siempre con el máximo confort.",
    name: "Ricardo Gómez",
    role: "Cliente Toyota Land Cruiser Prado",
    avatar: "/assets/avatars/ricardo.jpg",
  },
  {
    quote:
      "Con mi Toyota Camry siento que manejo un sedán de lujo, silencioso y con un diseño espectacular.",
    name: "Valeria Herrera",
    role: "Propietaria Toyota Camry 2024",
    avatar: "/assets/avatars/valeria.jpg",
  },
  {
    quote:
      "Trabajo en construcción y la Hilux nunca me ha fallado: es fuerte, aguanta carga pesada y aún así es cómoda en carretera.",
    name: "Fernando Díaz",
    role: "Empresario del sector construcción",
    avatar: "/assets/avatars/fernando.jpg",
  },
  {
    quote:
      "Mi Prius me sorprende cada día: ahorro increíble en gasolina y un diseño moderno que todos notan.",
    name: "Sofía Méndez",
    role: "Propietaria Toyota Prius 2025",
    avatar: "/assets/avatars/sofia.jpg",
  },
  {
    quote:
      "La Toyota Fortuner es ideal para mi familia: espaciosa, segura y lista para cualquier viaje por carretera.",
    name: "Carlos Ramírez",
    role: "Cliente Toyota Fortuner 2025",
    avatar: "/assets/avatars/carlos.jpg",
  },
  {
    quote:
      "Como taxista, el Toyota Etios me da confianza: bajo consumo, mantenimiento económico y siempre confiable.",
    name: "Ana Rodríguez",
    role: "Conductora Taxi Toyota Etios",
    avatar: "/assets/avatars/ana.jpg",
  },
];

export default function TestimonialsCarousel() {
  const listRef = useRef(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // --------- sizing helpers ----------
  const getStep = () => {
    const el = listRef.current;
    if (!el) return 0;
    const card = el.querySelector(`.${styles.card}`);
    return card ? card.offsetWidth + 16 : Math.floor(el.clientWidth * 0.8);
  };

  const count = testimonials.length;

  // --------- scroll handlers ----------
  const scrollByAmount = (dir = 1) => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  };

  const onScroll = () => {
    const el = listRef.current;
    if (!el) return;
    const step = getStep();
    if (!step) return;
    const idx = Math.round(el.scrollLeft / step);
    setActive(Math.max(0, Math.min(count - 1, idx)));
  };

  // --------- autoplay (pausa en hover/focus/hidden) ----------
  useEffect(() => {
    if (reduce) return;
    const el = listRef.current;
    if (!el) return;

    let id;
    const start = () => {
      clearInterval(id);
      id = setInterval(() => {
        // si estamos al final, vuelve al inicio
        const atEnd = active >= count - 1 - 0.1;
        if (document.hidden || isHovered) return;
        if (atEnd) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollByAmount(1);
        }
      }, 5000);
    };
    start();

    const onVis = () => (document.hidden ? clearInterval(id) : start());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [active, count, isHovered, reduce]);

  // --------- keyboard arrows ----------
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") scrollByAmount(1);
      if (e.key === "ArrowLeft") scrollByAmount(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // --------- motion variants ----------
  const { container, item } = useMemo(() => {
    const duration = reduce ? 0.2 : 0.5;
    return {
      container: {
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0.04 : 0.1,
            delayChildren: 0.1,
          },
        },
      },
      item: {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
        hover: reduce
          ? {}
          : { y: -6, scale: 1.01, transition: { duration: 0.18 } },
      },
    };
  }, [reduce]);

  const atStart = active === 0;
  const atEnd = active >= count - 1;

  return (
    <section
      className={styles.wrap}
      aria-labelledby="testimonials-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.head}>
        <h2 id="testimonials-title" className={styles.title}>
          Lo que dicen nuestros clientes
        </h2>
        <p className={styles.subtitle}>
          Historias reales de quienes manejan Toyota.
        </p>
      </div>

      <div className={styles.viewport}>
        {/* Fades laterales */}
        <div className={`${styles.edge} ${styles.leftEdge}`} aria-hidden />
        <div className={`${styles.edge} ${styles.rightEdge}`} aria-hidden />

        {/* Prev */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prev}`}
          aria-label="Ver testimonios anteriores"
          onClick={() => scrollByAmount(-1)}
          disabled={atStart}
        >
          ‹
        </button>

        {/* List */}
        <motion.ul
          ref={listRef}
          className={styles.list}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          onScroll={onScroll}
          role="list"
        >
          {testimonials.map((t, i) => (
            <motion.li
              key={i}
              className={styles.item}
              variants={item}
              whileHover="hover"
            >
              <figure className={styles.card}>
                <blockquote className={styles.quote}>“{t.quote}”</blockquote>
                <figcaption className={styles.person}>
                  <img
                    src={t.avatar || `https://i.pravatar.cc/88?img=${i + 10}`}
                    alt=""
                    width={44}
                    height={44}
                    className={styles.avatar}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className={styles.name}>{t.name}</p>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>

        {/* Next */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.next}`}
          aria-label="Ver más testimonios"
          onClick={() => scrollByAmount(1)}
          disabled={atEnd}
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div
        className={styles.dots}
        role="tablist"
        aria-label="Indicadores del carrusel"
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Ir al testimonio ${i + 1}`}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => {
              const el = listRef.current;
              if (!el) return;
              el.scrollTo({ left: i * getStep(), behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </section>
  );
}
