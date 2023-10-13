import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import QRcode from 'react-qr-code'
import QRcode from 'qrcode.react'
import CancelIcon from '@mui/icons-material/Cancel';
export default function QrCode2() {
    const [inputData,setinputData]=useState("Create Your Own QR Code")
    const [qrValue,setQrValue]=useState("");
    const [url,setUrl]=useState("");

    // download function 
    const downloadQR = () => {
    
      // let downloadLink = document.createElement("a");
      // downloadLink.href = pngUrl;
      // downloadLink.download = "myqr.png";
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      // document.body.removeChild(downloadLink);
  };

    function handleInput(e)
    {
        setinputData(e.target.value)
    }
    function qrCode()
    {
        setQrValue(inputData)
        setinputData("")

        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
          .toDataURL("image/png")
           setUrl(pngUrl)
    }
    function clearInput()
    {
      setinputData("")
    }
  useEffect(()=>{
    
  },[qrValue])
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
        <QRcode value={qrValue} className='qr-code' id="myqr"/>
        </div>
        <div>
      
      <Button variant="contained"> <a target='_blank'
        href={url}
        style={{color:"white",textDecoration:"none"}}
        download
   
      >
        Download
      </a></Button>
      </div>
    </div>
  )
}
