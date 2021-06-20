//defines the material ui theme 
//defaults to /core? Shouldn't use /styles maybe?
//these theme vars will be available to all components b/c app is wrapped in ThemeProvider
import { createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primmary: {
            light: '#5c67a3',
            main: '#3f4771',
            dark: '#2e355b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c60055',
            contrastText: '#000',
        },
        openTitle: '#3f4771',
        protectedTitle: pink['400'], //so we import pink just to only use it here?
        type: 'light'
    }
})

export default theme