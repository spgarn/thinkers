import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { toast } from 'react-hot-toast'

const PointPage = ({ points }) => {

    const [code, setCode] = useState();
    const [error, setError] = useState();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (code.toLowerCase() === "Felwood".toLowerCase()) return toast.success(`SNYGGT!!! Extra poäng och dags att blanda en drink?.`, {
            icon: '🪃👏🟢',
            duration: 5000,
            style: {
                borderRadius: '12px',
                background: '#333',
                color: '#fff',
            },
        })
        setError("Fel svar, testa igen.")
    }




    return (
        <>
        <div className="points" style={{ marginBottom: '32px' }}>
        <span style={{ color: 'white', position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

<h1 style={{ flexWrap: 'nowrap' }}>
    GRATTIS!! Ni fick {points} poäng
</h1></span>
        </div>

            <div className="points" style={{ marginBottom: '32px' }}>
               

                <span style={{ color: 'white', position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <h1 style={{ flexWrap: 'nowrap' }}>
                        BONUS: Vilken ZON spelas i bakgrunden?
                    </h1></span>



            </div>
            <form>
                <Grid minWidth={'50vw'} item>
                    <TextField autoFocus onChange={(e) => setCode(e.target.value)} helperText={error} error={!!error} fullWidth label={`Skriv ditt svar här`} />
                </Grid>
                <Grid mt={'24px'} minWidth={'50vw'} display={'flex'} justifyContent={'center'} item>
                    <Button type="submit" onClick={handleSubmit} variant='contained'>SEND</Button>
                </Grid>
            </form >
        </>
    )
}

export default PointPage