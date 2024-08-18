import styles from './Work.module.css'

interface Props {
    possition:string,
    company:string,
    description: string,
    from: string,
    to: string
}

export const Work = ({ possition, company, from, to, description }: Props) => {
    return (
      <div className={styles.group}>
        <div className={styles.date}>
          {from}{to && ` - ${to}`}
        </div>
        <div className={styles.place}>
            <div className={styles.position}>{possition}</div>
            <div className={styles.description}>{description}</div>
        </div>
      </div>
    );
  };