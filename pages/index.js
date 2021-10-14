import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import data from '../utils/data';
import Link from 'next/link'  


export default function Home() {
  return (
    <>
        <Head>
        <title>VinylTwins - records</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100;400;600;800;900&display=swap" rel="stylesheet"/> 
      </Head>
    <Layout >
      <div>
    <h1>VINYLS HALL</h1>
        <div className={styles.gridHome}>
            {data.products.map((product,id) => (
              <Link href={`/product/${product.slug}`} passHref>
          <div className={styles.flipcard} key={id}>
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
