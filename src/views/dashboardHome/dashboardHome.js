import React, {Component} from "react";
import DrawerNav from "../../components/drawer/drawer";
import {Menu} from "antd";
import dashboardHomeStyle from "./dashboarHomeStyle";
import {MenuOutlined} from '@ant-design/icons';
import Colors from "../../config/colors";
import Navbar from "../../components/navBar/navbar";

class DashboardHome extends Component {
    state = {
        visible: false
    };
    onOpen = () => {
        this.setState({
            visible: true
        })
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div style={dashboardHomeStyle.container}>
                <Navbar/>
                <MenuOutlined style={{
                    color: Colors.buttonColor,
                    padding: '1%'
                }} onClick={() => this.onOpen()}>Primary</MenuOutlined>
                <DrawerNav visible={this.state.visible} onClose={() => this.onClose(false)}/>
            </div>
        );
    }
}

export default DashboardHome
