import React, { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import { TextField } from '@mui/material'


const WaitPage = ({ setStartCode }) => {

    const [code, setCode] = useState();
    const [error, setError] = useState();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (code === "1173") return setStartCode("1173")
        setError("wrong code, please try again")
    }
    const [time, setTime] = useState(800); // 300 seconds = 5 minutes

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerId);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };




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

                       Ett sätt att ta reda på koden är att läsa sjukt noggrant. Trevligt va?
                       

                    </h1>


                </span>
                <span className='points' style={{ color: "white" }}><h1 >{formatTime(time)}</h1></span>
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