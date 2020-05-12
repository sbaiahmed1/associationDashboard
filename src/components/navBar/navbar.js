import React, { Component } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Colors from "../../config/colors";
import logo from "../../assets/noTextLogo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item
          key="drawerButton"
          icon={
            <MenuOutlined
              style={{
                color: Colors.buttonColor,
                padding: "1%",
              }}
              onClick={this.props.onPressDrawer}
            >
              Primary
            </MenuOutlined>
          }
        />

        <Menu.Item
          key="home"
          icon={
            <Link to={"/"}>
              <img alt={"Logo"} style={{ height: 40, width: 50 }} src={logo} />
            </Link>
          }
        />

        <Menu.Item
          style={{ float: "right" }}
          key="mail"
          icon={<MailOutlined />}
        >
          Navigation One
        </Menu.Item>
        <Menu.Item
          style={{ float: "right" }}
          key="app"
          icon={<AppstoreOutlined />}
        >
          Navigation Two
        </Menu.Item>
        <Menu.Item style={{ float: "right" }} key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
