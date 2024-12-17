import { useEffect, useState } from 'react';
import { Button, Grid, Box, Typography, TextField } from '@mui/material';
import { toast } from 'react-hot-toast';

const quest = [
    { id: 1, question: "En annan form av NAP. Inte en powernap", answer: ["kidnap", "kidnappning", "kidnappa"], error: false },
    { id: 2, question: "Dass kan också användas som adjektiv. Detta adjektiv + vår förtäring", answer: ["dassbärs", "dassigbärs", "dassebärs", "sunkbärs"], error: false },
    { id: 3, question: "*ÖVER* eller *DEN BÄSTA* hjälper oss fram", answer: ["UBER", "über", "taxi"], error: false },
    { id: 4, question: "Ett annat ord för att leta efter något.(engelska) + IC", answer: ["scandic", "hotell", "skandic", "hotellet"], error: false },
    { id: 5, question: "Vem går sämst i djungeln?", answer: ["Gorillan", "Gorilla", "gorillan", "gorilla"], error: false },
    { id: 6, question: "Glass, stor, tv-serie", answer: ["Magnum"], error: false },
    { id: 7, question: "Ett annat ord för naken", answer: ["bar"], error: false },
    { id: 8, question: "Här kommer vi att kunna besöka: Choco Mountain, Kalimari Desert och Sherbet Land", answer: ["Mario kart 64", "mario kart", "mariokart", "super mario kart", "kart64"], error: false }
];

const InputGame = () => {
    const [points, setPoints] = useState(new Set());
    const [questions, setQuestions] = useState(quest);
    const [code, setCode] = useState({});
    const [firstLoad, setFirstLoad] = useState('');
    const [firstSubmit, setFirstSubmit] = useState(true);

    // Load points from localStorage on mount
    useEffect(() => {
        const storedPoints = JSON.parse(localStorage.getItem('pointsGame'));
        storedPoints?.map(r => points.add(r))
        setFirstLoad(false)
    }, []);

    // Update points in localStorage whenever points change
    useEffect(() => {
        localStorage.setItem('pointsGame', JSON.stringify([...points]));
    }, [points]);


    // Handles input changes for each TextField
    const handleChange = (e, id) => {
        const value = e.target.value;
        setCode(prev => ({ ...prev, [id]: value }));
    };

    // Handles the submit logic
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedQuestions = questions.map(q => ({
            ...q,
            error: !q.answer.some(resp => resp.toLowerCase() === code[q.id]?.toLowerCase())
        }));

        // Get the correct answers' IDs
        const correctAnswers = questions
            .filter(q => q.answer.some(resp => resp.toLowerCase() === code[q.id]?.toLowerCase()))
            .map(q => q.id); // Extract only the IDs

        if (correctAnswers.length > 0) {
            setPoints(prevPoints => new Set([...prevPoints, ...correctAnswers])); // Batch update
        }

        setFirstSubmit(false);
        setQuestions(updatedQuestions);

        const hasErrors = updatedQuestions.some(q => q.error);
        if (hasErrors) {
            return;
        }

        toast.success(`SNYGGT!!! Nu har du en hint om kvällens agenda!`, {
            icon: '🪃👏🟢',
            duration: 5000,
            style: {
                borderRadius: '12px',
                background: '#333',
                color: '#fff',
            },
        });

    };


    if(firstLoad) return null

    if (points.size === 8) return
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h2">GRATTIS! Du har nu alla poäng!</Typography>
    </Box>

    return (
        <form onSubmit={handleSubmit}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item gap="36px" mt="24px" width="50vw" display="flex" flexDirection="column">
                    <Typography variant="h4">Poäng: {points.size || "0"}/8</Typography>
                    <Typography variant="h4">Dagens agenda!</Typography>
                    {questions.map((q) => (
                        <Box
                            key={q.id}
                            border={!firstSubmit && code[q.id] && !q.error && "5px dashed green"}
                            borderRadius="12px"
                            padding="12px"
                        >
                            <Typography variant="h6">{q.question}</Typography>
                            <TextField
                                value={code[q.id] || ''}
                                onChange={(e) => handleChange(e, q.id)}
                                error={q.error}
                                helperText={q.error ? "Fel svar, försök igen." : ''}
                                fullWidth
                                label="Skriv ditt svar här"
                            />
                        </Box>
                    ))}
                    <Box display="flex" justifyContent="center" mt="24px">
                        <Button type="submit" variant="contained">SEND</Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default InputGame;



