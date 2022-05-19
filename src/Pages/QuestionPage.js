import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

const QuestionPage = ({ data, setPoints, points }) => {

    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const hour = new Date().getHours().toString()
        const minutes = new Date().getMinutes().toString()
        const seconds = new Date().getSeconds().toString()
        const time = hour + minutes + seconds
        console.log(data.state)
        if (data.state === 6 && input === time) {
            setPoints(previousState => new Set([...previousState, data.state]))
            setError('')
            return
        }
        if (data.answer.toLowerCase() === input.toLowerCase()) {
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