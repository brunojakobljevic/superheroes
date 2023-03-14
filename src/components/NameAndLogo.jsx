import SuperheroData from '../components/SuperheroData'

import batmanLogo from "../assets/batman.png"
import captainAmericaLogo from "../assets/captainAmerica.png"
import deadpoolLogp from "../assets/deadpool.png"
import supermanLogo from "../assets/superman.png"

import data from "../assets/data.json"

const NameAndLogo = ({name}) => {

    let superhero = data[name];

    return(
        <table className="table-1">
            <tr><h1>{name.toUpperCase()}</h1></tr>
            <tr><img src={batmanLogo} className="logo"/></tr>
            <tr><h3><i>Real name:</i> {superhero["realName"]}</h3></tr>
            <SuperheroData about={superhero["about"]}>
                <tr>Click on the logo to switch Superheroes(not functional yet)</tr>
            </SuperheroData>
        </table>
    )    
}

export default NameAndLogo