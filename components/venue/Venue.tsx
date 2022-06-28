import React from "react";

import map from "../../public/assest/map.svg";
import Container from "../layout/Container";
import styles from "@/styles/Venue.module.css";
import Image from "next/image";

const Venue = () => {
  return (
    <section id="venue" className={styles.venue}>
      <Container>
        <div>
          <h2>The venue</h2>
          <h3>Platform6, Åkerlundinkatu 8</h3>
          <p>[ One stop for all things startup ] </p>
          <p className={styles.description}>
            Tribe Tampere has the run of Platform 6’s 5th floor, so be sure to
            join us there. You can check out more of Tribe Tampere’s events and
            services here, or take a look at everything Platform 6 has to offer
            here.
          </p>
          <div className={styles.map}>
            <Image src={map} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Venue;
