import React, { Component } from "react";
import DrawerNav from "../../components/drawer/drawer";
import { Menu } from "antd";
import dashboardHomeStyle from "./dashboarHomeStyle";
import { MenuOutlined } from "@ant-design/icons";
import Colors from "../../config/colors";
import Navbar from "../../components/navBar/navbar";
import { connect } from "react-redux";
import { loggedIn } from "../../redux/actions/login";

class DashboardHome extends Component {
  state = {
    visible: false,
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

  render() {
    return (
      <div style={dashboardHomeStyle.container}>
        <Navbar onPressDrawer={() => this.onOpen()} />
        <DrawerNav
          visible={this.state.visible}
          onClose={() => this.onClose(false)}
        />
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
export default connect(null, mapDispatchToProps)(DashboardHome);
