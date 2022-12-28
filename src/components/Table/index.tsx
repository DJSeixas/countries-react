import { Container } from "./styles"

import TableItem from "../TableItem"
import { useAppSelector } from "../../features/hooks"
import { getAllCountries, getFilterCountries } from "../../features/countries/countriesSlice"


const Table = () => {

    const countries = useAppSelector(getAllCountries)

    let filterCountries = useAppSelector(getFilterCountries)

    return(
        <Container>           
            {(  !filterCountries.length ?
                countries.map((country, index) => 
                (            
                    <TableItem key={index} country={country}/>
                ))  
                :
                filterCountries.map((country, index) => 
                (            
                    <TableItem key={index} country={country}/>
                ))      
            )}
        </Container>
    )
}

export default Table