import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h4>Toyota</h4>
            <a href="/about">Sobre Nosotros</a>
            <a href="/news">Noticias</a>
            <a href="/careers">Carreras</a>
          </div>
          <div className={styles.column}>
            <h4>Clientes</h4>
            <a href="/support">Soporte</a>
            <a href="/warranty">Garantía</a>
            <a href="/contact">Contacto</a>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <a href="/terms">Términos y Condiciones</a>
            <a href="/privacy">Política de Privacidad</a>
            <a href="/cookie">Política de Cookies</a>
          </div>
          <div className={styles.column}>
            <h4>Síguenos</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            © {new Date().getFullYear()} Toyota. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
