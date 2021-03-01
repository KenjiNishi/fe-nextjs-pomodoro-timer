import {createContext, useState, ReactNode} from 'react';
import challenges from '../challenges.json';

interface challengeInterface{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengesContextData{
    level : number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge : challengeInterface;
    levelUp: ()=> void;
    startNewChallenge: ()=> void;
}
interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children} : ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp(){
        setLevel(level+1)
    }
    
    function startNewChallenge(){
        const randomIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomIndex]
        setActiveChallenge(challenge);

    }

    return(
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                startNewChallenge,
                levelUp
            }
        }>
            {children}
        </ChallengesContext.Provider>
    )
}