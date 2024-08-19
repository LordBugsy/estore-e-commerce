import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.text}>If you have any issues or questions, feel free to contact us. We will get back to you as soon as possible.</p>

            {/* it would have probably been better to use a form here, but you do you */}
            <div className={styles.contactForm}>
                <label htmlFor="emailInput" className={styles.formLabel}>Your Email</label>
                <div className={styles.formInput}>
                    <input id="emailInput" className={styles.input} type="email" placeholder="Enter your email.." />
                </div>

                <label htmlFor="subjectInput" className={styles.formLabel}>Subject</label>
                <div className={styles.formInput}>
                    <input id="subjectInput" className={styles.input} type="text" placeholder="Enter the subject.." />
                </div>

                <label htmlFor="textInput" className={styles.formLabel}>Message</label>
                <div className={styles.formInput}>
                    <textarea id="textInput" className={styles.textarea} placeholder="Enter your message.." />
                </div>

                <button className={styles.submitButton}>Submit</button>

                {/* since this isn't a real website, Privacy Policy and Terms of Service don't redirect anywhere, however, if you want to make this a real website, make sure to make them interactive */}
                <p className={styles.legalCompliance}>By submitting this form, you agree to our <span className={styles.link}>Privacy Policy</span> and <span className={styles.link}>Terms of Service</span>.</p>
            </div>
        </div>
    )
}

export default Contact;