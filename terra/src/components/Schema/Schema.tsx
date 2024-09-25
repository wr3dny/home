import gameData from '../../consts/shema_config.json'
import styles from './Schema.module.css'

export const Schema = () => {
    return (
        <div>
            <table className={styles.table}>
            <thead>
                <tr>
                <th>Game</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(gameData).map(([key, value]) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}