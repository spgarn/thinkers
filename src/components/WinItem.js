import React from 'react'
import { Paper, Grid, Typography } from '@mui/material'


const WinItem = ({ setState, gifts }) => {



    return (
        <Grid container display={'flex'} mt={'50px'} alignItems={'end'} justifyContent={'center'} gap={'2rem'}>
            {gifts.length >= 1 && gifts.map(gift => <Paper onClick={() => setState(gift.state)} key={gift.state} style={{ padding: '16px', backgroundColor: 'bisque', cursor: 'pointer' }}><Typography>{gift.state}</Typography></Paper>)}
        </Grid>
    )
}

export default WinItem