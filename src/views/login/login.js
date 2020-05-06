import React, { useState } from "react";
import { Typography } from "antd";
import loginStyle from "./loginStyle";
// import loginStyle from "./loginStyle";
const { Title } = Typography;

function Login() {
  return (
    <div align='center' style={loginStyle.container}>
      <Typography>
        <Title orientation="center" style={loginStyle.title}>
          Admin Login
        </Title>
      </Typography>
    </div>
  );
}
export default Login;
