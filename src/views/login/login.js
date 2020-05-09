import React, {useEffect, useState} from "react";
import loginStyle from "./loginStyle";
import {Form, Input, Button, Checkbox} from 'antd';
import axios from 'axios'
import Colors from "../../config/colors";
import {baseUrl} from "../../config/constants";

function Login() {
    /******************************States**********************************/
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState(null);
    const [data, setData] = useState({
        id: '',
        name: '',
        lastName: '',
        type: '',
        role: '',
        imageName: '',
        email: '',
        userName: '',
    });
    /**************************Functions***********************************/
    const validateCreds = () => {
        if (email === '' || password === '') {
            setValidated(false)
        } else {
            setValidated(true)
        }
    };

    const login = async () => {
            let body = {
                email: email,
                password: password,
            };
            setIsLoading(true);
            // login Validation :
            axios
                .post(baseUrl + 'login', body, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log(response)
                    setToken(response.data.token);
                    setData({
                        id: response.data.userData.id,
                        name: response.data.userData.name,
                        lastName: response.data.userData.lastName,
                        type: response.data.userData.type,
                        role: response.data.userData.role,
                        imageName: response.data.userData.imageName,
                        email: response.data.userData.email,
                        userName: response.data.userData.username,
                    });
                    console.log(data)
                })
                // .then(() => {
                //     // store.dispatch(loggedIn(this.state.data));
                //     this.props.isLogged(this.state.data);
                // })
                // .then(() => {
                //     this.storeToken();
                // })
                // .then(() => {
                //     this.setState({isLoading: false});
                // })
                // .then(() => {
                //     this.props.navigation.navigate('home');
                // })
                // .then(() => {
                //     this.setState({
                //         email: '',
                //         password: '',
                //     });
                //     this.email.clear();
                //     this.password.clear();
                // })
                .catch(error => {
                    console.log(JSON.stringify(error));
                    if (error) {

                    }
                    setIsLoading(false);
                });
        }
    ;
    /*************************Effects*********************************************/
    useEffect(() => {
        validateCreds()
    }, [email, password]);
    /*************************End Effects************************************************/
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
                            rules={[{required: true, message: 'Please input your email!'}]}
                        >
                            <Input onChange={(e) => {
                                setEmail(e.target.value)
                            }}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button loading={isLoading} onClick={() => login()} style={
                                Object.assign({}, loginStyle.buttonStyle, validated ? {backgroundColor: Colors.buttonColor} : {backgroundColor: Colors.lightButtonColor})
                            } type="primary" htmlType="submit">
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
