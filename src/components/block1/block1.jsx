import React from "react";
import styles from './Block1.module.css'


const Block1 = () => {
    return (
        <div className={styles.block1}>
        <div className={styles.girdContainer}>
            <div className={`${styles.girdItem} ${styles.textItem}`}>
                <p className={`${styles.h} rubik-regular-italic`}>Веломастерская “Велозар”</p>
                <p className={`${styles.p}`}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды</p>
            </div>
            
            <img src='./dragon.png' alt="" className={`${styles.girdItem} ${styles.dragon}`} />
        </div>
        </div>
        
    );
};


export default Block1