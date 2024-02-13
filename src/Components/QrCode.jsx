import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Snackbar, Button } from "@mui/material";
import Alert from "@mui/material/Alert";

import QRcode from "qrcode.react";
import CancelIcon from "@mui/icons-material/Cancel";
export default function QrCode2() {
  const [open, setOpen] = useState(false);
  const [inputData, setinputData] = useState("Create Your Own QR Code");
  const [qrValue, setQrValue] = useState("");
  const [url, setUrl] = useState("");

  const downloadQR = () => {};

  function handleInput(e) {
    setinputData(e.target.value);
  }
  function qrCode() {
    setQrValue(inputData);
    setinputData("");

    const canvas = document.getElementById("myqr");
    const pngUrl = canvas.toDataURL("image/png");
    setUrl(pngUrl);
  }
  function clearInput() {
    setinputData("");
  }
  function copyUrl() {
    setOpen(true);
    navigator.clipboard.writeText(inputData);
  }
  function handleSnackbarClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }
  useEffect(() => {}, [qrValue]);
  return (
    <div className="flex">
      <h1 className="styleHeading">
        URL TO <span>QR CODE</span>
      </h1>
      <div>
        <TextField
          id="outlined-basic"
          label="URL"
          value={inputData}
          variant="outlined"
          onChange={handleInput}
          className="input-width"
          autoComplete="off"
        ></TextField>
        <CancelIcon onClick={clearInput} className="clearInput" />
      </div>
      <div style={{ display: "flex", gap: "120px", margin: "15px 0",flexWrap:"wrap",justifyContent:"center" }}>
        <Button variant="contained" sx={{ width: "200px" }} onClick={copyUrl}>
          Copy URL
        </Button>
        <Button variant="contained" onClick={qrCode} sx={{ width: "200px" }}>
          GENRRATE QR CODE
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            URL Copied Successfully!
          </Alert>
        </Snackbar>
      </div>
      <div>
        <QRcode value={qrValue} className="qr-code" id="myqr" />
      </div>
      <div>
        <Button variant="contained">
          {" "}
          <a
            target="_blank"
            href={url}
            style={{ color: "white", textDecoration: "none" }}
            download
          >
            Download
          </a>
        </Button>
      </div>
    </div>
  );
}