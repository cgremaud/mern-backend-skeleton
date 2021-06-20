//this is the root react component
import React from 'react'
import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'
//Wrapping in ThemeProvider gives all child components access to Material UI theme
//wrapping  in BrowserRouter enables front end routing
//then App renders MainRouter which . . .
const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
//hot(module) enables live reloading
export default hot(module) (App)