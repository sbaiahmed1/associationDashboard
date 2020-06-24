import {Button, Layout, Menu, Row} from 'antd';
import React, {Component} from "react";
import './layout.css'
import logo from '../../assets/logo.png'
import {PoweroffOutlined, SettingOutlined} from "@ant-design/icons";

const {Header, Content, Footer, Sider} = Layout;

class LayoutPage extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo">
                        <img src={logo} alt={'logo'}/>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.selectedIndex]}>
                        {this.props.content && this.props.content.map(route => {
                            return (
                                <Menu.SubMenu title={route.label}>
                                    {route.childrenRoutes.map(routes => {
                                        return (
                                            <Menu.Item>{routes.label}</Menu.Item>
                                        )
                                    })}
                                </Menu.SubMenu>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{padding: 0}}>
                        <Row
                        style={{float:'right', margin:20}}
                        >
                            <Button
                                style={{marginLeft:10}}
                                type="primary"
                                icon={<PoweroffOutlined/>}
                            >Logout</Button>
                            <Button
                                style={{marginLeft:10}}
                                type="primary"
                                icon={<SettingOutlined/>}
                            >Settings</Button>
                        </Row>
                    </Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ahmed Sbai 2020</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default LayoutPage
