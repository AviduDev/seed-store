import Link from "next/link";
import allProducts from "../data/products.json";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import styles from "../../styles/products.module.css";
import Head from "next/head";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1.hygraph.com/v2/cl7pz3sck4mjl01umcajg4ihg/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query MyQuery {
        products {
          id
          name
          slug
          price
          image {
            url
            width
            height
          }
        }
      }
    `,
  });

  const allProducts = data.data.products;
  return {
    props: {
      allProducts,
    },
  };
}

export default function Products({ allProducts }) {
  return (
    <motion.div className={styles.main} exit={{ opacity: 0 }}>
      <Head>
        <title>Products to shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Back to Home</h1>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <h2>
        All Seeds <span>🌿</span>
      </h2>
      <motion.div className={styles.grid} exit={{ opacity: 0 }}>
        {allProducts.map((product) => {
          return (
            <motion.div key={product.id} className={styles.p_details} exit={{ opacity: 0 }}>
              <Link href={`products/${product.slug}`}>
                <a>
                  <div className={styles.img_ctn}>
                    <Image
                      src={product.image.url}
                      alt={product.name}
                      height={product.image.height}
                      width={product.image.width}
                      layout="fixed"
                    />
                  </div>
                </a>
              </Link>

              <Link
                href={`products/${product.slug}`}
                className={styles.name_ctn}
              >
                <a>
                  <h3 className={styles.name}>{product.name}</h3>
                </a>
              </Link>

              <div className={styles.details}>
                <div className={styles.price_container}>
                  <p>${product.price}</p>
                </div>
                <div className={styles.btn_container}>
                  <button
                    className="btn snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={`products/${product.slug}`}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                  >
                    Add to cart 🛒
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
