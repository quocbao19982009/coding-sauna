import React from "react";
import Image from "next/image";

import Tree from "../../public/assest/trees.svg";
import styles from "../../styles/Hero.module.css";
import Container from "../layout/Container";
const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.about}>
            <h1>Coding Sauna</h1>
            <h2>&#91; Meet and grow with other develoeprs &#93;</h2>
            <p>
              Every week we discuss a new topic presented by a community member
              while enjoying snacks and drinks, followed by open discussion in
              the sauna.
            </p>
            <div className={styles.location}>
              <div>
                <span>&lt;Where&gt;</span>
                <p>Platform 6, 5th floor</p>
              </div>
              <div>
                <span>&lt;When&gt;</span>
                <p>
                  Every Monday, 17:30
                  <br />
                  &#92;&#92;Doors will be open until 18:00! Please arrive on
                  time.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.tree}>
            <Image src={Tree} height={192} width={236}></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
