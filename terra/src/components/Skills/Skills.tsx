import styles from './Skills.module.css'

interface SkillsProp { 
    skill: string
}

export const Skills = ({skill}:SkillsProp) =>{
    return (
        <div className={styles.container}>
            <div className={styles.skill}>
            <h3>Kompetencje</h3> 
                <ul>
                    <li>{skill}</li>
                </ul>
            </div>
        </div>
    )
}

interface TechProp { 
    langs: string[]
    experience: number
}

export const Tech = ({ experience, langs }: TechProp) => {
    return (
      <div className={styles.container}>
        <div className={styles.tech}>
          <h3>Umiejętności</h3>
          <p>Experience Level: {experience} year(s)</p>
          <ul>
            {langs.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

interface LangProp { 
    lang: string
    experience: number
}



export const Lang = ({lang, experience}:LangProp) =>{
    return (
        <div className={styles.container}>
            <div className={styles.tech}>
            <h3>Umiejętności</h3>   
            <p>{experience}</p>  
            <ul>
                <li>{lang}</li>    
            </ul>   
                
            </div>

        </div>
    )
}