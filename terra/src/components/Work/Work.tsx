import styles from './Work.module.css';
import classNames from 'classnames';

interface Props {
    position: string;
    company: string;
    from: string;
    to: string;
    description: string;
    addDesc1?: string;
    addDesc2?: string;
    addDesc3?: string;
}

export const Work = ({ position, company, from, to, description, addDesc1 = "", addDesc2 = "", addDesc3 = "" }: Props) => {
    return (
        <div className={styles.group}>
            <div className={styles.date}>
                {from}
                {to && ` - ${to}`}
            </div>
            <div className={styles.place}>
                <div className={styles.position}>{position}</div>
                <div className={styles.company}>{company}</div>
                <div className={styles.description}>{description}</div>
                <div>
            <ul className={classNames({ 'visible': addDesc1 || addDesc2 || addDesc3, 'hidden': !addDesc1 && !addDesc2 && !addDesc3 })}>
              {addDesc1 && <li>{addDesc1}</li>}
              {addDesc2 && <li>{addDesc2}</li>}
              {addDesc3 && <li>{addDesc3}</li>}
            </ul>
          </div>
            </div>
        </div>
    );
};
