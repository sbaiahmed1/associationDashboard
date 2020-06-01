import React, {Component} from "react";
import Navbar from "../../components/navBar/navbar";
import DrawerNav from "../../components/drawer/drawer";
import {firebaseConfig, Regions, Routes,} from "../../config/constants";
import addEventStyle from "./addEventStyle";
import {Card, Form, Input, Button, Row, TimePicker, DatePicker, Upload, Select} from "antd";
import moment from "moment";
import * as firebase from "firebase";
import {FileImageOutlined, InboxOutlined} from "@ant-design/icons";

firebase.initializeApp(firebaseConfig);
const jwt = require('jsonwebtoken');

class AddEvent extends Component {
    state = {
        visible: false,
        regions: Regions
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
            console.log(e.message);
            this.props.history.push('/')
        }
    }

    handleFileChange = e => {
        console.log('Upload event:', e);
        this.setState({eventImage: e.file})
    };
    uploadPhoto = file => {
        let ref = firebase.storage().ref('/' + file.filename);
        ref.put(file).then(function (snapshot) {
            console.log(snapshot);
        }).catch(e => console.log(e));
    };

    render() {

        return (
            <div style={addEventStyle.container}>
                <Navbar onPressDrawer={() => this.onOpen()}/>
                <DrawerNav
                    visible={this.state.visible}
                    onClose={() => this.onClose(false)}
                    content={Routes}
                />
                <div align={'center'} style={{margin: '2%'}}>
                    <Card style={{width: '50%', borderRadius: 6}}>
                        <h3>Add a new Event</h3>
                        <Form
                            style={{alignItems: 'center'}}
                            name="add task"
                            scrollToFirstError
                        >
                            <Form.Item
                                name="name"
                                label="Event Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the Event name',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="description"
                                label="Event description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Event description cant be empty',
                                    },
                                ]}
                            >
                                <Input.TextArea autoSize={true}/>
                            </Form.Item>
                            <Row style={{justifyContent: 'space-around'}}>
                                <Form.Item
                                    name={'time'}
                                    label={'Time'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select a time',
                                        },
                                    ]}
                                >
                                    <TimePicker format={'HH:mm'}/>
                                </Form.Item>
                                <Form.Item
                                    name={'date'}
                                    label={'Date'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select a date',
                                        },
                                    ]}
                                >
                                    <DatePicker/>
                                </Form.Item>
                            </Row>
                            <Form.Item placeholder={'Select a region'} label={'Region'}
                                       name={'region'}
                            rules={[
                                {
                                    required:true,
                                    message:'Please select the event region ',
                                }
                            ]}
                            >
                                <Select>
                                    {this.state.regions !== [] && this.state.regions.map(region => {
                                       return <Select.Option key={region.value}>{region.label}</Select.Option>
                                    })}
                                </Select>
                            </Form.Item>
                            <Form.Item required={true} label="Event Image">
                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select an image for the event'
                                        }
                                    ]}
                                    name="image" getValueFromEvent={(e) => this.handleFileChange(e)} noStyle>
                                    <Upload.Dragger beforeUpload={() => false} multiple={() => false} name="file">
                                        <p className="ant-upload-drag-icon">
                                            <FileImageOutlined/>
                                        </p>
                                        <p className="ant-upload-text">Click or drag Event Image to this area to
                                            upload</p>
                                    </Upload.Dragger>
                                </Form.Item>
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

export default AddEvent
