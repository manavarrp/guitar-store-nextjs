"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { usePathname } from "next/navigation";
import { navLinks } from "../utils/utils";

const Header = () => {
  const pathname = usePathname();
  //console.log(pathname);
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="Logo de guitarLA"
          />
        </Link>

        <nav className={styles.navegacion}>
          {navLinks.map((navlink) => (
            <Link
              className={pathname === navlink.href ? styles.active : ""}
              key={navlink.href}
              href={navlink.href}
            >
              {navlink.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
