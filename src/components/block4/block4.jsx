import React from 'react';
import styles from './block4.module.css';

const Block4 = () => {
    return (
        <div className={styles.block4}>
        <div className={styles.girdContainer}>
            <div className={`${styles.girdItem} ${styles.item1}`} >
            <hr className={styles.lineTop} />
            <p className={`${styles.text} rubik-regular-italic`}>Готовое ТО</p>
            </div>
            <div className={`${styles.girdItem} ${styles.item2}`}>
            <hr className={styles.lineTop} />
            <p className={`${styles.text} rubik-regular-italic`}> выравнивание<br /> колес</p>
            </div>
            <div className={`${styles.girdItem} ${styles.item3}`}>
            <hr className={styles.lineTop} />
            <p className={`${styles.text} rubik-regular-italic`}>Настройка<br /> переключателей</p>
            </div>

        </div>
        </div>
    );
};

export default Block4;