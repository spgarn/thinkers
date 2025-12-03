import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const fall = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
`;

const colors = [
    '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff',
    '#5f27cd', '#00d2d3', '#ff9f43', '#10ac84', '#ee5a24',
];

const Confetti = () => {
    const confettiPieces = [...Array(100)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 3}s`,
        color: colors[i % colors.length],
        size: 8 + Math.random() * 12,
        shape: ['square', 'circle', 'rectangle'][i % 3],
    }));

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden',
                zIndex: 1000,
            }}
        >
            {confettiPieces.map((piece) => (
                <Box
                    key={piece.id}
                    sx={{
                        position: 'absolute',
                        left: piece.left,
                        top: '-20px',
                        width: piece.shape === 'rectangle' ? piece.size * 0.5 : piece.size,
                        height: piece.size,
                        backgroundColor: piece.color,
                        borderRadius: piece.shape === 'circle' ? '50%' : '2px',
                        animation: `${fall} ${piece.duration} linear infinite`,
                        animationDelay: piece.delay,
                    }}
                />
            ))}
        </Box>
    );
};

export default Confetti;
