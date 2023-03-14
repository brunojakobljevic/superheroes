const ProgressBar = ({skillNumber}) => {
    
    return (
            <progress className="skill" max="100" value={skillNumber}>{skillNumber}</progress>
    )
}

export default ProgressBar