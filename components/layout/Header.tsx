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
        <Link href="/">
          <Image
            width={120}
            height={120}
            className={styles.logo}
            src={codingSaunaLogo}
            alt="Insta's Logo"
          />
        </Link>
      </div>
      <nav
        className={` ${styles["main-nav"]} 
    `}
      >
        <ul className={styles["main-nav-list"]}>
          <li onClick={closeNavbarHandler}>
            <a className={styles["main-nav-link"]} href="#home">
              Home
            </a>
          </li>
          <li onClick={closeNavbarHandler}>
            <a className={styles["main-nav-link"]} href="#About">
              About Us
            </a>
          </li>
          <li onClick={closeNavbarHandler}>
            <a className={styles["main-nav-link"]} href="#News">
              News
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
