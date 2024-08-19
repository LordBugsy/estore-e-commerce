import styles from './Cart.module.css';
import { useContext, useEffect } from 'react';
import { DataContext } from '../Data Provider Component/DataProvider';
import BestCategory from '../Home/Best Category Component/BestCategory';

const Cart = () => {
    const {cart, setCart, setSelectedTab} = useContext(DataContext);
    
    const deleteItem = (index) => {
        const updatedCart = cart.filter((_product, i) => i !== index);
        setCart(updatedCart);
    }

    useEffect(() => {
        console.log(cart);
    }, [])

    return (
        <>
        <div className={styles.cartContainer}>
            <h1 className={styles.title}>Your cart</h1>
            <div className={styles.cart}>
                {cart.length < 1 ? (
                    <div className={styles.emptyCartContainer}>
                        <h1 className={styles.emptyCard}>
                            Your cart is empty, check our products <span onClick={() => setSelectedTab("Products")} className={styles.interact}>here!</span>
                        </h1>
                    </div>
                ) 
                
                : 
                
                (
                    <>
                        {cart.map((product, index) => (
                            <div key={index} className={styles.product}>
                                <div className={styles.productImage}>
                                    <img className={styles.image} src={product.src} alt={product.name} />
                                </div>

                                <div className={styles.productDetails}>
                                    <div>
                                        <h1 className={styles.productName}>{product.name}</h1>
                                    </div>
                                    
                                    <h1 className={styles.productPrice}>${product.price}</h1>
                                </div>                   

                                <i onClick={() => deleteItem(index)} className={`ri-delete-bin-line ${styles.icon} ${styles.icon} ${styles.delete}`}></i>
                            </div>
                        ))}

                        <div className={styles.total}>
                            <div>
                                <h1 className={styles.totalText}>Total</h1>
                                <h1 className={styles.totalPrice}>${cart.reduce((total, product) => total + (product.price), 0).toFixed(2)}</h1>
                            </div>
                            <button className={`${styles.button} ${styles.checkout}`}>Proceed to checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
        

        <BestCategory />
    </>
        
    )
}

export default Cart