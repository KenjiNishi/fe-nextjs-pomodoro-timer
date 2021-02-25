import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Challenges completed: </span>
            <span>YYY</span>
        </div>
    );
}