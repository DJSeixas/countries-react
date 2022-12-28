
import { Container } from "./styles"

import { Link, useParams } from "react-router-dom"

import BackButton from "../../components/BackButton"
import DetailContent from "../../components/DetailContent"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { useEffect } from "react"
import { 
    fetchAsyncCountriesDetail, 
    getSelectedCountry,
    removeSelectedCountry 
} from "../../features/countries/countriesSlice"

export type myParams = {
    name: string
}

const Detail = () => {
    const { name } = useParams<keyof myParams>() as myParams;
    const dispatch = useAppDispatch();
    const data = useAppSelector(getSelectedCountry)

    useEffect(() => {
        dispatch(fetchAsyncCountriesDetail(name))
        return () => {
            dispatch(removeSelectedCountry())
        }
    },[dispatch, name])

    return(
        <Container>
            <Link to={"/"}>
            <BackButton />
            </Link>
            <DetailContent countryDetail={data}/>
        </Container>
    )
}

export default Detail