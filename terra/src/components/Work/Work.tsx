import styles from './Work.module.css'

export const Work = ()=> {
    return (
        <div className={styles.container}>
            <div className={styles.dates}>from to</div>
            <div className={styles.work}>work</div>
        </div>
    )
}