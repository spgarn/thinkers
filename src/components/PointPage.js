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
        if (code.toLowerCase() === "Men in Black".toLowerCase()) {toast.success(`SNYGGT!!! Extra poäng och dags att blanda en drink?.`, {
            icon: '🪃👏🟢',
            duration: 5000,
            style: {
                borderRadius: '12px',
                background: '#333',
                color: '#fff',
            },
        })
        return setError("")
    }
        
        setError("Fel svar, testa igen.")
    }




    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "50px" }}>
            <div className="points" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "42px" }}>
                <h1>
                    Snyggt! Code Knäckers!
                </h1>

            </div>
            <div>
                <h1 style={{ color: "blue" }}>
                    BONUS: Vilken film är detta?
                </h1>

                <img style={{width:"400px"}} src="https://static.vecteezy.com/system/resources/previews/029/575/679/non_2x/men-letter-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg"></img>

            </div>


            <form>
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