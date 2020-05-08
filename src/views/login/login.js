import React, {useState} from "react";
import {Typography} from "antd";
import loginStyle from "./loginStyle";
import {Form, Input, Button, Checkbox} from 'antd';
// import loginStyle from "./loginStyle";
const {Title} = Typography;

function Login() {
    return (
        <div align='center' style={loginStyle.container}>
            <div style={loginStyle.card}>
                <h1 style={loginStyle.title}>
                    Admin Login
                </h1>
                <div style={{width: "50%", alignItems: "center"}}>
                    <Form
                        name="basic"
                        initialValues={{remember: true}}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
