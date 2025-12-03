import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
`;

const shake = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`;

const TimeGate = ({ children }) => {
    const [isAllowed, setIsAllowed] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const checkTime = () => {
            // Get Swedish time (Europe/Stockholm)
            const now = new Date();
            const swedishTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Stockholm' }));
            const hours = swedishTime.getHours();
            const minutes = swedishTime.getMinutes();
            const seconds = swedishTime.getSeconds();

            setCurrentTime(
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            );

            // Calculate countdown to 16:00
            if (hours < 16) {
                const remainingHours = 15 - hours;
                const remainingMinutes = 59 - minutes;
                const remainingSeconds = 60 - seconds;
                setCountdown(`${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`);
            }

            // Allow access from 16:00 onwards
            setIsAllowed(hours >= 16);
        };

        checkTime();
        const interval = setInterval(checkTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (isAllowed) {
        return children;
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                padding: '20px',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Floating beer emojis background */}
            {[...Array(20)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        position: 'absolute',
                        fontSize: ['2rem', '3rem', '4rem'][i % 3],
                        opacity: 0.2,
                        animation: `${bounce} ${2 + (i % 3)}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    🍺
                </Box>
            ))}

            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
                    animation: `${shake} 0.5s ease-in-out infinite`,
                    mb: 4,
                }}
            >
                🍺🚫
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    color: '#ff6b6b',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(255, 107, 107, 0.5)',
                    mb: 2,
                    animation: `${pulse} 2s ease-in-out infinite`,
                }}
            >
                Too early for BEERS
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    color: '#feca57',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(254, 202, 87, 0.5)',
                    mb: 4,
                }}
            >
                and Clue Solving????
            </Typography>

            <Box
                sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: { xs: '20px', sm: '30px' },
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <Typography
                    sx={{
                        color: '#74b9ff',
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                        mb: 1,
                    }}
                >
                    Swedish Time: {currentTime}
                </Typography>

                <Typography
                    sx={{
                        color: '#a29bfe',
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                        fontWeight: 'bold',
                    }}
                >
                    Come back at 16:00! ⏰
                </Typography>

                {countdown && (
                    <Typography
                        sx={{
                            color: '#fd79a8',
                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            mt: 2,
                            fontFamily: 'monospace',
                        }}
                    >
                        {countdown}
                    </Typography>
                )}
            </Box>

            <Typography
                sx={{
                    color: 'rgba(255, 255, 255, 0.4)',
                    fontSize: '1rem',
                    mt: 4,
                    fontStyle: 'italic',
                }}
            >
                Patience, young grasshopper... 🦗
            </Typography>
        </Box>
    );
};

export default TimeGate;
