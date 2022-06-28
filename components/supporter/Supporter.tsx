import React from "react";
import Image from "next/image";

import styles from "@/styles/Supporters.module.css";
import Container from "../layout/Container";
import TampereEs from "../../public/assest/supporters/tampereEs.svg";
import Tribe from "../../public/assest/supporters/tribe.svg";
import Gamehub from "../../public/assest/supporters/gamehub.svg";
import Dashboa from "../../public/assest/supporters/dashboa.svg";

const Supporter = () => {
  return (
    <section id="supporters" className={styles.supporter}>
      <Container>
        <h2>Our Supporters</h2>
        <div className={styles.carousel}>
          <div className={styles.logo}>
            <Image src={TampereEs} width={556} height={405} />
          </div>
          <div className={styles.logo}>
            <Image src={Tribe} width={556} height={405} />
          </div>
          <div className={styles.logo}>
            <Image src={Gamehub} width={556} height={405} />
          </div>
          <div className={styles.logo}>
            <Image src={Dashboa} width={556} height={405} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Supporter;
