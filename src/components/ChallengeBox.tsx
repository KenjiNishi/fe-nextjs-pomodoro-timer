import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';
import {useContext} from 'react';

export function ChallengeBox(){

    const {activeChallenge} = useContext(ChallengesContext);

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge? (
                <div className={styles.challengeActive}>
                    <header>Reward: {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>New challenge!</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Failed
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccededButton}
                        >
                            Completed
                        </button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeNotActive}>
                    <strong>Finish a cycle to receive challenges.</strong>
                    <p>
                        <img src='icons/level-up.svg' alt='level-up'/>
                        To level up, complete the challenges!
                    </p>
                </div>
            )}
        </div>
    )
}