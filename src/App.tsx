
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Home from './pages/Home';
import Header from './components/Header';
import Detail from './pages/Detail';
import PageNotFound from './pages/PageNotFound'
import { useAppSelector } from './features/hooks';
import { getTheme } from './features/theme/themeSlice';



const App = () => {

    const theme = useAppSelector(getTheme)

    const currentTheme = theme.theme === 'light' ? light : dark

    return (
    <ThemeProvider theme={currentTheme}>
    <GlobalStyles />
    <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/name/:name" element={<Detail />} />
    <Route path='*' element={<PageNotFound />} />
    </Routes>
    </Router>
    </ThemeProvider>
    )
}

export default App