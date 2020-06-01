import React, {Component} from "react";
import Navbar from "../../components/navBar/navbar";
import DrawerNav from "../../components/drawer/drawer";
import {Routes, Roles} from "../../config/constants";
import addTaskStyle from "./addTaskStyle";
import {Card, Form, Input, Select, Button} from "antd";

const jwt = require('jsonwebtoken');

class AddTask extends Component {
    state = {
        visible: false,
        taskTarget: Roles,
        selectedTargets: []
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

    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({
            selectedTargets: value
        })
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        try {
            jwt.verify(token, 'secret');
            console.log('token verified');
        } catch (e) {
            console.log(e.message)
            this.props.history.push('/')
        }
    }

    render() {

        return (
            <div style={addTaskStyle.container}>
                <Navbar onPressDrawer={() => this.onOpen()}/>
                <DrawerNav
                    visible={this.state.visible}
                    onClose={() => this.onClose(false)}
                    content={Routes}
                />
                <div align={'center'} style={{margin: '2%'}}>
                    <Card style={{width: '50%'}}>
                        <h3>Add a new task</h3>
                        <Form
                            style={{alignItems: 'center'}}
                            name="add task"
                            scrollToFirstError
                        >
                            <Form.Item
                                name="title"
                                label="Task Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the task title',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="content"
                                label="Task body"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Task content cant be empty',
                                    },
                                ]}
                            >
                                <Input.TextArea autoSize={true}/>
                            </Form.Item>
                            <Form.Item
                                name={'taskFor'}
                                label={'Task for'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose at least one target',
                                    },
                                ]}
                            >
                                <Select mode="tags" style={{width: '100%'}} placeholder="Select a target"
                                        onChange={this.handleChange}>
                                    {this.state.taskTarget !== [] && this.state.taskTarget.map(single =>
                                        <Select.Option key={single.value}>{single.alias}</Select.Option>
                                    )}
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button style={{borderRadius: 6}} type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}

export default AddTask
