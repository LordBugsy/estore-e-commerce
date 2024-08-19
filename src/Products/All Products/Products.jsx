import styles from './Products.module.css'
import { useContext, useState } from 'react';
import { DataContext } from '../../Data Provider Component/DataProvider';

const AllProducts = () => {
    const {availableProducts, setCurrentProduct, setSelectedTab, selectedCategory, setCategory} = useContext(DataContext);

    // Filter products based on category
    const electronicsProduct = availableProducts.filter(product => product.category === 'Electronics');
    const livingRoomProduct = availableProducts.filter(product => product.category === 'Living Room');
    const kitchenProduct = availableProducts.filter(product => product.category === 'Kitchen');
    const skinCareProduct = availableProducts.filter(product => product.category === 'Skin Care');

    const toggleProductFavorite = (product) => {
        product.favorite = !product.favorite;
    }

    const gotoProduct = (product) => {
        setCurrentProduct(product);
        setSelectedTab("Product Selected")
    }

    const renderProducts = (products) => {
        switch(products) {
            case "All": {
                return availableProducts.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <img className={styles.image} src={product.src} alt={product.name} />
                        <div onClick={() => gotoProduct(product)} className={styles.overlay}>
                            <i onClick={() => toggleProductFavorite(product)} className={`${product.favorite ? `ri-star-fill` : `ri-star-line`} ${styles.icon}`}></i>
                            <h2 className={styles.productName}>{product.name}</h2>
                            <h2 className={styles.productPrice}>${product.price}</h2>
                        </div>
                    </div>
                ));
                
            }

            case "Electronics": {
                return electronicsProduct.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <img className={styles.image} src={product.src} alt={product.name} />
                        <div onClick={() => gotoProduct(product)} className={styles.overlay}>
                            <i onClick={() => toggleProductFavorite(product)} className={`${product.favorite ? 'ri-star-fill' : 'ri-star-line'} ${styles.icon}`}></i>
                            <h2 className={styles.productName}>{product.name}</h2>
                            <h2 className={styles.productPrice}>${product.price}</h2>
                        </div>
                    </div>
                ));
            }

            case "Living Room": {
                return livingRoomProduct.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <img className={styles.image} src={product.src} alt={product.name} />
                        <div onClick={() => gotoProduct(product)} className={styles.overlay}>
                            <i onClick={() => toggleProductFavorite(product)} className={`${product.favorite ? 'ri-star-fill' : 'ri-star-line'} ${styles.icon}`}></i>
                            <h2 className={styles.productName}>{product.name}</h2>
                            <h2 className={styles.productPrice}>${product.price}</h2>
                        </div>
                    </div>
                ));
            }

            case "Kitchen": {
                return kitchenProduct.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <img className={styles.image} src={product.src} alt={product.name} />
                        <div onClick={() => gotoProduct(product)} className={styles.overlay}>
                            <i onClick={() => toggleProductFavorite(product)} className={`${product.favorite ? 'ri-star-fill' : 'ri-star-line'} ${styles.icon}`}></i>
                            <h2 className={styles.productName}>{product.name}</h2>
                            <h2 className={styles.productPrice}>${product.price}</h2>
                        </div>
                    </div>
                ));
            }

            case "Skin Care": {
                return skinCareProduct.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <img className={styles.image} src={product.src} alt={product.name} />
                        <div onClick={() => gotoProduct(product)} className={styles.overlay}>
                            <i onClick={() => toggleProductFavorite(product)} className={`${product.favorite ? 'ri-star-fill' : 'ri-star-line'} ${styles.icon}`}></i>
                            <h2 className={styles.productName}>{product.name}</h2>
                            <h2 className={styles.productPrice}>${product.price}</h2>
                        </div>
                    </div>
                ));
            }

            default: {
                return null;
            }
        }
    }

    return (
        <div className={styles.productsContainer}>
            <h1 className={styles.title}>Our products</h1>
            <div className={styles.products}>
                <div className={styles.controls}>
                    <button className={`${styles.button} ${selectedCategory === "All" ? styles.selected : ""}`} onClick={() => setCategory("All")}>All</button>
                    <button className={`${styles.button} ${selectedCategory === "Electronics" ? styles.selected : ""}`} onClick={() => setCategory("Electronics")}>Electronics</button>
                    <button className={`${styles.button} ${selectedCategory === "Living Room" ? styles.selected : ""}`} onClick={() => setCategory("Living Room")}>Living Room</button>
                    <button className={`${styles.button} ${selectedCategory === "Kitchen" ? styles.selected : ""}`} onClick={() => setCategory("Kitchen")}>Kitchen</button>
                    <button className={`${styles.button} ${selectedCategory === "Skin Care" ? styles.selected : ""}`} onClick={() => setCategory("Skin Care")}>Skin Care</button>
                </div>

                <div className={styles.productsFilteredContainer}>
                    {renderProducts(selectedCategory)}
                </div>
                
            </div>
        </div>
    )
}

export default AllProducts;