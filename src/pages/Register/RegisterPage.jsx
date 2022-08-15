import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading';
import './Register.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { storingUserInfo } from '../../Slice/userData';


const RegisterPage = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false)

    const onChangeHandeler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onClickHandelr = (i) => {
        setLoading(true)
        if (data.name.trim() === "" || data.email.trim() === "" || data.password.trim() === "") {
            alert("All Fields Required")
            setLoading(false)
        } else {
            dispatch(storingUserInfo(i))
            console.log(i, "value of i")
            setLoading(false)
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} className="login__bg">
                    </Grid>
                    <Grid item xs={8}>
                        {loading && <Loading type="Loading please wait" />}

                        <TextField id="outlined-basic" name="name" value={data.name} label="Name" onChange={onChangeHandeler} variant="outlined" style={{ marginTop: "10%", marginLeft: "20%", width: "40%" }} />

                        <TextField id="outlined-basic" name="email" value={data.email} label="Email" onChange={onChangeHandeler} variant="outlined" style={{ marginTop: "3%", marginLeft: "20%", width: "40%" }} />

                        <TextField label="Password" name='password' value={data.password} variant="outlined" onChange={onChangeHandeler} style={{ marginTop: "3%", marginLeft: "20%", width: "40%" }} />

                        <Button variant="contained" style={{ marginTop: "3%", marginLeft: "20%", width: "40%" }} onClick={() => onClickHandelr(data)}>
                            Register
                        </Button>

                        <p style={{ marginTop: "5%", marginLeft: "20%", width: "40%" }}>Do not have any account?
                            <Link to='/'>
                                <small style={{ color: "blue", marginLeft: "2%" }}>Login</small>
                            </Link>
                        </p>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default RegisterPage