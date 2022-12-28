
import { Container, Input } from "./styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react"
import { useAppDispatch } from "../../features/hooks"
import { 
    fetchAsyncCountriesSearch,
    clearFilteredCountries
} from "../../features/countries/countriesSlice"

const Search = () => {

    const [searchValue, setSearchValue] = useState("")
    const dispatch = useAppDispatch()

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key  === "Enter"){
            dispatch(fetchAsyncCountriesSearch(searchValue))
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        if(searchValue === ""){
            dispatch(clearFilteredCountries())
        }
    }
    
    return(
        <Container>
            <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            />
            <Input 
            value={searchValue} 
            placeholder="Search for a country..."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ></Input>
        </Container>
    )
}

export default Search