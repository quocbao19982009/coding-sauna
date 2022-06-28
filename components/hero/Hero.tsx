import React from "react";
import Image from "next/image";

import Tree from "../../public/assest/trees.svg";
import styles from "../../styles/Hero.module.css";
import Container from "../layout/Container";
const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <Container>
        <h1>Coding Sauna</h1>
        <h2>[ Meet and grow with other develoeprs ]</h2>
        <p>
          Every week we discuss a new topic presented by a community member
          while enjoying snacks and drinks, followed by open discussion in the
          sauna.
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
              //Doors will be open until 18:00! Please arrive on time.
            </p>
          </div>
        </div>
        <div className={styles.tree}>
          <Image src={Tree} height={192} width={236}></Image>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
