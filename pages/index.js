import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Services from "../components/Services.js";
import Hero from "../components/Hero.js";
import Popular from "../components/Popular.js";
import WhyUs from "../components/WhyUs.js";
import HowItWorks from "../components/HowItWorks.js";
import LinkToContact from "../components/LinkToContact.js";
import Faqs from "../components/Faqs.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Seed Store | The Place Where You Can Buy Any Kind of Seeds and Plants.
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        
        {/* --------------------HERO-------------------- */}

        <section>
          <Hero />
        </section>

        {/* --------------------SERVICES-------------------- */}

        <section>
          <Services />
        </section>

        {/* --------------------POPULAR PRODUCTS-------------------- */}

        <section>
          <Popular />
        </section>

        {/* --------------------WHY US-------------------- */}

        <section>
          <WhyUs />
        </section>

        {/* --------------------HOW IT WORKS-------------------- */}

        <section>
          <h2>follow order</h2>
          <HowItWorks title="1. order required seeds" content="this is content 1" />
          <HowItWorks title="2. if not found on the site" content="this is content 2" />
          <HowItWorks title="3. make the payment & order" content="this is content 2" />
          <HowItWorks title="4. follow the guide on the packet" content="this is content 2" />
          <HowItWorks title="5. feedback" content="this is content 2" />
        </section>

        {/* --------------------LINK TO CONTACT PAGE-------------------- */}

        <section>
          <LinkToContact />
        </section>

        {/* --------------------FAQS-------------------- */}

        <section>
          <Faqs />
        </section>
        
        <h1>Links to Categories</h1>
        <Link href="/categories/medicines"><a>Medicines</a></Link>
        <Link href="/categories/foods"><a>Foods</a></Link>

      </main>
    </div>
  );
}
