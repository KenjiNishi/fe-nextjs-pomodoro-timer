export function ExperienceBar(){
    return(
        <div className="experience-bar">
            <span>0%</span>
            <div>
                <div style={{width: '50%'}}/>

                <span className='current-experience' style={{left:'50%'}}>
                    50%
                </span>
            </div>
            <span>100%</span>
        </div>
    )
}