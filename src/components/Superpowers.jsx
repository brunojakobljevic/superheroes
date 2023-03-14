import ProgressBar from '../components/ProgressBar'

const Superpowers = ({superpowers}) => {

    let firstSkill = superpowers["detectiveSkills"];
    let secondSkill = superpowers["fightingSkills"];
    let thirdSkill = superpowers["money"];
    
    return(
        <table className="table-2">
            <tr>
                <td><i>Detective skills:</i></td>
                <td><ProgressBar skillNumber={firstSkill}/></td>
                <td>{firstSkill}/100</td>
            </tr>
            <tr>
                <td><i>Fighting skills:</i></td>
                <td><ProgressBar skillNumber={secondSkill}/></td>
                <td>{secondSkill}/100</td>
            </tr>
            <tr>
                <td><i>Money:</i></td>
                <td>
                    <ProgressBar skillNumber={thirdSkill}>
                        <tr>Click on the logo to switch superheroes(not functional yet)</tr>
                    </ProgressBar>
                </td>
                <td>{thirdSkill}/100</td>
            </tr>
        </table>
    )    
}

export default Superpowers