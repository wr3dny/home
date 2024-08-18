import { history} from '../../consts/work'
import styles from './Work.module.css'



export const Work = ()=> {
    const sortedWorkplaces = [...history].sort((a,b) => b.id - a.id)

    return (
        <div className={styles.container}>
            <div className={styles.work}>{sortedWorkplaces.map((work)=> work.id)}</div>
        </div>
    )
}