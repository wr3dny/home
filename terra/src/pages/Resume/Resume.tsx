import { DescriptionField } from '../../components/DescriptionField/DecriptionField';
import { Footer } from '../../components/Footer/Footer';
import { Work } from '../../components/Work/Work';
import { history, training, tech, skll } from '../../consts/resume';
import styles from './Resume.module.css';
import { useTranslation } from "react-i18next";
import { footerText } from '../../consts/text';
import { Training } from '../../components/Training/Training';
import { Skills, Tech } from '../../components/Skills/Skills';




export const Resume = () => {

    const { t } = useTranslation();

    const sortedWork = [...history].sort((a, b) => b.id - a.id);
    const sortedTraining = [...training].sort((a,b)=> b.id - a.id)
    const groupedByExperience = tech.reduce((acc: Record<number, string[]>, { lang, experience }) => {
        if (!acc[experience]) {
          acc[experience] = [];
        }
        acc[experience].push(lang);
        return acc;
      }, {});


    return (
        <div className={styles.resume}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.img} />
                    <div className={styles.contact}>Contact</div>
                    <div className={styles.skills}>
                        <Skills  skill='some skill'/>                        
                    </div>
                    <div className={styles.skills}>
      {Object.keys(groupedByExperience).map((exp) => (
        <Tech key={exp} experience={Number(exp)} langs={groupedByExperience[Number(exp)]} />
      ))}
    </div>
                </div>
                <div className={styles.description}>
                    <DescriptionField 
                    header="O mnie" 
                    text='Po kilkunastu latach pracy jako projektant konstrukcji budowlanych, zdecydowałem się rozpocząć nową ścieżkę kariery zawodowej. W czasie pracy zawodowej wykonywałem projekty jako:'
                    ulText1='jako część zespołu, w którym do moich zadań należało przede wszystkim skoordynowanie projektu z innymi branżami oraz zaplanowanie podziału prac pomiędzy członków mojego zepsołu'
                    ulText2='jako samodzielna "jednostka" odpowiedzialna za reazlizacje projektu od początku do końca'
                    text2='Obie formy często wymagały pracy pod presją czasu oraz podejmowania decyzji pozwalających na zbalansowanie wymogów bezpieczeństwa i ekonomii.'/>
                    </div>
                <div className={styles.work}>
                    {sortedWork.map((work) => (
                        <Work
                            key={work.id}
                            from={work.from}
                            to={work.to}
                            description={work.description}
                            position={t(work.position)}
                            company={t(work.company)}
                            addDesc1={work.addDesc1}
                            addDesc2={work.addDesc2}
                            addDesc3={work.addDesc3}

                        />
                    ))}
                </div>
                <div className={styles.training}>
                    {sortedTraining.map((training) => (
                        <Training
                            key={training.id}
                            dates={training.dates}
                            description={training.description}
                            name={t(training.name)}
                            school={t(training.school)}
                            hours={training.hours}
                        />
                    ))}
                </div>
                <div className={styles.footer}>
                    <Footer text={footerText} />
                </div>
            </div>
        </div>
    );
};
