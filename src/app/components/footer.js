import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";
import { navLinks } from "../utils/utils";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.navegacion}`}>
        <div className={styles.enlace}>
        {navLinks.map((navlink) => (
          <Link key={navlink.href} href={navlink.href} >
            {navlink.name}
          </Link>
        ))}
        </div>
        <p className={styles.copyright}>Todo los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
