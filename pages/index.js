import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import Link from 'next/link';  
import { connectToDatabase } from "../util/mongodb";




export default function Home({products}) {



  return (
    <>
        <Head>
        <title>Vinyl Tricks - records</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100;400;600;800;900&display=swap" rel="stylesheet"/> 
      </Head>
    <Layout >
      <div>
    <h1>VINYLS HALL</h1>
        <div className={styles.gridHome}>
            {products.map((product) => (
              <Link href={`/product/`+ product.slug} key={product.slug}>
          <div className={styles.flipcard} >
          <div className={styles.flipInner}>
            <div className={styles.cardfront}>
              <img src={product.image} className={styles.vignette} />
            </div>
            <div className={styles.cardback}>
              <h2>{product.name}</h2>
              <strong>{product.artist}</strong>
              <p>{product.price}€</p>
            </div>
          </div>
        </div>
        </Link>


        ))}
        
      </div>
      </div>
      <div className={styles.category}>
        <button>ROCK</button>
        <button>ELECTRO</button>
        <button>RAP</button>
        <button>CLASSIC</button>
        <button>JAZZ</button>
        <button>POP</button>
        <button>AMBIENT</button>
        <button>REGGAE</button>
        <button>BLUES</button>

      </div>

    </Layout>
    </>

  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const products = await db
    .collection("products")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}