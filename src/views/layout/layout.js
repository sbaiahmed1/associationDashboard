import {Button, Layout, Menu, Row} from 'antd';
import React, {Component} from "react";
import './layout.css'
import logo from '../../assets/logo.png'
import {PoweroffOutlined, SettingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Colors from "../../config/colors";

const {Header, Content, Footer, Sider} = Layout;

class LayoutPage extends Component {
    state = {
        broken: false
    }

    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="sm"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                        this.setState({broken: !this.state.broken})
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{
                        position: 'fixed',
                        minHeight: '100%',
                        zIndex: 999
                    }}
                >
                    <div className="logo">
                        <Link to={'/'}> <img src={logo} alt={'logo'}/>
                        </Link>
                    </div>
                    <Menu style={{
                        zIndex: 999
                    }} theme="dark" mode="inline" defaultSelectedKeys={[this.props.selectedIndex]}>
                        {this.props.content && this.props.content.map(route => {
                            return (
                                <Menu.SubMenu title={route.label}>
                                    {route.childrenRoutes.map(routes => {
                                        return (
                                            <Menu.Item><Link to={'/' + routes.routeName}/>{routes.label}</Menu.Item>
                                        )
                                    })}
                                </Menu.SubMenu>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header theme="dark" className="site-layout-sub-header-background"
                            style={{
                                position: 'fixed', minWidth: '100%', padding: 0, zIndex: 999
                            }}>
                        <Row
                            style={{float: 'right', margin: 20}}
                        >
                            <Button
                                onClick={this.props.clickLogout}
                                style={{marginLeft: 10}}
                                type="outlined"
                                icon={<PoweroffOutlined/>}
                            >Logout</Button>
                            <Button
                                style={{marginLeft: 10}}
                                type="outlined"
                                icon={<SettingOutlined/>}
                            >Settings</Button>
                        </Row>
                    </Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center', marginLeft: 100}}>Ahmed Sbai 2020</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default LayoutPage
