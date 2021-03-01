import styles from '../styles/components/ChallengeBox.module.css';
import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox(){

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

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
                            onClick={handleChallengeFailed}
                        >
                            Failed
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccededButton}
                            onClick={handleChallengeSucceded}
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