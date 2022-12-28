
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import { Container, Switcher, Title } from './styles'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { getTheme, setTheme } from '../../features/theme/themeSlice'

const Header = () =>{

    const dispatch = useAppDispatch()
    const theme = useAppSelector(getTheme)

    const handleClick = () => {
        dispatch(setTheme())
        console.log(theme)
    }

    return (
        <Container>
            <Title>Where in the world?</Title>
            <Switcher>
            <FontAwesomeIcon 
            onClick={handleClick}
            icon={faMoon} />
                Dark mode
            </Switcher>
        </Container>
    )
} 

export default Header