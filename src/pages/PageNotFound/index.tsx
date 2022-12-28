
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const PageNotFound = () => {
    return(
        <Container>
            <Link to={"/"}>
            <BackButton />
            </Link>
            <p>Página não encontrada :(</p>
        </Container>
    )
}

export default PageNotFound