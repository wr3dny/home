import styles from './Resume.module.css';

export const Resume = () => {
    return (
        <div className={styles.resume}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.img}/>
                    <div className={styles.contact}>Contact</div>
                    <div className={styles.skills}>Skills</div>
                </div>
                <div className={styles.description}>Description</div>
                <div className={styles.date}>Date</div>
                <div className={styles.work}>Work</div>
                <div className={styles.footer}>Footer</div>            
            </div>
        </div>

    )
}
