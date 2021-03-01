import styles from '../styles/components/Profile.module.css'

import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/KenjiNishi.png" alt="ProfilePic"/>
            <div>
                <strong>UserName</strong>
                <p>
                    <img src='icons/level.svg' alt='levelImg'/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}