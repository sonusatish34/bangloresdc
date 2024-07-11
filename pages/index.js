import Image from "next/image";
// import { Inter } from "next/font/google";
import Homepage from "./components/HomePage/Homepage";
// const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export default function Home({ items, cars }) {
  return (
    <div className="bg-white">
      <Head>
        <title>Zero Deposit & Unlimited km - Self-Drive Car Rentals In Bangalore</title>
        <meta name="description" content="Self-drive cars start at 62/hr, We offer Self Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹77/hr, Baleno @ ₹83/hr, Ertiga @ ₹116/hr, Swift @ ₹77/hr, Thar @ ₹208/hr." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zero Deposit & Unlimited km - Self-Drive Car Rentals In Bangalore" />
        <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Self Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹77/hr, Baleno @ ₹83/hr, Ertiga @ ₹116/hr, Swift @ ₹77/hr, Thar @ ₹208/hr." />
      </Head>
      <Homepage data={cars} />
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Bangalore');
  const items = await response.json();
  const cars = items?.data?.results
  return {
    props: {
      items,
      cars
    },
  };
}