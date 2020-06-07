import React, {Component} from "react";
import userStyle from "./userStyle";
import {baseUrl, Routes} from "../../config/constants";
import {List} from "antd";
import axios from 'axios'
import Navbar from "../../components/navBar/navbar";
import DrawerNav from "../../components/drawer/drawer";
import UserContainer from "../../components/userContainer/userContainer";
import UserModal from "../../components/userModal/userModal";

const jwt = require('jsonwebtoken');

class Users extends Component {
    state = {
        visible: false,
        modalVisible: false,
        users: [],
        userModalContent: {
            name: '',
            lastName: '',
            email: '',
            imageName: '',
            role: '',
            type: '',
        },
    };
    onOpen = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    getUsers = () => {
        axios.get(baseUrl + 'users').then(response => {
                console.log(response);
                this.setState({users: response.data})
            }
        );
    };
    openUserModal = (name, lastName, role, username, email, type,imageName) => {
        this.setState({
            userModalContent: {
                name,
                lastName,
                role,
                username,
                email,
                type,
                imageName

            },
        });
        this.setState({
            modalVisible: true
        })

    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        try {
            jwt.decode(token, 'secret')
        } catch (e) {
            console.log(e)
        }
        this.getUsers()

    }

    render() {
        return (
            <div style={userStyle.container}>
                <UserModal visible={this.state.modalVisible} content={this.state.userModalContent}/>
                <Navbar onPressDrawer={() => this.onOpen()}/>
                <DrawerNav
                    visible={this.state.visible}
                    onClose={() => this.onClose(false)}
                    content={Routes}
                />
                <List
                    style={{margin: 10}}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 3,
                    }}
                    dataSource={this.state.users}
                    renderItem={(item) => (
                        <List.Item>
                            <UserContainer
                                image={item.imageName}
                                onClick={(_) =>
                                    this.openUserModal(
                                        item.name,
                                        item.lastName,
                                        item.role,
                                        item.username,
                                        item.email,
                                        item.type,
                                    )
                                }
                                imageName={item.imageName}
                                name={item.name}
                                lastName={item.lastName}
                                role={item.role}
                                username={item.username}
                                date={item.date}
                                type={item.type}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Users;
