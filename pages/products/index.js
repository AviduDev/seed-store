import Link from "next/link";
import allProducts from "../data/products.json";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import styles from "../../styles/products.module.css";
import Head from "next/head";

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1.hygraph.com/v2/cl7h828830gl001t196as87mz/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query MyQuery {
        products {
          image {
            url
            height
            width
          }
          name
          price
          slug
          id
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
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Back to Home</h1>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <h2>
        All Products <span>🌿</span>
      </h2>
      <div className={styles.grid}>
        {allProducts.map((product) => {
          return (
            <div key={product.id} className={styles.grid}>
              <Link href={`products/${product.slug}`}>
                <a>
                  <div className={styles.img_ctn}>
                    <Image
                      src={product.image.url}
                      alt={product.name}
                      height={product.image.height}
                      width={product.image.width}
                      layout="responsive"
                    />
                  </div>
                </a>
              </Link>
              
                <Link href={`products/${product.slug}`}>
                  <div className={styles.name_container}>
                    <a>
                      <h3>{product.name}</h3>
                    </a>
                  </div>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
