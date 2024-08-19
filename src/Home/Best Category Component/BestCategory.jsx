import styles from './BestCategory.module.css'
import { useContext } from 'react';
import { DataContext } from '../../Data Provider Component/DataProvider';

const BestCategory = () => {
    const {availableProducts, setCurrentProduct, setSelectedTab} = useContext(DataContext);
    const bestInTheirCategory = availableProducts.filter(product => product.rating >= 4.5);

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
        <div className={styles.bestCategoryContainer}>
            <div className={styles.bestCategory}>
                <div className={styles.section}>
                    <h1 className={styles.title}>Best in their category</h1>
                    <div className={styles.scrollers}>
                        <button onClick={scrollLeft} className={`${styles.button} ${styles.left}`}>&#10094;</button>
                        <button onClick={scrollRight} className={`${styles.button} ${styles.right}`}>&#10095;</button>
                    </div>
                </div>

                <div className={styles.productContainer}>
                    {bestInTheirCategory.map((product, index) => (
                        <div key={index} className={styles.product}>
                            <img className={styles.image} src={product.src} alt={product.name} />
                            <div onClick={() => gotoProduct(product)} className={styles.overlay}>
                                <h2 className={styles.productName}>{product.name}</h2>
                                <h2 className={styles.productPrice}>{product.category}</h2>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default BestCategory;