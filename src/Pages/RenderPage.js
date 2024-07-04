import React, { useEffect, useState } from 'react'
import PaperItem from '../components/PaperItem'
import { data } from '../data/data'
import { gifts } from '../data/gifts'
import ContentPage from './ContentPage'
import { Paper, Grid, Typography } from '@mui/material'
import WinItem from '../components/WinItem'
import WaitPage from '../components/WaitPage'
import PointsPage from '../components/PointPage'
import BeerPage from '../components/BeerPage'



const RenderPage = () => {

    const [state, setState] = useState(0)
    const [points, setPoints] = useState(new Set())
    const [date, setDate] = useState('')
    const [startCode, setStartCode] = useState("")
    const [fakeLoad, setFakeLoad] = useState(false)



    useEffect(() => {
        const p = JSON.parse(localStorage.getItem('pointsGame'))
        setDate(JSON.parse(localStorage.getItem('dateGame')))
        setStartCode(JSON.parse(localStorage.getItem('startCode')))
        p?.map(item => points.add(item))
        setFakeLoad(true)
    }, [])

    useEffect(() => {
        localStorage.setItem('pointsGame', JSON.stringify([...points]));
        if (!localStorage.getItem('dateGame') && points.size > 15) { localStorage.setItem('dateGame', JSON.stringify("Grattis! Nu ska vi HUSAS av nya UTMANINGAR!")); }
        setDate(JSON.parse(localStorage.getItem('dateGame')))
    }, [points])

    useEffect(() => {
        if (startCode === "1173") localStorage.setItem('startCode', JSON.stringify("1173"))
    }, [startCode])

    const getPoints = (code) => {
        if (code === "1173") return 1
    }


    const currentTime = new Date()
    const dateWhenStart = new Date("July 4, 2024 16:00:00")


    if (currentTime < dateWhenStart) return <BeerPage state={state}></BeerPage>
    if (startCode !== "1173" ) { return <WaitPage setStartCode={setStartCode} state={state}></WaitPage> } else {
        return <PointsPage points={getPoints(startCode)}></PointsPage>
    }

    return (
        <>
            <Grid container display={'flex'} mb={'24px'} alignItems={'center'} justifyContent={'center'}>
                <Paper style={{ padding: '24px', backgroundColor: 'lightblue' }}><Typography>Poäng: {points?.size || 0}</Typography></Paper>
            </Grid>
            {state === 0 ? <PaperItem points={points} data={data} setState={setState} /> : <ContentPage state={state} points={points} setPoints={setPoints} setState={setState} data={data?.find(item => item.state === state)} />}
            {points.size >= 16 && <WinItem gifts={gifts} setState={setState} points={points}></WinItem>}
            {date && (
                <span>
                    <h2 className='small'> {date.toString()}  </h2>
                </span>)
            }
        </>
    )
}

export default RenderPage