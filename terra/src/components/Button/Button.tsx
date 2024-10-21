import classNames from 'classnames';
import styles from './Button.module.css';

interface Props  {
    label: string,
    typeOf: "Navbar"
    onClick?: (() => void),
    color?: string
}

export const Button = ({ label, typeOf, onClick, color = '' }: Props) => {
    
    return (
        <div className={classNames(styles[typeOf], styles[color])} onClick={onClick}>{label}</div>
    );
};
