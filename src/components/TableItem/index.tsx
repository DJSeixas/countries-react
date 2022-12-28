
import { Link } from "react-router-dom";
import { Container, Img, Info } from "./styles"

export type ItemProps = {
    country: any;
}


const TableItem = ({ country }: ItemProps) => {
    return(
        <Container>
            <Link to={`/name/${country.name}`}>
            <Img>
                <img src={country.flags?.png} alt="flag" height={180}/>
            </Img>
            <Info>
                <h2>{country.name}</h2>
                <p><span>Population:</span> {country.population?.toLocaleString()}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
            </Info>
            </Link>
        </Container>
    )
}

export default TableItem