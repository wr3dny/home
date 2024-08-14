import styles from './Footer.module.css'

interface Props {
    text: string
}

export const Footer =({text}:Props)=> {
    return (
        <div className={styles.container}>
            {text}
        </div>
    )

}