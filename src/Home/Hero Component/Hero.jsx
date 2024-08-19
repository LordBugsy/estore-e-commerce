import styles from './Hero.module.css';
import Electronics from '../../assets/electronics.jpg';
import Kitchen from '../../assets/kitchen.jpg';
import LivingRoom from '../../assets/living-room.jpg';
import SkinCare from '../../assets/skin-care.jpg';
import { DataContext } from '../../Data Provider Component/DataProvider';
import { useContext } from 'react';

const Hero = () => {
    const {setCategory, setSelectedTab} = useContext(DataContext);

    const gotoCategory = (category) => {
        setCategory(category);
        setSelectedTab("Products");
    }

    return (
        <>
            {/* Big screen version */}
            <div className={styles.heroContainer}>
                <div className={styles.hero}>
                    {/* clicking on each container should take the user to the "Products" Page and filter 
                        the items according to what the user clicked on*/}

                    <div className={styles.left}>
                        <div className={`${styles.electronicsContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={Electronics} alt="Electronics" />
                            <div onClick={() => gotoCategory("Electronics")} className={styles.overlay}>
                                <h1 className={styles.text}>Electronics</h1>
                            </div>
                        </div>

                        <div className={`${styles.kitchenContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={Kitchen} alt="Kitchen" />
                            <div onClick={() => gotoCategory("Kitchen")} className={styles.overlay}>
                                <h1 className={styles.text}>Kitchen</h1>
                            </div>
                        </div>

                        <div className={`${styles.skinCareContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={SkinCare} alt="Skin Care" />
                            <div onClick={() => gotoCategory("Skin Care")} className={styles.overlay}>
                                <h1 className={styles.text}>Skin care</h1>
                            </div>
                        </div>

                        <div className={`${styles.livingRoomContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={LivingRoom} alt="Living Room" />
                            <div onClick={() => gotoCategory("Living Room")} className={styles.overlay}>
                                <h1 className={styles.text}>Living Room</h1>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <h1 className={styles.title}>Welcome to EStore</h1>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.buttonContainer}>
                            <button className={`${styles.button} ${styles.shop}`}>Shop Now</button>
                            <button className={`${styles.button} ${styles.create}`}>Create an account</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile version */}
            <div className={styles.mobileVersionContainer}>
                <div className={styles.mobileVersion}>
                    <div className={styles.top}>
                        <h1 className={styles.title}>Welcome to EStore</h1>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className={styles.bottom}>
                        <div className={`${styles.electronicsContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={Electronics} alt="Electronics" />
                            <div onClick={() => gotoCategory("Electronics")} className={styles.mobileOverlay}>
                                <h1 className={styles.text}>Electronics</h1>
                            </div>
                        </div>

                        <div className={`${styles.kitchenContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={Kitchen} alt="Kitchen" />
                            <div onClick={() => gotoCategory("Kitchen")} className={styles.mobileOverlay}>
                                <h1 className={styles.text}>Kitchen</h1>
                            </div>
                        </div>

                        <div className={`${styles.skinCareContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={SkinCare} alt="Skin Care" />
                            <div onClick={() => gotoCategory("Skin Care")} className={styles.mobileOverlay}>
                                <h1 className={styles.text}>Skin care</h1>
                            </div>
                        </div>

                        <div className={`${styles.livingRoomContainer} ${styles.imageContainer}`}>
                            <img className={styles.image} src={LivingRoom} alt="Living Room" />
                            <div onClick={() => gotoCategory("Living Room")} className={styles.mobileOverlay}>
                                <h1 className={styles.text}>Living Room</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Hero;