import React, {Component} from "react";
import loginStyle from "./loginStyle";
import {Button, Checkbox, Form, Input, message, Modal, Row, Spin} from "antd";
import axios from "axios";
import Colors from "../../config/colors";
import {baseUrl} from "../../config/constants";
import {connect} from "react-redux";
import {loggedIn} from "../../redux/actions/login";
import {UserOutlined} from "@ant-design/icons";
import image from '../../assets/image.jpg'

const jwt = require('jsonwebtoken');

class Login extends Component {
    /******************************States**********************************/
    state = {
        email: "",
        password: "",
        token: "",
        validated: false,
        isLoading: false,
        data: {
            id: "",
            name: "",
            lastName: "",
            type: "",
            role: "",
            imageName: "",
            email: "",
            userName: "",
        },
    };
    /**************************Functions***********************************/
    validateCreds = () => {
        if (this.state.email === "" || this.state.password === "") {
            this.setState({validated: false});
        } else {
            this.setState({validated: true});
        }
    };

    warning(message) {
        Modal.error({
            title: "Error",
            content: message,
            style: {borderRadius: 32},
        });
    }

    storeToken = async (token) => {
        localStorage.setItem("token", token);
    };

    login = async () => {
        let type
        let body = {
            email: this.state.email,
            password: this.state.password,
        };
        this.setState({isLoading: true});
        await axios
            .post(baseUrl + "login", body, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
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
                    },
                });
                type = response.data.userData.type
                this.storeToken(this.state.token);
                this.setState({isLoading: false});
            })
            .then((response) => {
                console.log(type)
                if (type === 'admin'){
                    message.success('Successfully loggedIn, redirecting')
                    this.props.history.push("/dashboard");
                    this.props.isLogged(this.state.data);

                }
                else {
                    message.error('You have no access here, please login with the app')
                    localStorage.clear()
                }
            })
            .catch((error) => {
                console.log(error.response || error);
                if (error.code === 401) {
                    console.log("auth error");
                    this.warning(error.response.data);
                }
                this.warning('Something went wrong');
                this.setState({isLoading: false});
            });
    };

    componentWillMount = async () => {
        const token = localStorage.getItem('token');
        try {
            await jwt.verify(token, 'secret');
            console.log('token verified');
            this.props.history.push('/dashboard')
        } catch (e) {
            console.log(e.message)
        }
    }

    render() {
        return (
            <div align="center" style={loginStyle.container}>
                <div align={'center'} style={loginStyle.card}>
                    <div>
                        <img alt={'image'} src={image} style={{
                            minWidth: '40%',
                            maxWidth: '50%',
                        }}/>
                    </div>
                        <Spin spinning={this.state.isLoading}>
                            <div style={{width: "50%", alignItems: "center"}}>
                                <Form name="basic" initialValues={{remember: true}}>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {required: true, message: "Please input your email!"},
                                        ]}
                                    >
                                        <Input
                                            prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            onChange={(e) => {
                                                this.setState({email: e.target.value});
                                                this.validateCreds();
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {required: true, message: "Please input your password!"},
                                        ]}
                                    >
                                        <Input.Password
                                            onBlur={() => this.validateCreds()}
                                            onChange={(e) => {
                                                this.setState({password: e.target.value});
                                                this.validateCreds();
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item name="remember" valuePropName="checked">
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            disabled={!this.state.validated}
                                            loading={this.state.isLoading}
                                            onClick={() => this.login()}
                                            style={Object.assign(
                                                {},
                                                loginStyle.buttonStyle,
                                                this.state.validated
                                                    ? {backgroundColor: Colors.buttonColor}
                                                    : {backgroundColor: Colors.lightButtonColor}
                                            )}
                                            type="primary"
                                            htmlType="submit"
                                        >
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

const mapDispatchToProps = (dispatch) => {
    return {
        isLogged: (global) => {
            dispatch(loggedIn(global));
        },
    };
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        login: state.login,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
