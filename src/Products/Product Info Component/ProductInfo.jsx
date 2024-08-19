import styles from './ProductInfo.module.css'
import { useContext, useEffect } from 'react';
import { DataContext } from '../../Data Provider Component/DataProvider';
import Recommendation from '../../Home/Recommandation Component/Recommendation';

// instead of using props, we can use useContext to get the product details
const ProductInfo = () => {
    const {currentProduct, setCart} = useContext(DataContext); // get the current product from the DataContext

    useEffect(() => {
        // scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, [currentProduct]);
    //how can I make it so the page scrolls to the top when the component mounts except when the cart is updated? => 

    return (
        <div className={styles.productInfoContainer}>
            <div className={styles.productInfo}>
                <div className={styles.productImage}>
                    <img className={styles.image} src={currentProduct.src} alt={currentProduct.name} />
                </div>
                
                <div className={styles.productDetails}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>{currentProduct.name}</h1>
                        <h2 className={styles.category}>Category: {currentProduct.category}</h2>
                        <h2 className={styles.price}>Price: ${currentProduct.price}</h2>
                        <h2 className={styles.rating}>Rating: {currentProduct.rating}/5</h2>
                    </div>

                    <div className={styles.right}>
                        <h2 className={styles.productDescription}>Description: </h2>
                        <p className={styles.description}>{currentProduct.description}</p>
                        <div className={styles.controls}>
                            <button onClick={() => setCart(cart => [...cart, currentProduct])} className={`${styles.button} ${styles.addCart}`}>Add to Cart</button>
                            <button className={`${styles.button} ${styles.buy}`}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <Recommendation />
            <div className={styles.margin}></div>
        </div>
    )
}

export default ProductInfo;