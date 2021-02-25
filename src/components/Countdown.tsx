import styles from '../styles/components/Countdown.module.css';

import {useState, useEffect} from 'react';

export function Countdown(){
    const [time,setTime] = useState(0.5 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60);
    
    const [minuteL, minuteR] = String(minutes).padStart(2,'0').split('');
    const [secondL, secondR] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setActive(true);

    }

    useEffect(()=>{
        if (active && time > 0){
            setTimeout(()=>{
                setTime(time-1);
            }, 1000)
        }
        if (time === 0){
            setActive(false);
        }
    }, [active, time])

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

            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                Begin cycle!
            </button>
        </div>
        
    )
}