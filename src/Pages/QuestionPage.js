import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

const QuestionPage = ({ data, setPoints, points, setState }) => {

    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const hour = date.getHours().toString()
        const minutes = date.getMinutes().toString()
        const seconds = date.getSeconds().toString()
        const time = hour + minutes + seconds
        console.log(data.state)
        if (data.state === 6) {
            const numberInput = input.replace(/[^\d]/g, '');
            const numberInputParsed = parseInt(numberInput); // ta bort allt som inte är en siffra och parsa till int för att ta bort eventuell 0:a i början (e.g 08:51:55 blir 85155)
            const hourMinuteInput = numberInput.length >= 5 ? numberInput.slice(0, -2) : numberInput;
            const hourMinutParsed = parseInt(hourMinuteInput);
            if (numberInputParsed === parseInt(time)) {
                setPoints(previousState => new Set([...previousState, data.state]))
                setError('')
                return
            } else if (hourMinutParsed === parseInt(hour + minutes)) {
                setError('Fel svar, men jäkligt nära!')
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
            <Grid item justifyContent={'center'} alignItems={'center'}>

                {data.img ?
                    <img style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={data.img} alt="norefer" />
                    : <Typography>
                        {data.question}
                    </Typography>}

            </Grid>

            <form>
                <Grid minWidth={'50vw'} item>
                    <TextField autoFocus onChange={(e) => handleChange(e)} helperText={error} error={!!error} fullWidth label={`fråga ${data.state}`} />
                </Grid>
                <Grid mt={'24px'} minWidth={'50vw'} display={'flex'} justifyContent={'center'} item>
                    <Button type="button" onClick={(e) => setState(0)} variant='outlined' sx={{ marginRight: '1rem' }}>Tillbaka</Button>
                    <Button type="submit" onClick={(e) => onSubmit(e)} variant='contained'>Skicka svar</Button>
                </Grid>
            </form>

        </Grid>

    )
}

export default QuestionPage