import styles from './Button.module.css';

interface Props  {
    label: string,
    onClick?: (() => void),
    color?: string
}

export const Button = ({ label, onClick, color = '' }: Props) => {
    const classname = `${styles.button} ${styles[color]}`;
    
    return (
        <div className={classname} onClick={onClick}>{label}</div>
    );
};
