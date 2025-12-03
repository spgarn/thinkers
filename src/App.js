import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import TimeGate from './components/TimeGate';
import ClueGame from './components/ClueGame';

const theme = createTheme({
    spacing: 4,
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffd700',
        },
        secondary: {
            main: '#00ff88',
        },
        background: {
            default: '#0f0f23',
            paper: 'rgba(255, 255, 255, 0.05)',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Comfortaa", sans-serif',
        fontSize: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                    },
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
                    '*': {
                        margin: 0,
                        padding: 0,
                        boxSizing: 'border-box',
                    },
                    body: {
                        backgroundColor: '#0f0f23',
                        minHeight: '100vh',
                        overflowX: 'hidden',
                    },
                    html: {
                        scrollBehavior: 'smooth',
                    },
                }}
            />
            <TimeGate>
                <ClueGame />
            </TimeGate>
        </ThemeProvider>
    );
}

export default App;
