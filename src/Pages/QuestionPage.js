import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

const QuestionPage = ({ data, setPoints, points }) => {

    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const hour = date.getHours().toString()
        const minutes = date.getMinutes().toString()
        const time = hour + minutes
        console.log(data.state)
        if (data.state === 6) {
            const timeInput = parseInt(input.replace(/[^\d]/g, '')); // ta bort allt som inte är en siffra och parsa till int för att ta bort eventuell 0:a i början (e.g 0851 blir 851)
            if (timeInput === parseInt(time)) {
                setPoints(previousState => new Set([...previousState, data.state]))
                setError('')
                return
            }
        } else if (data.answer.map(a => a.toLowerCase()).includes(input.toLowerCase())) {
            setPoints(previousState => new Set([...previousState, data.state]))
            setError('')
            return
        }
        else setError('Fel svar, testa igen.')

    }

    useEffect(() => {
        localStorage.setItem('points', JSON.stringify([...points]));
    }, [points])





    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (

        <Grid minWidth={'50vw'} minHeight={'50vh'} container flexDirection={'column'} gap={'2rem'} justifyContent={'center'} alignItems={'center'}>
            <Grid item>

                <Typography>
                    {data.question}
                </Typography>
            </Grid>

            <form>
                <Grid minWidth={'50vw'} item>
                    <TextField autoFocus onChange={(e) => handleChange(e)} helperText={error} error={!!error} fullWidth label={`fråga ${data.state}`} />
                </Grid>
                <Grid mt={'24px'} minWidth={'50vw'} display={'flex'} justifyContent={'center'} item>
                    <Button type="submit" onClick={(e) => onSubmit(e)} variant='contained'>Skicka svar</Button>
                </Grid>
            </form>

        </Grid>

    )
}

export default QuestionPage