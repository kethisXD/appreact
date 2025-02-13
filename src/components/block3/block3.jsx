import React from 'react';
import Styles from './block3.module.css';


const Block3 = () => {
    return (
        <div className={Styles.block3}>
        <div className={Styles.textCenter}> 
        <p>
            Приехав к нам однажды, многие наши клиенты становятся постоянными,
             а часть из них даже друзьями.
        </p>
        <p>А также в нашей мастерской можно отремонтировать электросамокат
                 и электровелосипед.
        </p>
        </div>
        </div>
    );
};

export default Block3;