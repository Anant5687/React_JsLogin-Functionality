import React from 'react'
import Alert from '@mui/material/Alert';

const Loading = ({type}) => {
  return (
    <>
    <Alert severity="info" style={{marginTop: "10%", marginLeft: "20%", width: "40%"}}>{type}!</Alert>
    </>
  )
}

export default Loading;