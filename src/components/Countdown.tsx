import styles from '../styles/components/Countdown.module.css';

import {useState, useEffect, useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const {startNewChallenge} = useContext(ChallengesContext);

    const [time,setTime] = useState(.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60);
    
    const [minuteL, minuteR] = String(minutes).padStart(2,'0').split('');
    const [secondL, secondR] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);

    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25*60);

    }

    useEffect(()=>{
        if (isActive && time > 0){
            countdownTimeout = setTimeout(()=>{
                setTime(time-1);
            }, 1000)
        }
        else if (isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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