import React from 'react';
import styles from './cssmodules/HomeFeatured.module.css';

function HomeFeatured() {
  return (
    <div>
        <div className={styles.cardContainer}>
            <div className={styles.cardOdd}>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>Avengers Hotel New York</div>
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
        <div className={styles.cardContainer}>
            <div className={styles.cardEven}>
                <div className={styles.cardColumnImage}>
                    <img src='/LocationImages/Chicago.jpg' className={styles.cardImage} />
                </div>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>Avengers Hotel Chicago</div>
                        <br />
                        <div className={styles.cardTextContent}>
                            The windy city they say....  There is nothing like having a warm barbecue when it snows.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFeatured