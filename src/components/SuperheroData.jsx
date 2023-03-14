import Superpowers from '../components/Superpowers'

const SuperheroData = ({about, children}) => {
    return(
        <>
            <table className="table-2">
                <tr><h3><i>Address:</i> {about["address"]}</h3></tr>
                <tr><h3><i>Contact:</i> {about["contact"]}</h3></tr>
            </table>
            <Superpowers superpowers={about["superpowers"]}/>
            {children}
        </>
    )
}

export default SuperheroData