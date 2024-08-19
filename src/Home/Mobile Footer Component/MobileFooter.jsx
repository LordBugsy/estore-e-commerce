import { useContext } from 'react'
import styles from './MobileFooter.module.css'
import { DataContext } from '../../Data Provider Component/DataProvider';

const MobileFooter = () => {
    const {selectedTab, setSelectedTab} = useContext(DataContext);

    return (
        <div className={styles.mobileFooterContainer}>
            <div className={styles.mobileFooter}>
                <div onClick={() => setSelectedTab("Home")} className={`${styles.column} ${selectedTab === "Home" ? styles.selected : ""}`}>
                    <i className={`ri-home-2-line ${styles.icon}`}></i>
                    <p className={styles.info}>Home</p>
                </div>

                <div onClick={() => setSelectedTab("Cart")} className={`${styles.column} ${selectedTab === "Cart" ? styles.selected : ""}`}>
                    <i className={`ri-shopping-cart-line ${styles.icon}`}></i>
                    <p className={styles.info}>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter