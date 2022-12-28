import 'styled-components';


declare module 'styled-components' {
    export interface DefaultTheme{

        colors: {
            bgColor: string,
            elem: string,
            text: string       
        }

        /* lightBg: string,
        darkBg: string,
        textLight: string,
        inputLight: string,
        elDark: string,
        white: string,  */
    }
}