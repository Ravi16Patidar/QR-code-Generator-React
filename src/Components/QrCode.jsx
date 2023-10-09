import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import QRcode from 'react-qr-code'

export default function QrCode2() {
    const [inputData,setinputData]=useState("Create Your QR Code")
    const [qrValue,setQrValue]=useState("");

    function handleInput(e)
    {
        setinputData(e.target.value)
    }
    function qrCode()
    {
        setQrValue(inputData)
    }

  return (
    <div className='flex'>
    <div>
      <TextField id="outlined-basic" label="Input" variant="outlined" onChange={handleInput} className='input-width'/>
      </div>
      <div>
      <Button variant="contained" onClick={qrCode}>Generate QrCode</Button>
      </div>
      <div>
        <QRcode value={qrValue} className='qr-code' />
        </div>
    </div>
  )
}
