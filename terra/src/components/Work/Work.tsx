import { Button } from '../Button/Button';
import styles from './Work.module.css';
import { useState } from 'react';

export const Work = () => {
    const [isNew, setIsNew] = useState<string>('orange');

    const handleClick = () => {
        if (isNew === 'orange') {
            setIsNew('blue');
        } else {
            setIsNew('orange');
        }
    };

    return (
        <div className={styles.container}>
            <Button label='color' onClick={handleClick} color={isNew} />
        </div>
    );
};
