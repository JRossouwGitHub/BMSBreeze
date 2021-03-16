import React from 'react'
import '../css/style.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ScrollToTop from '../components/ScrollToTop'

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#0094FF',
          contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#0094FF'
        },
    },
});

const LayoutProvider = (props) => {
    return (
        <div className="container">
            <ThemeProvider theme={theme}>
                <ScrollToTop>
                    {props.children}
                </ScrollToTop>
            </ThemeProvider>
        </div>
    )
}

export default LayoutProvider
