import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Carousel } from "react-bootstrap";
import styles from "@/styles/Supporters.module.css";
import Container from "../layout/Container";
import TampereEs from "../../public/assest/supporters/tampereEs.svg";
import Tribe from "../../public/assest/supporters/tribe.svg";
import Gamehub from "../../public/assest/supporters/gamehub.svg";
import Dashboa from "../../public/assest/supporters/dashboa.svg";

const supportersArray = [
  {
    name: "Tampere Es",
    logo: TampereEs,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora, cum laudantium explicabo, omnis accusantium earum hic doloribus consequuntur a dolorum? Porro iusto, aliquid tempore fuga modi maiores dolorum sit.",
    website: "example.com",
  },
  {
    name: "Tribe",
    logo: Tribe,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora, cum laudantium explicabo, omnis accusantium earum hic doloribus consequuntur a dolorum? Porro iusto, aliquid tempore fuga modi maiores dolorum sit.",
    website: "example.com",
  },
  {
    name: "Tampere Game Hub",
    logo: Gamehub,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora, cum laudantium explicabo, omnis accusantium earum hic doloribus consequuntur a dolorum? Porro iusto, aliquid tempore fuga modi maiores dolorum sit.",
    website: "example.com",
  },
  {
    name: "Dashboa",
    logo: Dashboa,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora, cum laudantium explicabo, omnis accusantium earum hic doloribus consequuntur a dolorum? Porro iusto, aliquid tempore fuga modi maiores dolorum sit.",
    website: "example.com",
  },
];

const Supporter = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="supporters" className={styles.supporter}>
      <Container>
        <h2>Our Supporters</h2>

        <div className={styles.carousel}>
          <div className={styles.logo}>
            <a href="https://tamperees.com/" target="_blank" rel="noreferrer">
              <Image
                alt="tampere ES Logo"
                src={TampereEs}
                width={556}
                height={405}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a
              href="https://tribetampere.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image alt="Tribe Logo" src={Tribe} width={556} height={405} />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://tampere.games/" target="_blank" rel="noreferrer">
              <Image
                alt="Tampere Game Hub Logo"
                src={Gamehub}
                width={556}
                height={405}
              />
            </a>
          </div>
          <div className={styles.logo}>
            <a href="https://dashboa.com/" target="_blank" rel="noreferrer">
              <Image
                alt="Dashboa Logo"
                src={Dashboa}
                width={556}
                height={405}
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Supporter;
