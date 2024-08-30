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
            
        </div>
    )
}