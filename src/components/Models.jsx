import styles from "./Models.module.css";

const vehicles = [
  {
    image: "./assets/Yaris/Yaris2025.webp",
    badge: "Hybrid EV",
    year: "2025",
    name: "Toyota Yaris",
    tagline: "Compacto, eficiente y moderno",
    price: "$19,900",
    spec: "39/37 Est. MPG",
  },
  {
    image: "./assets/LC300/images.jpeg",
    badge: "Gasoline",
    year: "2025",
    name: "Land Cruiser",
    tagline: "Potencia legendaria y lujo",
    price: "$110,000",
    spec: "20/25 Est. MPG",
  },
  {
    image: "./assets/Prado/bannerCopia.jpg",
    badge: "Hybrid",
    year: "2025",
    name: "Land Cruiser Prado",
    tagline: "Versátil y refinado",
    price: "$80,000",
    spec: "32/28 Est. MPG",
  },
  {
    image: "./assets/hilux/La-Toyota-Hilux-SRX.jpg",
    badge: "Diesel",
    year: "2025",
    name: "Hilux SRX",
    tagline: "Resistente e imparable",
    price: "$50,000",
    spec: "28/22 Est. MPG",
  },
  {
    image: "./assets/hilux/La-Toyota-Hilux-SRX.jpg",
    badge: "Diesel",
    year: "2025",
    name: "Hilux SRX",
    tagline: "Resistente e imparable",
    price: "$50,000",
    spec: "28/22 Est. MPG",
  },
  {
    image: "./assets/hilux/La-Toyota-Hilux-SRX.jpg",
    badge: "Diesel",
    year: "2025",
    name: "Hilux SRX",
    tagline: "Resistente e imparable",
    price: "$50,000",
    spec: "28/22 Est. MPG",
  },
  {
    image: "./assets/hilux/La-Toyota-Hilux-SRX.jpg",
    badge: "Diesel",
    year: "2025",
    name: "Hilux SRX",
    tagline: "Resistente e imparable",
    price: "$50,000",
    spec: "28/22 Est. MPG",
  },
];

export default function Models() {
  return (
    <section className={styles.modelsSectionWrapper}>
      <h2 className={styles.modelsTitle}>Explora Todos Nuestros Modelos</h2>
      <p className={styles.modelsSubtitle}>
        Tecnología, diseño y eficiencia para cada estilo de vida
      </p>
      <div className={styles.modelsSection}>
        {vehicles.map((vehicle, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <span className={styles.badge}>{vehicle.badge}</span>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <p className={styles.year}>{vehicle.year}</p>
              <h2 className={styles.name}>{vehicle.name}</h2>
              <p className={styles.tagline}>{vehicle.tagline}</p>
              <div className={styles.meta}>
                <div>
                  <p className={styles.price}>{vehicle.price}</p>
                  <p className={styles.sub}>Starting MSRP*</p>
                </div>
                <div>
                  <p className={styles.spec}>{vehicle.spec}</p>
                  <p className={styles.sub}>Up to Est. MPG*</p>
                </div>
              </div>
              <div className={styles.buttons}>
                <button className={styles.explore}>Explore</button>
                <button className={styles.build}>
                  Build <span>›</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.modelsButtonContainer}>
        <button
          className={styles.viewAllButton}
          onClick={() => {
            // más adelante puedes usar useNavigate() o Link de react-router
            console.log("Ir a /todos-los-modelos 🚗");
          }}
        >
          Ver Todos los Modelos
        </button>
      </div>
    </section>
  );
}
