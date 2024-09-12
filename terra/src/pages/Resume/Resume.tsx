import { DescriptionField } from '../../components/DescriptionField/DecriptionField';
import { Footer } from '../../components/Footer/Footer';
import { Work } from '../../components/Work/Work';
import { history, learning } from '../../consts/work';
import styles from './Resume.module.css';
import { useTranslation } from "react-i18next";
import { footerText } from '../../consts/text';
import { Learning } from '../../components/Learning/Learning';

export const Resume = () => {

    const { t } = useTranslation();

    const sortedWork = [...history].sort((a, b) => b.id - a.id);
    const sortedLearning = [...learning].sort((a,b)=> b.id - a.id)


    return (
        <div className={styles.resume}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.img} />
                    <div className={styles.contact}>Contact</div>
                    {/* <div className={styles.skills}>
                        {skills.map((skill)=>{
                            
                        })}
                    </div> */}
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
                        />
                    ))}
                </div>
                <div className={styles.learning}>
                    {sortedLearning.map((learning) => (
                        <Learning
                            key={learning.id}
                            dates={learning.dates}
                            description={learning.description}
                            name={t(learning.name)}
                            school={t(learning.school)}
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
