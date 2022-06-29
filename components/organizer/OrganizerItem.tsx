import Image from "next/image";
import React from "react";

import imagePhoto from "../../public/assest/people/julian-wan-WNoLnJo7tS8-unsplash.jpg";
import styles from "@/styles/OrganizerItem.module.css";

interface OrganizerItemProps {
  name: string;
  image: any;
  email: string;
}

const OrganizerItem = ({ name, image, email }: OrganizerItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={image} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.email}>{`[ ${email} ]`}</span>
    </div>
  );
};

export default OrganizerItem;
