import Homepage from "./components/HomePage/Homepage";
import Head from "next/head";

export default function Home({ cars }) {
  return (
    <div className="bg-white">
      <Head>
        <title>Zero Deposit & Unlimited km - Self-Drive Car Rentals In Bangalore</title>
        <meta name="description" content="Self-drive cars start at 77/hr, We offer Self Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹77/hr, Baleno @ ₹83/hr, Ertiga @ ₹116/hr, Swift @ ₹77/hr, Thar @ ₹208/hr." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zero Deposit & Unlimited km - Self-Drive Car Rentals In Bangalore" />
        <meta property="og:description" content="Self-drive cars start at 77/hr, We offer Self Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹77/hr, Baleno @ ₹83/hr, Ertiga @ ₹116/hr, Swift @ ₹77/hr, Thar @ ₹208/hr." />

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16648528901"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16648528901');
            `,
          }}
        />
        <script async src=" https://www.googletagmanager.com/gtag/js?id=G-WX2L5ZMHLX "></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WX2L5ZMHLX');
            `,
          }}
        />

  
        {/* <!-- Google Tag Manager --> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P6444QQF');
            `,
          }}
        />

        {/* <!-- End Google Tag Manager --> */}
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P6444QQF"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
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