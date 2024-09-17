import styles from './Training.module.css'

interface Props {
    name: string,
    school: string,
    dates: string,
    description: string
}

export const Training = ({name, school, dates, description}:Props) =>{
    return (
        <div className={styles.container}>
            <div className={styles.dates}>
                {dates}
            </div>
            <div className={styles.right}>
                <div className={styles.name}>{name} w {school}</div>
                <div className={styles.description}>{description}</div>
            </div>          
        </div>
    )
}