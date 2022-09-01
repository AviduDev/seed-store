import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Categories.module.css"

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1.hygraph.com/v2/cl7h828830gl001t196as87mz/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query MyQuery {
        categories {
          id
          name
          slug
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
      }
    `,
  });

  const paths = data.data.categories.map((category) => {
    return {
      params: {
        categorySlug: category.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1.hygraph.com/v2/cl7h828830gl001t196as87mz/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query MyQuery($slug: String = "") {
        category(where: { slug: $slug }) {
          id
          name
          slug
          products {
            id
            name
            price
            slug
            image {
              url
              width
              height
            }
          }
        }
      }
    `,
    variables: {
      slug: params.categorySlug,
    },
  });

  const category = data.data.category;
  return {
    props: {
      category,
      products: category.products,
    },
  };
}

export default function Category({ category, products }) {
  return (
    <div>
      <h1>{category.name}</h1>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`../products/${product.slug}`}>
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

                  <div>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </div>
                </a>
              </Link>
              <button
                className="btn snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={`../products/${product.slug}`}
                data-item-image={product.image.url}
                data-item-name={product.name}
              >
                Add to cart 🛒
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
