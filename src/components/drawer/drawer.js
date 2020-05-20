import React, {Component} from "react";
import {Affix, Avatar, Drawer} from "antd";
import {Gradient} from 'react-gradient';
import drawerStyle from "./drawerStyle";
import {LogoutOutlined} from "@ant-design/icons";

const gradients = [
    ['#A9A9A9', '#fff'],
];

function SecondDrawer(props) {
    return (
        <Drawer
            title={null}
            placement={'left'}
            closable={false}
            onClose={props.onSecondClose}
            visible={props.secondVisible}
        >
            {props.content && props.content.map(route => {
                return (<h3>{route.label}</h3>)
            })}
        </Drawer>
    )
}

class DrawerNav extends Component {
    state = {
        placement: 'left',
        visible: true,
        top: 0,
        secondVisible: false,
        secondDrawerContent: []
    };

    constructor(props) {
        super(props);
    }

    showChildrenDrawer = () => {
        this.setState({
            secondVisible: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            secondVisible: false,
        });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > this.state.position && window.innerWidth <= 500) {
            console.log('going down babe');
            this.setState({top: 25})
        } else {
            console.log('going up babe');
            this.setState({top: 0})

        }
        this.setState({
            position: st <= 0 ? 0 : st // For Mobile or negative scrolling
        })
    };

    render() {
        return (
            <div>
                <Drawer
                    title={<Affix offsetTop={this.state.top}>
                        <Gradient
                            gradients={gradients} // required
                            property="background"
                            duration={1000}
                        >
                            <div style={drawerStyle.header}>
                                <h3 style={drawerStyle.headerTextStyle}>Ahmed Sbai (Admin)</h3>
                            </div>
                        </Gradient>
                    </Affix>}
                    headerStyle={drawerStyle.headerStyle}
                    footer={<h4 style={{padding: 10, fontFamily: 'Montserrat'}}><LogoutOutlined
                        style={{paddingRight: 10}}/>Logout
                    </h4>}
                    placement={'left'}
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                >
                    <SecondDrawer content={this.state.secondDrawerContent} secondVisible={this.state.secondVisible}
                                  onSecondClose={() => this.onChildrenDrawerClose()}/>
                    {this.props.content && this.props.content.map(route => {
                        return (
                            <h3 onClick={() => {
                                this.setState({secondDrawerContent: route.childrenRoutes});
                                this.showChildrenDrawer()
                            }}>{route.label}</h3>)
                    })}


                </Drawer>
            </div>
        );
    }
}

export default DrawerNav
;
