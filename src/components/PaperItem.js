import { Paper } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'




const PaperItem = ({ data, setState, points }) => {
    return (
        <Grid gap={'2rem'} justifyContent={'center'} container>{data?.map(item => <Grid key={item.state} width={'80px'} height={'80px'} item>
            <Paper onClick={() => setState(item.state)} style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', cursor: 'pointer',
                backgroundColor: [...points].includes(item.state) ? 'lightgreen' : 'lightgray'
            }}>{item.state}</Paper></Grid>)}</Grid >

    )
}

export default PaperItem