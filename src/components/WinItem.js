import React from 'react'
import { Paper, Grid, Typography } from '@mui/material'


const WinItem = ({ points, setState, gifts }) => {

    const winnings = []


    const roundedPoints = points.size / 2
    let i = 1
    while (roundedPoints >= i) {
        winnings.push(gifts[i - 1])
        i++
    }





    return (
        <Grid container display={'flex'} mt={'50px'} alignItems={'end'} justifyContent={'center'} gap={'2rem'}>
            {winnings.length > 0 && winnings.map(winning => <Paper onClick={() => setState(winning.state)} key={winning.state} style={{ padding: '16px', backgroundColor: 'bisque', cursor: 'pointer' }}><Typography>{winning.state}</Typography></Paper>)}
        </Grid>
    )
}

export default WinItem