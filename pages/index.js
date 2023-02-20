import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import Container from '@mui/material/Container';
import HomeCarousel from "../src/components/HomeCarousel/HomeCarousel";
import CategoryCarousel from "../src/components/CategoryCarousel/CategoryCarousel";
import ColumnBanner from "../src/components/ColumnBanner/ColumnBanner";
import ProductCarousel from '../src/components/ProductCarousel/ProductCarousel'

export default function Home() {
  return (
    <Container>
      <Head><title>Pharmnacy Shop</title>ફ</Head>
      <HomeCarousel />
      <CategoryCarousel />
      <ColumnBanner />
      <ProductCarousel/>
    </Container>
  );
}
