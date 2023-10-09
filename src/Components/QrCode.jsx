import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import QRcode from 'react-qr-code'
import CancelIcon from '@mui/icons-material/Cancel';
export default function QrCode2() {
    const [inputData,setinputData]=useState("Create Your Own QR Code")
    const [qrValue,setQrValue]=useState("");

    function handleInput(e)
    {
        setinputData(e.target.value)
    }
    function qrCode()
    {
        setQrValue(inputData)
        setinputData("")
    }
    function clearInput()
    {
      setinputData("")
    }

  return (
    <div className='flex'>
      <h1 className='styleHeading'>URL TO <span>QR CODE</span></h1>
    <div>
      <TextField id="outlined-basic" label="URL" value={inputData}  variant="outlined" onChange={handleInput} className='input-width' autoComplete="off"></TextField>
      <CancelIcon onClick={clearInput} className='clearInput'/>
      </div>
      <div>
      <Button variant="contained" onClick={qrCode}>GENRRATE QR CODE</Button>
      </div>
      <div>
        <QRcode value={qrValue} className='qr-code' />
        </div>
    </div>
  )
}
