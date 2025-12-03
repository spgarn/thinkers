import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, LinearProgress } from '@mui/material';
import { keyframes } from '@emotion/react';
import Confetti from './Confetti';

/*
 * ========================================
 *   🔍 Hello there, curious developer! 🔍
 * ========================================
 *
 *   If you're reading this, you're either:
 *   - Fredde trying to cheat 🦊
 *   - Dennis trying to cheat 🦝
 *   - Some other sneaky person 🐍
 *
 *   The answer you seek is below...
 *   But where's the fun in that?
 *
 *   Go solve the clues like a normal person! 😤
 *
 *   ...fine, here's a hint: Think OPPOSITE! 🔄
 *
 *   PS: We see you in the console logs 👀
 * ========================================
 */

// Clue configuration - each clue reveals part of the answer
// ANSWER: The opposite of "Fox in a Box" (escape room)
const CLUES = [
    {
        id: 1,
        hint: "🦊 What's the sneaky animal that hides in dens and stars in escape rooms?",
        subHint: "Think orange, fluffy tail, says 'what does the ___ say?'",
        answerWord: "FOX",
        acceptedAnswers: ["fox", "räv", "foxen", "räven"],
    },
    {
        id: 2,
        hint: "📦 Where do you put things to store them? Cardboard, square, you can escape from it...",
        subHint: "It rhymes with 'socks' and 'locks'",
        answerWord: "BOX",
        acceptedAnswers: ["box", "låda", "boxen", "lådan", "kub", "cube"],
    },
    {
        id: 3,
        hint: "🔄 Now flip it! What's the OPPOSITE of 'Fox in a Box'? 🤔",
        subHint: "If FOX → ? and BOX → ? ... What animal hunts the fox? Where's the opposite of 'in'?",
        answerWord: "FINAL",
        acceptedAnswers: [
            "hound out", "hound outside",
            "dog out", "dog outside",
            "hund ute", "hund utanför",
            "hunter outside", "jägare ute",
            "cat outside", "katt ute",
            // Add more accepted variations as needed
        ],
    },
];

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(2deg); }
  50% { transform: translateY(-20px) rotate(0deg); }
  75% { transform: translateY(-10px) rotate(-2deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
`;

const ClueGame = () => {
    const [currentClue, setCurrentClue] = useState(0);
    const [answer, setAnswer] = useState('');
    const [isWrong, setIsWrong] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [solvedClues, setSolvedClues] = useState([]);

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('clueGameProgress');
        if (saved) {
            const { clue, solved } = JSON.parse(saved);
            setCurrentClue(clue);
            setSolvedClues(solved);
            if (clue >= CLUES.length) {
                setCompleted(true);
            }
        }
    }, []);

    // Save progress
    useEffect(() => {
        localStorage.setItem('clueGameProgress', JSON.stringify({
            clue: currentClue,
            solved: solvedClues,
        }));
    }, [currentClue, solvedClues]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentClueData = CLUES[currentClue];
        const isCorrect = currentClueData.acceptedAnswers.some(
            accepted => answer.toLowerCase().trim() === accepted.toLowerCase()
        );

        if (isCorrect) {
            setSolvedClues([...solvedClues, currentClueData.answerWord]);

            if (currentClue + 1 >= CLUES.length) {
                setCompleted(true);
            } else {
                setCurrentClue(currentClue + 1);
            }
            setAnswer('');
            setShowHint(false);
            setIsWrong(false);
        } else {
            setIsWrong(true);
            setTimeout(() => setIsWrong(false), 600);
        }
    };

    const resetGame = () => {
        setCurrentClue(0);
        setSolvedClues([]);
        setCompleted(false);
        setAnswer('');
        localStorage.removeItem('clueGameProgress');
    };

    // Victory screen
    if (completed) {
        return (
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b4e 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '20px',
                }}
            >
                <Confetti />

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
                        animation: `${float} 3s ease-in-out infinite`,
                        mb: 2,
                    }}
                >
                    🎉🏆🎉
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        color: '#ffd700',
                        fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                        fontWeight: 'bold',
                        textShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
                        textAlign: 'center',
                        mb: 2,
                    }}
                >
                    YOU SOLVED IT!
                </Typography>

                <Box
                    sx={{
                        background: 'rgba(255, 215, 0, 0.1)',
                        borderRadius: '20px',
                        padding: { xs: '20px', sm: '40px' },
                        border: '2px solid #ffd700',
                        animation: `${glow} 2s ease-in-out infinite`,
                        textAlign: 'center',
                        maxWidth: '90vw',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#fff',
                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            mb: 2,
                        }}
                    >
                        The answer was:
                    </Typography>
                    <Typography
                        sx={{
                            color: '#00ff88',
                            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                            fontWeight: 'bold',
                            textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                        }}
                    >
                        🦊➡️🐕 + 📦➡️🌳
                    </Typography>
                    <Typography
                        sx={{
                            color: '#a29bfe',
                            fontSize: { xs: '1.5rem', sm: '2rem' },
                            mt: 2,
                            fontStyle: 'italic',
                        }}
                    >
                        "Opposite of Fox in a Box"
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        color: '#74b9ff',
                        fontSize: { xs: '1.2rem', sm: '1.5rem' },
                        mt: 4,
                        textAlign: 'center',
                    }}
                >
                    Now go enjoy your beers! 🍻
                </Typography>

                <Button
                    onClick={resetGame}
                    variant="outlined"
                    sx={{
                        mt: 4,
                        color: '#ff6b6b',
                        borderColor: '#ff6b6b',
                        '&:hover': {
                            borderColor: '#ff6b6b',
                            background: 'rgba(255, 107, 107, 0.1)',
                        },
                    }}
                >
                    Play Again?
                </Button>
            </Box>
        );
    }

    const clue = CLUES[currentClue];
    const progress = (currentClue / CLUES.length) * 100;

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b4e 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: { xs: '10px', sm: '20px' },
            }}
        >
            {/* Sparkle effects */}
            {[...Array(15)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        background: '#ffd700',
                        borderRadius: '50%',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `${sparkle} ${2 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}

            {/* Header */}
            <Box sx={{ width: '100%', maxWidth: '600px', mb: 4, mt: 2 }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: '#ffd700',
                        textAlign: 'center',
                        fontSize: { xs: '1.8rem', sm: '2.5rem' },
                        textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                        mb: 2,
                    }}
                >
                    🔍 CLUE SOLVER 🔍
                </Typography>

                {/* Progress bar */}
                <Box sx={{ px: 2 }}>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                                background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
                                borderRadius: 5,
                            },
                        }}
                    />
                    <Typography
                        sx={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            textAlign: 'center',
                            mt: 1,
                            fontSize: '0.9rem',
                        }}
                    >
                        Clue {currentClue + 1} of {CLUES.length}
                    </Typography>
                </Box>
            </Box>

            {/* Solved clues display */}
            {solvedClues.length > 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        mb: 3,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {solvedClues.map((word, i) => (
                        <Box
                            key={i}
                            sx={{
                                background: 'rgba(0, 255, 136, 0.2)',
                                border: '1px solid #00ff88',
                                borderRadius: '10px',
                                padding: '8px 16px',
                                animation: `${slideIn} 0.5s ease-out`,
                            }}
                        >
                            <Typography sx={{ color: '#00ff88', fontWeight: 'bold' }}>
                                ✓ {word}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}

            {/* Current clue card */}
            <Box
                sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: { xs: '20px', sm: '40px' },
                    maxWidth: '90vw',
                    width: '500px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    animation: isWrong ? `${shake} 0.6s ease-in-out` : `${slideIn} 0.5s ease-out`,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: '#fff',
                        fontSize: { xs: '1.2rem', sm: '1.5rem' },
                        textAlign: 'center',
                        mb: 3,
                        lineHeight: 1.6,
                    }}
                >
                    {clue.hint}
                </Typography>

                {showHint && (
                    <Box
                        sx={{
                            background: 'rgba(255, 215, 0, 0.1)',
                            borderRadius: '10px',
                            padding: '15px',
                            mb: 3,
                            border: '1px dashed rgba(255, 215, 0, 0.5)',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#feca57',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                textAlign: 'center',
                                fontStyle: 'italic',
                            }}
                        >
                            💡 {clue.subHint}
                        </Typography>
                    </Box>
                )}

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Type your answer..."
                        error={isWrong}
                        helperText={isWrong ? "🚫 Nope! Try again..." : ""}
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                color: '#fff',
                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                '& fieldset': {
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffd700',
                                },
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'rgba(255, 255, 255, 0.4)',
                            },
                            '& .MuiFormHelperText-root': {
                                color: '#ff6b6b',
                                fontSize: '1rem',
                            },
                        }}
                    />

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
                                color: '#000',
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                padding: { xs: '10px 30px', sm: '12px 40px' },
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #00d4ff, #00ff88)',
                                },
                            }}
                        >
                            SUBMIT 🚀
                        </Button>

                        {!showHint && (
                            <Button
                                onClick={() => setShowHint(true)}
                                variant="outlined"
                                sx={{
                                    borderColor: '#feca57',
                                    color: '#feca57',
                                    '&:hover': {
                                        borderColor: '#feca57',
                                        background: 'rgba(254, 202, 87, 0.1)',
                                    },
                                }}
                            >
                                Need a hint? 🤔
                            </Button>
                        )}
                    </Box>
                </form>
            </Box>

            {/* Fun footer */}
            <Typography
                sx={{
                    color: 'rgba(255, 255, 255, 0.3)',
                    fontSize: '0.9rem',
                    mt: 4,
                    textAlign: 'center',
                }}
            >
                🍺 Solve all clues to unlock the secret! 🍺
            </Typography>
        </Box>
    );
};

export default ClueGame;
