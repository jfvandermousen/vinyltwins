import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import {products} from '../utils/data'


export default function Home() {
  return (
    <>
        <Head>
        <title>VinylTwins - records</title>
      </Head>
    <Layout >
      <div>
    <h1>VINYLS HALL</h1>
        <div className={styles.gridHome}>
            {products.map((product,id) => (
          <div className={styles.flipcard} key={id}>
          <div className={styles.flipInner}>
            <div className={styles.cardfront}>
              <img src={product.image} className={styles.vignette} />
            </div>
            <div className={styles.cardback}>
              <h2>{product.name}</h2>
            </div>
          </div>
        </div>


        ))}
        
      </div>
      </div>

    </Layout>
    </>

  )
}
