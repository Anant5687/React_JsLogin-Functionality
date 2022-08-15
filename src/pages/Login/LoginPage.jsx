import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import './Login.css'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Login = () => {
    const navigate = useNavigate()
    const selector = useSelector(state => state.user.userInfo)
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const onChangeHandeler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onClickHandelr = () => {
        if (data.email.trim() === "" || data.password.trim() === "") {
            alert("All Fields Required")
        } else if (data.email !== selector.email || data.password !== selector.password) {
            setLoading(false)
            setError(true)
        } else {
            console.log(data, "SuccessFull data")
            setSuccess(true)
            setLoading(false)
            setError(false)
        }
    }


    return (
        <>
            {success ? navigate('https://hoblist.com/api/movieList')
                :
                <>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} className="login__bg">
                            </Grid>
                            <Grid item xs={8}>
                                {loading && <Loading type="Loading please wait" />}
                                {error && <Error type="CHeck your credintals" />}

                                <TextField id="outlined-basic" name="email" value={data.email} label="Email" onChange={onChangeHandeler} variant="outlined" style={{ marginTop: "10%", marginLeft: "20%", width: "40%" }} />

                                <TextField label="Password" name='password' value={data.password} variant="outlined" onChange={onChangeHandeler} style={{ marginTop: "3%", marginLeft: "20%", width: "40%" }} />

                                <Button variant="contained" style={{ marginTop: "3%", marginLeft: "20%", width: "40%" }} onClick={onClickHandelr}>

                                    Login
                                </Button>

                                <p style={{ marginTop: "5%", marginLeft: "20%", width: "40%" }}>Do not have any account?
                                    <Link to='/signup'>
                                        <small style={{ color: "blue", marginLeft: "2%" }}>SignUp</small>
                                    </Link>
                                </p>
                            </Grid>
                        </Grid>
                    </Box>
                </>}
        </>
    )
}

export default Login