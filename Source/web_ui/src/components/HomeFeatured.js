import React from 'react';
import styles from './cssmodules/HomeFeatured.module.css';

function HomeFeatured() {
  return (
    <div>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>New York</div>
                        <br />
                        <div className={styles.cardTextContent}>
                            Experience the thrill of a stay in the most happening city in the world.  Make sure to grab a bagel!
                        </div>
                    </div>
                </div>
                <div className={styles.cardColumnImage}>
                    <img src='/LocationImages/NewYork.jpg' className={styles.cardImage} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFeatured