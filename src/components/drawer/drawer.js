import React, {Component} from "react";
import {Drawer} from "antd";

class DrawerNav extends Component {
    state = {
        placement: 'left',
        visible: true
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Drawer
                    title="Basic Drawer"
                    placement={'left'}
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

export default DrawerNav
