import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import WinPage from '../components/WinPage'
import { toast } from 'react-hot-toast'

const QuestionPage = ({ data, setPoints, points, setState, state }) => {

    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        // const date = new Date();
        // const hour = date.getHours().toString()
        // const minutes = date.getMinutes().toString()
        // const seconds = date.getSeconds().toString()
        // const time = hour + minutes + seconds
        // if (data.state === 6) {
        //     const numberInput = input.replace(/[^\d]/g, '');
        //     const numberInputParsed = parseInt(numberInput); // ta bort allt som inte är en siffra och parsa till int för att ta bort eventuell 0:a i början (e.g 08:51:55 blir 85155)
        //     const hourMinuteInput = numberInput.length >= 5 ? numberInput.slice(0, -2) : numberInput;
        //     const hourMinutParsed = parseInt(hourMinuteInput);
        //     if (numberInputParsed === parseInt(time)) {
        //         setPoints(previousState => new Set([...previousState, data.state]))
        //         setError('')
        //         return
        //     } else if (hourMinutParsed === parseInt(hour + minutes)) {
        //         setError('Fel svar, men jäkligt nära!')
        //     }
        //     else {
        //         setError('Fel svar, testa igen.')
        //     }
        // } else if (data.answer.map(a => a.toLowerCase()).includes(input.toLowerCase())) {
        if (data.answer.map(a => a.toLowerCase()).includes(input.toLowerCase())) {
            setPoints(previousState => new Set([...previousState, data.state]))
            setError('')
            toast.success(`Snyggt!! Det var rätt och du har nu fått poäng från fråga ${state}.`, {
                icon: '🪃👏🟢',
                duration: 4000,
                style: {
                    borderRadius: '12px',
                    background: '#333',
                    color: '#fff',
                },
            })
            setState(0)
            return
        }
        else {
            console.log('test3')
            setError('Fel svar, testa igen.')
        }

    }

    useEffect(() => {
        localStorage.setItem('points', JSON.stringify([...points]));
    }, [points])

    const audioUrl = data?.audio && "https://www.youtube.com/embed/" + data.audio + "?autoplay=1"



    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <div onClick={() => setState(0)} className="icon">
                <div className="arrow"></div>
            </div>
            {
                typeof state === 'string' ? <WinPage state={state}></WinPage>
                    : < Grid minWidth={'50vw'} minHeight={'50vh'} container gap={'2rem'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
                        <Grid item justifyContent={'center'} alignItems={'center'}>

                            {data?.img &&
                                <img style={{ width: '40%', minWidth: '250px', marginLeft: 'auto', position: 'relative', marginRight: 'auto', display: 'block' }} src={data?.img} alt="norefer" />}
                            {data?.audio && <iframe width="0" height="0" frameborder="0" src={audioUrl} title="Omnotron Heroic 10 man by Mekanik - Priest PoV" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
                            {data?.question && <Typography textAlign={'center'}>{data?.question}</Typography>}

                        </Grid>

                        <form>
                            <Grid minWidth={'50vw'} item>
                                <TextField autoFocus onChange={(e) => handleChange(e)} helperText={error} error={!!error} fullWidth label={`fråga ${data?.state}`} />
                            </Grid>

                            <Grid mt={'24px'} minWidth={'50vw'} display={'flex'} justifyContent={'center'} item>
                                <Button type="submit" onClick={(e) => onSubmit(e)} variant='contained'>Skicka svar</Button>
                            </Grid>
                        </form >

                    </Grid >
            }
        </>
    )
}

export default QuestionPage