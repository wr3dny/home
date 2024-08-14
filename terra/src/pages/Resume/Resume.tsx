import { Footer } from '../../components/Footer/Footer';
import { Work } from '../../components/Work/Work';
import styles from './Resume.module.css';



export const Resume = () => {
    const footerDescription = 'Ipsum lorem'

    return (
        <div className={styles.resume}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.img}/>
                    <div className={styles.contact}>Contact</div>
                    <div className={styles.skills}>Skills</div>
                </div>
                <div className={styles.description}>Description</div>
                <div className={styles.work}><Work/></div>
                <div className={styles.footer}><Footer text={footerDescription} /></div>            
            </div>
        </div>

    )
}
