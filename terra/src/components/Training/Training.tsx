import styles from './Training.module.css'

interface Props {
    name: string,
    school: string,
    dates: string,
    description: string
    hours: string
}

export const Training = ({name, school, dates, description, hours}:Props) =>{
    return (
        <div className={styles.group}>
            <div className={styles.date}>
                {dates}
            </div>
            <div className={styles.right}>
                <div className={styles.name}>{name} w {school} | {hours}</div>
                <div className={styles.description}>{description}</div>
            </div>          
        </div>
    )
} 