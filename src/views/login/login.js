import React, {Component} from "react";
import loginStyle from "./loginStyle";
import {Form, Input, Button, Checkbox, Spin, Modal} from 'antd';
import axios from 'axios'
import Colors from "../../config/colors";
import {baseUrl} from "../../config/constants";

class Login extends Component {
    /******************************States**********************************/
    state = {
        email: '',
        password: '',
        token: '',
        validated: false,
        isLoading: false,
        data: {
            id: '',
            name: '',
            lastName: '',
            type: '',
            role: '',
            imageName: '',
            email: '',
            userName: '',
        }
    };
    /**************************Functions***********************************/
    validateCreds = () => {
        if (this.state.email === '' || this.state.password === '') {
            this.setState({validated: false})
        } else {
            this.setState({validated: true})
        }
    };

    warning(message) {
        Modal.error({
            title: 'Error',
            content: message,
            style: {borderRadius: 32}
        });
    }

    storeToken = async (token) => {
        localStorage.setItem('token', token)
    };

    login = async () => {
        let body = {
            email: this.state.email,
            password: this.state.password,
        };
        this.setState({isLoading: true});
        await axios
            .post(baseUrl + 'login', body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log(response);
                this.setState({
                    token: response.data.token,
                    data: {
                        id: response.data.userData.id,
                        name: response.data.userData.name,
                        lastName: response.data.userData.lastName,
                        type: response.data.userData.type,
                        role: response.data.userData.role,
                        imageName: response.data.userData.imageName,
                        email: response.data.userData.email,
                        userName: response.data.userData.username,
                    }
                });
                this.storeToken(this.state.token)
            })
            .catch(error => {
                console.log(error.response);
                if (error.code === 401) {
                    console.log('auth error')
                }
                this.warning(error.response.data);
                this.setState({isLoading: false});
            });
    }
    ;

    /*************************Effects*********************************************/
//     useEffect(
//
// () => {
//     validateCreds();
// }
//
// ,
// [email, password];
// )

    /*************************End Effects************************************************/
    render() {


        return (
            <div align='center' style={loginStyle.container}>
                <div style={loginStyle.card}>
                    <h1 style={loginStyle.title}>
                        Admin Login
                    </h1>
                    <Spin spinning={this.state.isLoading}>
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
                                        this.setState({email: e.target.value})
                                    }}/>
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{required: true, message: 'Please input your password!'}]}
                                >
                                    <Input.Password onBlur={() => this.validateCreds()} onChange={(e) => {
                                        this.setState({password: e.target.value})
                                    }}/>
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <Button loading={this.state.isLoading} onClick={() => this.login()} style={
                                        Object.assign({}, loginStyle.buttonStyle, this.state.validated ? {backgroundColor: Colors.buttonColor} : {backgroundColor: Colors.lightButtonColor})
                                    } type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Spin>
                </div>
            </div>
        );
    }
}

export default Login;
