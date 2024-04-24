import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { TextField } from '@mui/material'


const WaitPage = ({setStartCode}) => {

    const [code, setCode] = useState();
    const [error, setError] = useState();


    const handleSubmit = (e) => {
        console.log(code)
        e.preventDefault()
        if (code === "7174") return setStartCode("7174")
        setError("wrong code, please try again")
    }




    return (
        <>

            <div className="snowBackground" style={{ marginBottom: '32px' }}>

                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <span style={{ color: 'white', position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ flexWrap: 'nowrap' }}>
                        {/* {currentGift.gift.split('').map((letter, i) => {
                        if (i === 1) return <em key={i} className="planet left">{letter}</em>
                        if (i === currentGift.gift.length - 2) return <em key={i} className="planet right">{letter}</em>
                        return <em style={{ minWidth: '28px' }} key={i}>{letter}</em>
                    })} */}
                        Lite väl tidigt för en bärs? Kvällen förbereds fortfarande vänligen återkom lite senare.
                    </h1></span>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>


            </div>
            <form>
                <Grid minWidth={'50vw'} item>
                    <TextField autoFocus onChange={(e) => setCode(e.target.value)} helperText={error} error={!!error} fullWidth label={`Insert code to continue!`} />
                </Grid>
                <Grid mt={'24px'} minWidth={'50vw'} display={'flex'} justifyContent={'center'} item>
                    <Button type="submit" onClick={handleSubmit} variant='contained'>SEND</Button>
                </Grid>
            </form >
        </>
    )
}

export default WaitPage