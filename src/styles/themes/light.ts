/* export const theme = {
    lightBg: 'hsl(0, 0%, 98%)',
    darkBg: 'hsl(207, 26%, 17%)',
    textLight: 'hsl(200, 15%, 8%)',
    inputLight: 'hsl(0, 0%, 52%)',
    elDark: 'hsl(209, 23%, 22%)',
    white: 'hsl(0, 0%, 100%)' 
} */

import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
    colors: {
        bgColor: 'hsl(0, 0%, 98%)',
        elem: 'hsl(0, 0%, 100%)',
        text: 'hsl(200, 15%, 8%)'
    }
}

export default light

/* 
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%) */