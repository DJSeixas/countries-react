import { useEffect } from "react"
import { Container } from "./styles";

import Search from "../../components/Search";
import Select from "../../components/Select";
import Table from "../../components/Table";


import { useAppDispatch } from "../../features/hooks";
import { fetchAsyncCountries } from "../../features/countries/countriesSlice";


function Home() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAsyncCountries())
    }, [dispatch]);

    return (
        <Container>
            <Search />
            <Select />
            <Table />
        </Container>
    )
}

export default Home