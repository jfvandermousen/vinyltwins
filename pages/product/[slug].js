
import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import styles from'./single.module.scss'

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;

  // search for each element the corresponding slug
  const product = data.products.find((e) => e.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
        <Layout >
          <div className={styles.container}>

              <aside className={styles.leftpanel}>

                <h3>Style</h3>
                
                    <button>ROCK</button>
                    <button>ELECTRO</button>
                    <button>RAP</button>
                    <button>CLASSIC</button>
                    <button>JAZZ</button>
                    <button>POP</button>
                    <button>AMBIENT</button>
                    <button>REGGAE</button>
                    <button>BLUES</button>

              </aside>

                  <main className={styles.main}>

                    <div className={styles.product}>

                        <img src={product.image} />


                      <div>
                        <h1>{product.name}</h1>
                        <b>{product.artist}</b>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <div className={styles.catLabel}>
                            <b>{product.label}</b>
                            <b>{product.category}</b>
                        </div>
                        <button>ADD TO CART</button>
                      </div>

                      
                    </div>
                    

                  </main>

          </div>

      </Layout>
    </div>
  );
}