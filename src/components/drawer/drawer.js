import React, {Component} from "react";
import {Affix, Avatar, Drawer} from "antd";
import drawerStyle from "./drawerStyle";

class DrawerNav extends Component {
    state = {
        placement: 'left',
        visible: true,
        top: 0
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
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

            <Drawer
                title={<Affix  style={drawerStyle.header} offsetTop={this.state.top}>
                    <div>
                        <h1>hello</h1>
                    </div>
                </Affix>}
                headerStyle={drawerStyle.headerStyle}
                placement={'left'}
                onClose={this.props.onClose}
                visible={this.props.visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        );
    }
}

export default DrawerNav
