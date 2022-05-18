import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

const QuestionPage = ({ data, state, setPoints, points }) => {

    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (data.answer.toLowerCase() === input.toLowerCase()) {
            setPoints(previousState => new Set([...previousState, input]))
            setError('')
            localStorage.setItem('points', JSON.stringify([...points]));
            return
        }
        else setError('Fel svar, testa igen.')

    }




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
                    <TextField onChange={(e) => handleChange(e)} helperText={error} fullWidth label={`fråga ${data.state}`} />
                </Grid>
                <Grid mt={'24px'} minWidth={'50vw'} display={'flex'} justifyContent={'center'} item>
                    <Button type="submit" onClick={(e) => onSubmit(e)} variant='contained'>Skicka svar</Button>
                </Grid>
            </form>

        </Grid>

    )
}

export default QuestionPage