import RenderPage from "./Pages/RenderPage";
import Card from './components/Card'
import Page from "./components/Page";
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';

const theme = createTheme({
    spacing: 2,
    palette: {
        primary: {
            main: '#6f12cd',
        },
    },
    typography: {
        fontFamily: 'Comfortaa',
        fontSize: 20,
    },
    components: {
        MuiCard: {
            defaultProps: {
                elevation: 5,
            },

        },
        MuiPaper: {
            defaultProps: {
                elevation: 10,
            }
        },

        MuiButton: {
            styleOverrides: {
                contained: {
                    minWidth: '64px',
                    minHeight: '36px',
                    padding: '8px 16px',
                    lineHeight: 0.5,
                },
            },
        },
    },
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    body: { backgroundColor: '#dae9cc5c' },
                }}
            />
            <Page>
                <Card>
                    <RenderPage />
                </Card>
            </Page>
        </ThemeProvider>

    );
}

export default App;
