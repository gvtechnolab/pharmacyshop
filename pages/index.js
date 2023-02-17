import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import Container from '@mui/material/Container';
import HomeCarousel from "../src/components/HomeCarousel/HomeCarousel";
import CategoryCarousel from "../src/components/CategoryCarousel/CategoryCarousel";
import ColumnBanner from "../src/components/ColumnBanner/ColumnBanner";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>PharmacyShop</title>
      </Head>
      <HomeCarousel />
      <CategoryCarousel />
      <ColumnBanner />
      Home page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eos dolore quod consequatur doloremque maxime hic odio accusamus, iure accusantium, praesentium neque reiciendis corporis totam beatae esse ipsam ipsum. Eaque.Home page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eos dolore quod consequatur doloremque maxime hic odio accusamus, iure accusantium, praesentium neque reiciendis corporis totam beatae esse ipsam ipsum. Eaque.Home page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eos dolore quod consequatur doloremque maxime hic odio accusamus, iure accusantium, praesentium neque reiciendis corporis totam beatae esse ipsam ipsum. Eaque.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eos dolore quod consequatur doloremque maxime hic odio accusamus, iure accusantium, praesentium neque reiciendis corporis totam beatae esse ipsam ipsum. Eaque.Home page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eos dolore quod consequatur doloremque maxime hic odio accusamus, iure accusantium, praesentium neque reiciendis corporis totam beatae esse ipsam ipsum. Eaque.Home page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eos dolore quod consequatur doloremque maxime hic odio accusamus, iure accusantium, praesentium neque reiciendis corporis totam beatae esse ipsam ipsum. Eaque.
    </Container>
  );
}
