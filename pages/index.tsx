import Organizer from "@/components/organizer/Organizer";
import Supporter from "@/components/supporter/Supporter";
import Venue from "@/components/venue/Venue";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero/Hero";
import Container from "../components/layout/Container";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Venue />
      <Organizer />
      <Supporter />
    </Layout>
  );
};

export default Home;
