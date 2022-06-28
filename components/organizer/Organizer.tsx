import React from "react";

import styles from "@/styles/Organizer.module.css";
import Container from "../layout/Container";
import OrganizerItem from "./OrganizerItem";
import sampleImage from "../../public/assest/people/julian-wan-WNoLnJo7tS8-unsplash.jpg";

const Organizer = () => {
  return (
    <section id="organizer" className={styles.organizer}>
      <Container>
        <h2>The organizers</h2>
        <div className={styles.itemContainer}>
          <OrganizerItem
            image={sampleImage}
            name={"Julian Wan"}
            email=" julian@sauna.com"
          />
          <OrganizerItem
            image={sampleImage}
            name={"Julian Wan"}
            email=" julian@sauna.com"
          />
          <OrganizerItem
            image={sampleImage}
            name={"Julian Wan"}
            email=" julian@sauna.com"
          />
          <OrganizerItem
            image={sampleImage}
            name={"Julian Wan"}
            email=" julian@sauna.com"
          />
          <OrganizerItem
            image={sampleImage}
            name={"Julian Wan"}
            email=" julian@sauna.com"
          />
          <OrganizerItem
            image={sampleImage}
            name={"Julian Wan"}
            email=" julian@sauna.com"
          />
        </div>
      </Container>
    </section>
  );
};

export default Organizer;
