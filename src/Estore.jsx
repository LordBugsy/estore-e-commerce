import React from 'react'
import Header from './Home/Header Component/Header'
import MobileFooter from './Home/Mobile Footer Component/MobileFooter'
import Hero from './Home/Hero Component/Hero'
import Recommendation from './Home/Recommandation Component/Recommendation'
import BestCategory from './Home/Best Category Component/BestCategory'
import Trending from './Home/Trending Component/Trending'
import Favourite from './Home/Favourite Component/Favourite'
import Footer from './Home/Footer Component/Footer'
import AllProducts from './Products/All Products/Products'
import Contact from './Contact/Contact'
import Cart from './Cart/Cart'
import ProductInfo from './Products/Product Info Component/ProductInfo'
import { DataContext } from './Data Provider Component/DataProvider'
import { useContext } from 'react'

const EStoreComponent = () => {
    const {selectedTab} = useContext(DataContext);

    return (
        <>
            <Header />

            {selectedTab === 'Home' && (
                <main>
                    <Hero />
                    <Recommendation />
                    <BestCategory />
                    <Trending />
                    <Favourite />
                </main>   
            )}

            {selectedTab === 'Products' && (
                <main>
                    <AllProducts />
                </main>
            )}

            {selectedTab === 'Cart' && (
                <main>
                    <Cart />
                </main>
            )}

            {selectedTab === 'Contact' && (
                <main>
                    <Contact />
                </main>
            )}

            {selectedTab === 'Product Selected' && (
                <main>
                    <ProductInfo />
                </main>
            )}
        
            <Footer />
            <MobileFooter />
        </>
    )
}

export default EStoreComponent