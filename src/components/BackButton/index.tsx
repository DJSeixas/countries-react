import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Container } from "./style"


const BackButton = () => {
    return(
        <Container>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </Container>
    )
}

export default BackButton