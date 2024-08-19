import styles from './Recommendation.module.css'
import { useContext } from 'react';
import { DataContext } from '../../Data Provider Component/DataProvider';


const Recommendation = () => {
    const {availableProducts, setCurrentProduct, setSelectedTab} = useContext(DataContext);

    let recommendedProducts = [];
    for (let i = 0; i < 7; i++) recommendedProducts.push(availableProducts[Math.floor(Math.random() * availableProducts.length)]);

    recommendedProducts = [...new Set(recommendedProducts)]; // remove duplicates if there are any

    const scrollLeft = () => {
        const productContainer = document.querySelector(`.${styles.productContainer}`);
        productContainer.scrollLeft -= 500;
    }

    const scrollRight = () => {
        const productContainer = document.querySelector(`.${styles.productContainer}`);
        productContainer.scrollLeft += 500;
    }

    const gotoProduct = (product) => {
        setCurrentProduct(product);
        setSelectedTab("Product Selected")
    }

    return (
        <div className={styles.recommendationContainer}>
            <div className={styles.recommendation}>
                <div className={styles.section}>
                    <h1 className={styles.title}>You could also like</h1>
                    <div className={styles.scrollers}>
                        <button onClick={scrollLeft} className={`${styles.button} ${styles.left}`}>&#10094;</button>
                        <button onClick={scrollRight} className={`${styles.button} ${styles.right}`}>&#10095;</button>
                    </div>
                </div>

                <div className={styles.productContainer}>

                    {/* Display recommended products */}
                    {recommendedProducts.map((product, index) => (
                        <div key={index} className={styles.product}>
                            <img className={styles.image} src={product.src} alt={product.name} />
                            <div onClick={() => gotoProduct(product)} className={styles.overlay}>
                                <h2 className={styles.productName}>{product.name}</h2>
                                <h2 className={styles.productPrice}>${product.price}</h2>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Recommendation;