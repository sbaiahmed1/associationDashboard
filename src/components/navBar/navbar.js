import React, {Component} from "react";
import {Affix, Menu} from "antd";
import {MenuOutlined, SettingOutlined,} from "@ant-design/icons";
import Colors from "../../config/colors";
import logo from "../../assets/noTextLogo.png";
import {Link} from "react-router-dom";

class Navbar extends Component {
    state = {
        current: "mail",
        top: 0,
        position: 0
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > this.state.position && window.innerWidth <= 500) {
            console.log('going down babe')
            this.setState({top: 12})
        } else {
            console.log('going up babe')
            this.setState({top: 0})

        }
        this.setState({
            position: st <= 0 ? 0 : st // For Mobile or negative scrolling
        })
    }


    handleClick = (e) => {
        console.log("click ", e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Affix offsetTop={this.state.top}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item
                        key="drawerButton"
                        onClick={this.props.onPressDrawer}
                        icon={
                            <MenuOutlined
                                style={{
                                    color: Colors.buttonColor,
                                    padding: "1%",
                                }}
                            >
                                Primary
                            </MenuOutlined>
                        }
                    />

                    <Menu.Item
                        key="home"
                        icon={
                            <Link to={"/"}>
                                <img alt={"Logo"} style={{height: 40, width: 50}} src={logo}/>
                            </Link>
                        }
                    />

                    {/*  <Menu.Item*/}
                    {/*    style={{ float: "right" }}*/}
                    {/*    key="logout"*/}
                    {/*    icon={<LogoutOutlined />}*/}
                    {/*  >*/}
                    {/*    Logout*/}
                    {/*</Menu.Item>*/}
                    <Menu.Item
                        style={{float: "right"}}
                        key="app"
                        icon={<SettingOutlined/>}
                    >
                        Settings
                    </Menu.Item>
                </Menu>
            </Affix>
        );
    }
}

export default Navbar;
