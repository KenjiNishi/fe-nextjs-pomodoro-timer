import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/KenjiNishi.png" alt="ProfilePic"/>
            <div>
                <strong>UserName</strong>
                <p>
                    <img src='icons/level.svg' alt='levelImg'/>
                    Level XXX
                </p>
            </div>
        </div>
    )
}