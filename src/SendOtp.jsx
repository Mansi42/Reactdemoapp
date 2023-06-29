import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";
import "./navbar.css";

function SendOtp() {
  const [otp, setOtp] = useState("");
  let navigate = useNavigate();
  const changePathto = () => {
    let path = `/ConfirmPassword`;
    navigate(path);
  };

  return (
    <div className="otpClass">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <br></br>
      <Button>Send OTP</Button>
    </div>
  );
}
export default SendOtp;
