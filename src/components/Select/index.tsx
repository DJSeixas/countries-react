import React, { useState, useEffect } from "react"
import { Container, SelectButton, Lista } from "./style"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from "../../features/hooks"
import { clearFilteredCountries, fetchAsyncCountriesSelect } from "../../features/countries/countriesSlice"

const Select = () => {

    const [ visible, setVisible ] = useState(false)
    const [ region, setRegion ] = useState("all")

    const dispatch = useAppDispatch()

    const handleClick = () => {
        setVisible(!visible)
    }
    
    const handleClickRegion = (e: React.MouseEvent<HTMLLIElement>) => {
        setRegion(e.currentTarget.innerText.toLowerCase())
        setVisible(!visible)
    }

    useEffect(() => {
        region === "all"
        ?
            dispatch(clearFilteredCountries())
        :
        dispatch(fetchAsyncCountriesSelect(region))
    }, [dispatch, region]);

    return(
        <Container>
            <SelectButton 
            onClick={handleClick}
            >
                Filter By Region
            <FontAwesomeIcon icon={faChevronDown} />
            </SelectButton>
            <Lista visible={visible}>
                <li onClick={handleClickRegion}>All</li>
                <li onClick={handleClickRegion}>Africa</li>
                <li onClick={handleClickRegion}>Americas</li>
                <li onClick={handleClickRegion}>Asia</li>
                <li onClick={handleClickRegion}>Europe</li>
                <li onClick={handleClickRegion}>Oceania</li>
            </Lista>
        </Container>
    )
}

export default Select