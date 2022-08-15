import React from 'react'
import Alert from '@mui/material/Alert';

const Error = ({ type }) => {
    return (
        <>
            <Alert severity="error" style={{ marginTop: "10%", marginLeft: "20%", width: "40%" }}>{type}!</Alert>
        </>
    )
}

export default Error