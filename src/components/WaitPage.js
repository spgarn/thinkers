import React, { useState, useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import { TextField } from '@mui/material'


const WaitPage = ({ setStartCode }) => {

    const [code, setCode] = useState();
    const [error, setError] = useState();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (code === "6576") return setStartCode("6576")
        if (code === "5411") return setStartCode("5411")
        if (code === "1337") return setStartCode("1337")
        setError("wrong code, please try again")
    }
    const [time, setTime] = useState(300); // 300 seconds = 5 minutes

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
                        {/* {currentGift.gift.split('').map((letter, i) => {
                            if (i === 1) return <em key={i} className="planet left">{letter}</em>
                            if (i === currentGift.gift.length - 2) return <em key={i} className="planet right">{letter}</em>
                            return <em style={{ minWidth: '28px' }} key={i}>{letter}</em>
                        })} */}
                        Tiden tickar, tiden går. Undrar vilken kod du slår?

                    </h1>
                    

                </span>
                <span className='points' style={{color:"white"}}><h1 >{formatTime(time)}</h1></span>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
                <div className="snow"></div>
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