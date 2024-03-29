import React, { useEffect, useState } from 'react'
import PaperItem from '../components/PaperItem'
import { data } from '../data/data'
import { gifts } from '../data/gifts'
import ContentPage from './ContentPage'
import { Paper, Grid, Typography } from '@mui/material'
import WinItem from '../components/WinItem'
import WaitPage from '../components/WaitPage'



const RenderPage = () => {

    const [state, setState] = useState(0)
    const [points, setPoints] = useState(new Set())
    const [date, setDate] = useState('')
    const [fakeLoad, setFakeLoad] = useState(false)



    useEffect(() => {
        const p = JSON.parse(localStorage.getItem('pointsGame'))
        setDate(JSON.parse(localStorage.getItem('dateGame')))
        p?.map(item => points.add(item))
        setFakeLoad(true)
    }, [])

    useEffect(() => {
        localStorage.setItem('pointsGame', JSON.stringify([...points]));
        if (!localStorage.getItem('dateGame') && points.size > 0) { localStorage.setItem('dateGame', JSON.stringify("Rör er mot hallarna av David och leta efter GRÄNDEN vid det gamla gatuköket som precis bommat igen.")); }
        setDate(JSON.parse(localStorage.getItem('dateGame')))
    }, [points])


    const currentTime = new Date()
    const dateWhenStart = new Date("October 17, 2023 16:30:00")


    if(currentTime < dateWhenStart)return <WaitPage state={state}></WaitPage>


    return (
        <>
            <Grid container display={'flex'} mb={'24px'} alignItems={'center'} justifyContent={'center'}>
                <Paper style={{ padding: '24px', backgroundColor: 'lightblue' }}><Typography>Poäng: {points?.size || 0}</Typography></Paper>
            </Grid>
            {state === 0 ? <PaperItem points={points} data={data} setState={setState} /> : <ContentPage state={state} points={points} setPoints={setPoints} setState={setState} data={data?.find(item => item.state === state)} />}
            {points.size >= 1 && <WinItem gifts={gifts} setState={setState} points={points}></WinItem>}
            {date && (
                <span>
                    <h2 className='small'> {date.toString()}  </h2>
                </span>)
            }
        </>
    )
}

export default RenderPage