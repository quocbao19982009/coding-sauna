import React from "react";
import Link from "next/link";

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Social Media</p>
        <ul>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Twitter</a>
          </li>
          <li>
            <a>LinkedIn</a>
          </li>
          <li>
            <a>Facebook</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Get Involded</p>
        <ul>
          <li>
            <a>Telgram</a>
          </li>
          <li>
            <a>Mail</a>
          </li>
          <li>
            <a>News</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
