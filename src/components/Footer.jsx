import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <img src="/assets/toyota-7.svg" alt="Toyota" />
          {/* <span>TOYOTA</span> */}
          <p className={styles.copy}>
            Innovación, seguridad y desempeño para cada camino.
          </p>
        </div>

        <nav className={styles.cols} aria-label="Enlaces del sitio">
          <div>
            <h4>Modelos</h4>
            <ul>
              <li>
                <a href="#modelos">Corolla</a>
              </li>
              <li>
                <a href="#modelos">Hilux</a>
              </li>
              <li>
                <a href="#modelos">RAV4</a>
              </li>
              <li>
                <a href="#modelos">Yaris</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              <li>
                <a href="#contacto">Agendar test drive</a>
              </li>
              <li>
                <a href="#contacto">Financiamiento</a>
              </li>
              <li>
                <a href="#contacto">Mantenimiento</a>
              </li>
              <li>
                <a href="#contacto">Repuestos</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Compañía</h4>
            <ul>
              <li>
                <a href="#">Sobre Toyota</a>
              </li>
              <li>
                <a href="#">Concesionarios</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/legal/privacidad">Política de Privacidad</a>
              </li>
              <li>
                <a href="/legal/terminos">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={styles.social}>
          <a aria-label="Facebook" href="#" target="_blank" rel="noreferrer">
            
          </a>
          <a aria-label="Instagram" href="#" target="_blank" rel="noreferrer">
            
          </a>
          <a aria-label="YouTube" href="#" target="_blank" rel="noreferrer">
            
          </a>
          <a aria-label="LinkedIn" href="#" target="_blank" rel="noreferrer">
            
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Toyota. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
