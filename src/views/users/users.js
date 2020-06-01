import React, {Component} from "react";
import userStyle from "./userStyle";
import { baseUrl, Routes} from "../../config/constants";
import {List} from "antd";
import axios from 'axios'
import Navbar from "../../components/navBar/navbar";
import DrawerNav from "../../components/drawer/drawer";
import UserContainer from "../../components/userContainer/userContainer";


class Users extends Component {
    state={
        visible:false,
        users:[]
    }
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
        axios.get(baseUrl + 'users').then(response=>
            {
                console.log(response)
                this.setState({users:response.data})

            }
        );
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        this.getUsers()

    }

    render() {
        return (
            <div style={userStyle.container}>
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
                                // onClick={(_) =>
                                //     this.openEventModal(
                                //         item._id,
                                //         item.name,
                                //         item.description,
                                //         item.location,
                                //         this.getDate(item.date)
                                //     )
                                // }
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
