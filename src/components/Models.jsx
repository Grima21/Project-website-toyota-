import { useMemo, useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Models.module.css";

const TYPE_COLORS = {
  Hybrid: { bg: "#0ea5e9", fg: "#001018" }, // azul
  "Hybrid EV": { bg: "#10b981", fg: "#00110b" }, // verde
  Gasoline: { bg: "#6b7280", fg: "#0b0c0d" }, // gris
  Diesel: { bg: "#a16207", fg: "#100a00" }, // ámbar
  EV: { bg: "#22d3ee", fg: "#001015" }, // cian
};

const vehicles = [
  {
    image: "/assets/Yaris/Yaris2025.webp",
    badge: "Hybrid EV",
    year: "2025",
    name: "Toyota Yaris",
    tagline: "Compacto, eficiente y moderno",
    price: 19900,
    spec: "39/37 Est. MPG",
  },
  {
    image: "/assets/LC300/images.jpeg",
    badge: "Gasoline",
    year: "2025",
    name: "Land Cruiser",
    tagline: "Potencia legendaria y lujo",
    price: 110000,
    spec: "20/25 Est. MPG",
  },
  {
    image: "/assets/Prado/bannerCopia.jpg",
    badge: "Hybrid",
    year: "2025",
    name: "Land Cruiser Prado",
    tagline: "Versátil y refinado",
    price: 80000,
    spec: "32/28 Est. MPG",
  },
  {
    image: "/assets/hilux/La-Toyota-Hilux-SRX.jpg",
    badge: "Diesel",
    year: "2025",
    name: "Hilux SRX",
    tagline: "Resistente e imparable",
    price: 50000,
    spec: "28/22 Est. MPG",
  },
  {
    image: "/assets/Camry.avif",
    badge: "Hybrid",
    year: "2025",
    name: "Camry LE",
    tagline: "Los viajes diarios merecen más emoción.",
    price: 29000,
    spec: "52/49 Est. MPG",
  },
  {
    image: "/assets/Rav4Model.avif",
    badge: "Gasolina",
    year: "2025",
    name: "Rav4 LE",
    tagline: "Confianza para ir y venir.",
    price: 29800,
    spec: "27/35 Est. MPG",
  },
  {
    image: "/assets/4runner.avif",
    badge: "Gasolina",
    year: "2025",
    name: "SR5",
    tagline: "Un mundo salvaje te espera.",
    price: 41270,
    spec: "20/26 Est. MPG",
  },
  {
    image: "/assets/corollaHatchback.avif",
    badge: "Gasolina",
    year: "2025",
    name: "Corolla Hatchback SE",
    tagline: "Más emoción en cada vuelta",
    price: 24000,
    spec: "31/40 Est. MPG",
  },
  {
    image: "/assets/GR86.avif",
    badge: "Gasolina",
    year: "2025",
    name: "GR86",
    tagline: "Un espíritu indomable con aspecto feroz.",
    price: 30400,
    spec: "20/26 Est. MPG",
  },
  {
    image: "/assets/corollaGR.avif",
    badge: "Gasolina",
    year: "2025",
    name: " GR Corolla",
    tagline: "Un espíritu indomable con aspecto feroz.",
    price: 39160,
    spec: "20/26 Est. MPG",
  },
  // agrega más…
];

function formatUSD(n) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function Models() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0.2 : 0.5;
  const stagger = reduce ? 0.04 : 0.1;

  const variants = useMemo(
    () => ({
      grid: {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.08 } },
      },
      card: {
        hidden: { y: 18, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration, ease: "easeOut" } },
      },
    }),
    [duration, stagger]
  );

  // Carrusel: refs + accesibilidad
  const railRef = useRef(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const update = () => {
      const vis = el.clientWidth;
      const total = el.scrollWidth;
      const p = Math.max(1, Math.ceil(total / vis));
      setPages(p);
      setPage(Math.min(p, Math.max(1, Math.round(el.scrollLeft / vis) + 1)));
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByViewport = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const delta = dir * el.clientWidth * 0.92;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // teclas ← →
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByViewport(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByViewport(-1);
    }
  };

  return (
    <section
      className={styles.wrap}
      id="modelos"
      aria-labelledby="models-title"
    >
      <h2 className={styles.title} id="models-title">
        Explora Todos Nuestros Modelos
      </h2>
      <p className={styles.subtitle}>
        Tecnología, diseño y eficiencia para cada estilo de vida
      </p>

      <div className={styles.carouselHeader}>
        <div className={styles.spacer} />
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Anterior"
            onClick={() => scrollByViewport(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Siguiente"
            onClick={() => scrollByViewport(1)}
          >
            ›
          </button>
        </div>
      </div>

      <motion.ul
        ref={railRef}
        className={styles.rail}
        variants={variants.grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        role="listbox"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label="Carrusel de modelos Toyota"
        aria-live="polite"
      >
        {vehicles.map((v, i) => {
          const col = TYPE_COLORS[v.badge] || TYPE_COLORS.Gasoline;
          return (
            <motion.li
              key={`${v.name}-${i}`}
              className={styles.card}
              variants={variants.card}
              role="option"
              aria-label={`${v.name} ${v.year}. Precio desde ${formatUSD(
                v.price
              )}. ${v.spec}`}
            >
              <div className={styles.imageWrap}>
                <span
                  className={styles.badge}
                  style={{ backgroundColor: col.bg, color: col.fg }}
                >
                  {v.badge}
                </span>

                <picture>
                  <source srcSet={`${v.image} 1x`} type="image/webp" />
                  {/* si tienes 2 tamaños, agrega 2x aquí */}
                  <img
                    src={v.image}
                    alt={`${v.name} ${v.year} en carretera`}
                    loading="lazy"
                    decoding="async"
                    className={styles.image}
                  />
                </picture>
              </div>

              <div className={styles.info}>
                <p className={styles.year}>{v.year}</p>
                <h3 className={styles.name}>{v.name}</h3>
                <p className={styles.tagline}>{v.tagline}</p>

                <div
                  className={styles.meta}
                  aria-label="Resumen de especificaciones"
                >
                  <div>
                    <p className={styles.price}>{formatUSD(v.price)}</p>
                    <p className={styles.sub}>Starting MSRP*</p>
                  </div>
                  <div>
                    <p className={styles.spec}>{v.spec}</p>
                    <p className={styles.sub}>Up to Est. MPG*</p>
                  </div>
                </div>

                <div className={styles.buttons}>
                  <button type="button" className={styles.btnOutline}>
                    Explore
                  </button>
                  <button type="button" className={styles.btnPrimary}>
                    Build <span aria-hidden>›</span>
                  </button>
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>

      <div className={styles.footer}>
        <p className={styles.page} aria-live="polite">
          Vista {page} de {pages}
        </p>
        <button type="button" className={styles.viewAll}>
          Ver Todos los Modelos
        </button>
      </div>
    </section>
  );
}
