import React, {Component} from "react";
import TaskModal from "../../components/taskModal/taskModal";
import Navbar from "../../components/navBar/navbar";
import DrawerNav from "../../components/drawer/drawer";
import {baseUrl, Routes} from "../../config/constants";
import axios from 'axios'
import {List} from "antd";
import TaskContainer from "../../components/taskContainer/taskContainer";
import tasksStyle from "./tasksStyle";
// import dashboardHomeStyle from "../dashboardHome/dashboarHomeStyle";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: {
                new: [],
                old: []
            },
            loading: false,
            taskModalVisible: false,
            taskModalContent: {},
            visible:false
        }
    }

    /******************************************************/
    getData = () => {
        this.setState({loading: true});
        let url = baseUrl + 'task';
        let token = localStorage.getItem('token');
        var options = {
            accept: '*/*',
            headers: {
                token: token,
            },
        };
        axios
            .get(url, options)
            .then(Response => {
                let datas = Response.data;
                let newAdded = [];
                let old = [];
                console.log(datas);
                datas.map(data => {
                    if (data.checked === true) {
                        old.push(data);
                    } else {
                        newAdded.push(data);
                    }
                });
                this.setState({
                    loading: false,
                    tasks: {old, newAdded}
                })
            });


    };

    /******************************************************/
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
    openTaskModal = async (id, title, content) => {
        this.setState({
            taskModalContent: {
                id: id,
                title: title,
                content: content,
                checked: false
            },
        });
        this.setState({
            taskModalVisible: true,
        });
    };
    /******************************************************/
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div style={tasksStyle.container}>
                <TaskModal
                    content={this.state.taskModalContent}
                    onChangeTitle={(str) => {
                        this.setState({
                            taskModalContent: {...this.state.taskModalContent, title: str},
                        });
                    }}
                    onChangeContent={(str) => {
                        this.setState({
                            taskModalContent: {...this.state.taskModalContent, content: str},
                        });
                    }}
                    visible={this.state.taskModalVisible}
                    ok={() => this.setState({taskModalVisible: false})}
                />
                <Navbar onPressDrawer={() => this.onOpen()}/>
                <DrawerNav
                    visible={this.state.visible}
                    onClose={() => this.onClose(false)}
                    content={Routes}
                />
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 3,
                    }}
                    header={
                        <div>
                                <h2 style={{fontFamily: "Montserrat", fontWeight: "bold"}}>
                                    Recently added Tasks
                                </h2>
                        </div>
                    }
                    bordered
                    dataSource={this.state.tasks.newAdded}
                    renderItem={(item) => (
                        <List.Item>
                            <TaskContainer
                                onClick={(_) =>
                                    this.openTaskModal(
                                        item._id,
                                        item.title,
                                        item.content,
                                    )
                                }
                                title={item.title}
                                content={item.content}
                            />
                        </List.Item>
                    )}
                />
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 3,
                    }}
                    header={
                        <div>
                            <h2 style={{fontFamily: "Montserrat", fontWeight: "bold"}}>
                                 Old Tasks
                            </h2>
                        </div>
                    }
                    bordered
                    dataSource={this.state.tasks.old}
                    renderItem={(item) => (
                        <List.Item>
                            <TaskContainer
                                onClick={(_) =>
                                    this.openTaskModal(
                                        item._id,
                                        item.title,
                                        item.content,
                                    )
                                }
                                title={item.title}
                                content={item.content}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Tasks;
