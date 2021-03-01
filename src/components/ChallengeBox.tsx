import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    return(
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeNotActive}>
                <strong>Finish a cycle to receive challenges.</strong>
                <p>
                    <img src='icons/level-up.svg' alt='level-up'/>
                    To level up, complete the challenges!
                </p>
            </div>
        </div>
    )
}