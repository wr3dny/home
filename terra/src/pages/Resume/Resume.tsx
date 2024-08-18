import { Footer } from '../../components/Footer/Footer';
import { Work } from '../../components/Work/Work';
import { history } from '../../consts/work';
import styles from './Resume.module.css';



export const Resume = () => {
    const footerDescription = 'Ipsum lorem'

    const sortedWork = [...history].sort((a,b)=> b.id - a.id)


    return (
        <div className={styles.resume}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.img}/>
                    <div className={styles.contact}>Contact</div>
                    <div className={styles.skills}>Skills</div>
                </div>
                <div className={styles.description}>Description</div>
                <div className={styles.work}>{sortedWork.map((work)=><Work 
                    key={work.id}
                    from={work.from}
                    to={work.to}    
                           description={work.description}
                           possition={work.possition}
                           company={work.company}
            />)}</div>
                <div className={styles.footer}><Footer text={footerDescription} /></div>            
            </div>
        </div>

    )
}
