import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

import styles from "../../styles/Header.module.css";
import codingSaunaLogo from "../../public/assest/logo.svg";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const closeNavbarHandler = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header
      className={`${styles.header} ${isNavbarOpen ? styles["nav-open"] : ""}`}
    >
      <div className={styles.logo}>
        <Image
          width={120}
          height={120}
          className={styles.logo}
          src={codingSaunaLogo}
          alt="Insta's Logo"
        />
      </div>
      <nav
        className={` ${styles["main-nav"]} 
    `}
      >
        <ul className={styles["main-nav-list"]}>
          <li onClick={closeNavbarHandler}>
            <a className={styles["main-nav-link"]} href="#hero">
              Home
            </a>
          </li>
          <li onClick={closeNavbarHandler}>
            <a className={styles["main-nav-link"]} href="#venue">
              Location
            </a>
          </li>
          <li onClick={closeNavbarHandler}>
            <a className={styles["main-nav-link"]} href="#organizer">
              Our Team
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className={styles["btn-mobile-nav"]}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <FaBars className={styles["icon-mobile-nav"]} name="menu-outline" />
        <FaBars className={styles["icon-mobile-nav"]} name="close-outline" />
      </button>
    </header>
  );
};

export default Header;
