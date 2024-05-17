import React, { useEffect, useState } from 'react'
import PaperItem from '../components/PaperItem'
import { data } from '../data/data'
import { gifts } from '../data/gifts'
import ContentPage from './ContentPage'
import { Paper, Grid, Typography } from '@mui/material'
import WinItem from '../components/WinItem'
import WaitPage from '../components/WaitPage'
import PointsPage from '../components/PointPage'



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
        if (startCode === "6576") localStorage.setItem('startCode', JSON.stringify("6576"))
        if (startCode === "1337") localStorage.setItem('startCode', JSON.stringify("1337"))
        if (startCode === "5411") localStorage.setItem('startCode', JSON.stringify("5411"))
    }, [startCode])

    const getPoints = (code) => {
        if (code === "1337") return 1
        if (code === "6576") return 5
        if (code === "5411") return 10
    }


    const currentTime = new Date()
    const dateWhenStart = new Date("October 17, 2023 16:30:00")


    if (currentTime < dateWhenStart) return <WaitPage state={state}></WaitPage>
    if (startCode !== "7174" && startCode !== "6576" && startCode !== "5411") { return <WaitPage setStartCode={setStartCode} state={state}></WaitPage> } else {
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