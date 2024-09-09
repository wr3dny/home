import styles from './Learning.module.css'

interface Props {
    name: string,
    school: string,
    dates: string,
    description: string
}

export const Learning = ({name, school, dates, description}:Props) =>{
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