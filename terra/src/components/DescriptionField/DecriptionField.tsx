import styles from './DescriptionField.module.css'
import CheckIcon from '@mui/icons-material/Check';

interface Props {
    header: string,
    text: string,
    ulText1?: string
    ulText2?: string
    text2?: string
}

export const DescriptionField = ({header, text, ulText1, ulText2, text2 }:Props) =>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>{header}</div>
            <div className={styles.text}>{text}</div>
            <ul className={styles.ul}>
            <li className={styles.li}>
                    <CheckIcon className={styles.icon} />{ulText1}</li>
                <li className={styles.li}><CheckIcon className={styles.icon} />{ulText2}
                </li>
            </ul>
            <div className={styles.className}>{text2}</div>
        </div>
    )
}