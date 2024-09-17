import styles from './Skills.module.css'

interface Props { 
    name: string,
    experience: string
    skill: string
}

export const Skills = ({name, experience, skill}:Props) =>{
    return (
        <div className={styles.container}>
            <div className={styles.tech}>
            <h3>Umiejętności</h3>        
                {name} - {experience}
            </div>
            <div className={styles.lang}>
            <h3>Języki obce</h3> 
                {name} - {experience}
            </div>
            <div className={styles.skill}>
            <h3>Kompetencje</h3> 
                <ul>
                    <li>{skill}</li>
                </ul>
            </div>
        </div>
    )
}