import React from "react";
import styles from "./block5.module.css"

const Block5 = () =>{
    return(
        <div className={styles.block4}>
            <div className={styles.girdContainer}>
            <div className={styles.girdItem}>
            <img src="./weloBlock4.png" alt="" className={styles.weloImg}></img>
            </div>
            <div className={`${styles.girdItem} rubik-regular-italic ${styles.text}`}>
            <p>Прокат велосипедов</p>
            <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды.
                 Как раз мы находимся в прекрасном парке!</p>
            </div>
            </div>
        </div>
    );
};

export default Block5;