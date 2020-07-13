import React, {Component} from "react";
import {baseUrl, Routes} from "../../config/constants";
import {List} from "antd";
import axios from 'axios'
import UserContainer from "../../components/userContainer/userContainer";
import UserModal from "../../components/userModal/userModal";
import LayoutPage from "../layout/layout";
import {loggedIn} from "../../redux/actions/login";
import {WIDTH} from "../../redux/actions/width";
import {connect} from "react-redux";

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
    openUserModal = (name, lastName, role, username, email, type, imageName) => {
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
            <LayoutPage content={Routes}>
                <UserModal visible={this.state.modalVisible} content={this.state.userModalContent}/>
                <div style={{marginLeft: this.props.width.width > 576 ? 200 : 0, marginTop: 50}}>
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
            </LayoutPage>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isLogged: (global) => {
            dispatch(loggedIn(global));
        },
        widthListener: (global) => {
            dispatch(WIDTH(global));
        }
    };
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        login: state.login,
        width: state.width
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
