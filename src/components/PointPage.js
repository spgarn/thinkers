import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { toast } from 'react-hot-toast'

const PointPage = ({ points }) => {

    const [code, setCode] = useState();
    const [error, setError] = useState();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!code) return setError("Fel svar, testa igen.")
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "50px" }}>
            <div className="points" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px" }}>
                <h1>
                    GRATTIS!! Ni fick {points} poäng
                </h1>

            </div>
            <div>
                <h1 style={{ color: "blue" }}>
                    BONUS: Vilken ZON spelas i bakgrunden?
                </h1>

            </div>


            <form style={{ marginTop: "100px" }}>
                <Grid minWidth={'50vw'} item>
                    <TextField autoFocus onChange={(e) => setCode(e.target.value)} helperText={error} error={!!error} fullWidth label={`Skriv ditt svar här`} />
                </Grid>
                <Grid mt={'24px'} minWidth={'50vw'} display={'flex'} justifyContent={'center'} item>
                    <Button type="submit" onClick={handleSubmit} variant='contained'>SEND</Button>
                </Grid>
            </form >
        </div>
    )
}

export default PointPage