import React from "react";
import styles from "./block2.module.css"


const Block2 = () => {
    return (
        <div className={styles.girdContainer}>
            <div className={styles.girdItem}>
            <p className={`${styles.ht} rubik-regular-italic`}>Что мы предлагаем</p>
            <p className={styles.pt}>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда,
                 ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное
                  ТО велосипеда помогает избежать многих проблем и дорогого ремонта.
                    Все работы выполняем качественно и с душой. </p>
            </div>
            <div className={styles.girdItem}>
                <img src="./block2.png" alt="welo" className={styles.image} />
            </div>
        </div>
    );
};

export default Block2