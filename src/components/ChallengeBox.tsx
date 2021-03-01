import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const hasActiveChallenge = true;
    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge? (
                <div className={styles.challengeActive}>
                    <header>Reward: CHALLENGE_REWARD xp</header>
                    <main>
                        <img src="icons/body.svg"/>
                        <strong>CHALLENGE_NAME</strong>
                        <p>CHALLENGE_DESCRIPTION</p>
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