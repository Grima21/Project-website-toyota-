import styles from "./pages/Modelos.module.css";

const toyotaModels = [
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
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota Corolla",
    tagline: "Elegancia y eficiencia en cada trayecto",
    price: "$22,000",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota RAV4",
    tagline: "Versátil, potente y con estilo",
    price: "$30,500",
    spec: "",
  },
  {
    image: "",
    badge: "Diesel",
    year: "2025",
    name: "Toyota Land Cruiser Prado",
    tagline: "Poder, elegancia y confort",
    price: "$65,000",
    spec: "",
  },

  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota Tacoma",
    tagline: "Pickup con alma aventurera",
    price: "$42,000",
    spec: "",
  },
  {
    image: "",
    badge: "Híbrido",
    year: "2025",
    name: "Toyota Corolla Cross",
    tagline: "Tecnología híbrida, estilo urbano",
    price: "$28,500",
    spec: "",
  },
  {
    image: "",
    badge: "Híbrido",
    year: "2025",
    name: "Toyota Yaris Cross",
    tagline: "Eficiencia y diseño compacto",
    price: "$26,000",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota 4Runner",
    tagline: "Nacido para la aventura extrema",
    price: "$50,800",
    spec: "",
  },
  {
    image: "",
    badge: "Híbrido",
    year: "2025",
    name: "Toyota Prius",
    tagline: "Pionero en movilidad sostenible",
    price: "$27,400",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota Camry",
    tagline: "Sedán elegante y potente",
    price: "$29,000",
    spec: "",
  },
  {
    image: "",
    badge: "Diesel",
    year: "2025",
    name: "Toyota Fortuner",
    tagline: "Robustez y comodidad en todo terreno",
    price: "$55,000",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota Avalon",
    tagline: "Lujo en cada detalle",
    price: "$38,500",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota Supra",
    tagline: "Pura adrenalina japonesa",
    price: "$47,000",
    spec: "",
  },
  {
    image: "",
    badge: "Eléctrico",
    year: "2025",
    name: "Toyota bZ4X",
    tagline: "El futuro es eléctrico",
    price: "$39,900",
    spec: "",
  },
  {
    image: "",
    badge: "Híbrido",
    year: "2025",
    name: "Toyota Highlander",
    tagline: "Espacio y eficiencia sin compromiso",
    price: "$43,000",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota Sienna",
    tagline: "La minivan reinventada",
    price: "$36,800",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota Tundra",
    tagline: "La potencia hecha pickup",
    price: "$52,000",
    spec: "",
  },
  {
    image: "",
    badge: "Gasolina",
    year: "2025",
    name: "Toyota C-HR",
    tagline: "Diseño único, actitud urbana",
    price: "$27,000",
    spec: "",
  },
];

export default function Modelos() {
  return (
    <>
      <section className={styles.modelos}>
        <aside></aside>
        <div className={styles.modelosTitles}>
          <h2>Explora todos nuestros Modelos</h2>
        </div>

        <div className={styles.modelSection}>
          {toyotaModels.map((toyotaModel, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.containerImage}>
                <span className={styles.badge}>{toyotaModel.badge}</span>
                <img src={toyotaModel.image} alt={toyotaModel.name} />
              </div>
              <div className={styles.information}>
                <p className={styles.year}>{toyotaModel.year}</p>
                <h2 className={styles.name}>{toyotaModel.name}</h2>
              </div>
              <div className={styles.meta}>
                <div className="">
                  <p className={styles.price}>{toyotaModel.price}</p>
                  <p className={styles.sub}>Starting MSRP*</p>
                </div>
                <div>
                  <p className={styles.spec}>{toyotaModel.spec}</p>
                  p.{}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
