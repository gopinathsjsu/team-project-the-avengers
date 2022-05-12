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
        <div className={styles.cardContainer}>
            <div className={styles.cardOdd}>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>Avengers Hotel New Houston</div>
                        <br />
                        <div className={styles.cardTextContent}>
                            An amazing fusion of tech and hospitality.  You have to spend some time here!
                        </div>
                    </div>
                </div>
                <div className={styles.cardColumnImage}>
                    <img src='/LocationImages/Houston.jpg' className={styles.cardImage} />
                </div>
            </div>
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.cardEven}>
                <div className={styles.cardColumnImage}>
                    <img src='/LocationImages/Philadelphia.jpg' className={styles.cardImage} />
                </div>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>Avengers Hotel Philadelphia</div>
                        <br />
                        <div className={styles.cardTextContent}>
                            Take a walk in the lanes of history while enjoying the unique weather here.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.cardOdd}>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>Avengers Hotel San Diego</div>
                        <br />
                        <div className={styles.cardTextContent}>
                            Enjoy amazing beaches and California vibes.  Here you have the best beaches in Cali.
                        </div>
                    </div>
                </div>
                <div className={styles.cardColumnImage}>
                    <img src='/LocationImages/SanDiego.jpg' className={styles.cardImage} />
                </div>
            </div>
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.cardEven}>
                <div className={styles.cardColumnImage}>
                    <img src='/LocationImages/SanFrancisco.jpg' className={styles.cardImage} />
                </div>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>Avengers Hotel San Francisco</div>
                        <br />
                        <div className={styles.cardTextContent}>
                            One of the best coastal cities and home to the Golden Gate Bridge.  Nothing hits bettter than blue waters and beautiful houses.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.cardOdd}>
                <div className={styles.cardColumnText}>
                    <div>
                        <div className={styles.cardTextHeader}>Avengers Hotel San Jose</div>
                        <br />
                        <div className={styles.cardTextContent}>
                            If you have a starup, you need to be here!  The best minds in tech gather here.  It's truly the heart of the Silicon Valley.
                        </div>
                    </div>
                </div>
                <div className={styles.cardColumnImage}>
                    <img src='/LocationImages/SanJose.jpg' className={styles.cardImage} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFeatured