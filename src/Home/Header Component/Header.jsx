import { useState, useContext } from 'react'
import styles from './Header.module.css'
import { DataContext } from '../../Data Provider Component/DataProvider'

const Header = () => {
    const [isNavHidden, setNavState] = useState(true);
    const {setSelectedTab, selectedTab} = useContext(DataContext);

    const closeNavBar = () => {
        setNavState(!isNavHidden);
    }

    const setMobileNavBar = (selectedTab) => {
        setSelectedTab(selectedTab);
        setNavState(!isNavHidden);
    }

    return (
        <>
            <div className={styles.headerContainer}>
                <nav className={styles.header}>
                    <div className={styles.left}>
                        <h1 onClick={() => setSelectedTab("Home") } className={styles.logo}>EStore</h1>
                    </div>
                    
                    <div className={styles.right}>
                        <div onClick={() => setSelectedTab("Cart") } className={`${styles.headerTab} ${selectedTab === "Cart" ? styles.selected : ""}`}>
                            <h1 className={styles.info}><i className={`ri-shopping-cart-line ${styles.icon} ${styles.responsive}`}></i></h1>
                            <h1 className={styles.tab}>Cart</h1>
                        </div>

                        <div onClick={() => setSelectedTab("Products") } className={`${styles.headerTab} ${selectedTab === "Products" ? styles.selected : ""}`}>
                            <h1 className={styles.info}><i className={`ri-store-line ${styles.icon} ${styles.responsive}`}></i></h1>
                            <h1 className={styles.tab}>Products</h1>
                        </div>

                        <div onClick={() => setSelectedTab("Contact") } className={`${styles.headerTab} ${selectedTab === "Contact" ? styles.selected : ""}`}>
                            <h1 className={styles.info}><i className={`ri-question-answer-line ${styles.icon} ${styles.responsive}`}></i></h1>
                            <h1 className={styles.tab}>Contact</h1>
                        </div>
                        
                        <i onClick={closeNavBar} className={`ri-menu-line ${styles.icon} ${styles.hidden}`}></i>
                    </div>                
                </nav>
            </div>

            <div className={`${styles.hiddenNavBar} ${isNavHidden ? styles.slideRight : styles.slideLeft}`}>
                <nav className={styles.navBar}>
                    <h1 onClick={() => setMobileNavBar("Home")} className={`${styles.navName} ${selectedTab === "Home" ? styles.selected : ""}`}>Home</h1>
                    <h1 onClick={() => setMobileNavBar("Cart")} className={`${styles.navName} ${selectedTab === "Cart" ? styles.selected : ""}`}>Cart</h1>
                    <h1 onClick={() => setMobileNavBar("Products")} className={`${styles.navName} ${selectedTab === "Products" ? styles.selected : ""}`}>Products</h1>
                    <h1 onClick={() => setMobileNavBar("Contact")} className={`${styles.navName} ${selectedTab === "Contact" ? styles.selected : ""}`}>Contact</h1>
                </nav>
            </div>
        </>        
    )
}

export default Header