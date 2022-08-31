import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";

export async function getStaticPaths() {
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
          description
          id
          use {
            text
            raw
            markdown
            html
          }
          about {
            html
            markdown
            raw
            text
          }
        }
      }
    `,
  });

  const paths = data.data.products.map((singleProduct) => {
    return {
      params: {
        productSlug: singleProduct.slug,
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
      query MyQuery($slug: String) {
        product(where: { slug: $slug }) {
          id
          name
          description
          image {
            url
            width
            height
          }
          price
          about {
            html
          }
          use {
            html
          }
          slug
        }
      }
    `,
    variables: {
      slug: params.productSlug,
    },
  });

  const product = data.data.product;
  return {
    props: {
      product,
    },
  };
}

export default function productSlug({ product }) {
  return (
    <div>
      <Head>
        <title>Product Single Page</title>
      </Head>
      <div>
        <div>
          <Image
            src={product.image.url}
            width={product.image.width}
            height={product.image.height}
            alt={product.name}
          />
        </div>
        <div>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.description}</p>
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
          <div
            dangerouslySetInnerHTML={{
              __html: product.about.html,
            }}
          ></div>
          <div
            dangerouslySetInnerHTML={{
              __html: product.use.html,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
