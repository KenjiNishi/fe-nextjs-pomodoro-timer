import styles from '../styles/components/Countdown.module.css';
import {useContext} from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown(){

    const  {minutes,
            seconds,
            hasFinished,
            isActive,
            resetCountdown,
            startCountdown
            } = useContext(CountdownContext);

    const [minuteL, minuteR] = String(minutes).padStart(2,'0').split('');
    const [secondL, secondR] = String(seconds).padStart(2,'0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteL}</span>
                    <span>{minuteR}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondL}</span>
                    <span>{secondR}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton} 
                >
                Cycle ended
                </button>   
            ):(
                <>
                {isActive?
                (
                    <button type="button"
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
                        onClick={resetCountdown}
                        >
                        Abandon
                    </button>
                )
                :
                (
                    <button type="button"
                        className={styles.countdownButton} 
                        onClick={startCountdown}
                    >
                        Start cycle!
                    </button>)
                }
                </>
            )
            }
        </div>
        
    )
}