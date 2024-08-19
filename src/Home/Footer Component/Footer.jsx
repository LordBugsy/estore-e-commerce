import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footer}>
                    <h1 className={styles.logo}>EStore</h1>

                    <div className={styles.section}>
                        <h1 className={styles.title}>Subscribe to our newsletter</h1>
                        <div className={styles.inputContainer}>
                            <input type="email" placeholder="Enter your email" className={styles.input} />
                            <button className={`${styles.button} ${styles.subscribe}`}><i className={`ri-check-fill ${styles.icon}`}></i></button>
                        </div>
                        <div className={styles.legalContainer}>
                            <h1 className={styles.legal}>Terms of Service</h1> {/* this is supposed to be clickable */}
                            <h1 className={styles.legal}>Privacy Policy</h1> {/* this is supposed to be clickable */}
                        </div>
                        
                    </div>

                    <p className={styles.copyright}>Copyright EStore (LordBugsy) © {2024 == new Date().getFullYear() ? new Date().getFullYear() : 2024 - new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;