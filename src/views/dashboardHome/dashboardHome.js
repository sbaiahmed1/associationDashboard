import React, {Component} from "react";
import {BackTop, List} from "antd";
import dashboardHomeStyle from "./dashboarHomeStyle";
import {connect} from "react-redux";
import {loggedIn} from "../../redux/actions/login";
import {EventsDummy, Routes, Tasks} from "../../config/constants";
import event from "../../assets/event.jpg";
import EventContainer from "../../components/eventContainer/eventContainer";
import EventModal from "../../components/eventModal/eventModal";
import TaskContainer from "../../components/taskContainer/taskContainer";
import TaskModal from "../../components/taskModal/taskModal";
import ListHeader from "../../components/listHeader/listHeader";
import LayoutPage from "../layout/layout";

class DashboardHome extends Component {
    state = {
        drawerVisible: false,
        eventModalVisible: false,
        taskModalVisible: false,
        taskModalContent: {},
        eventModalContent: {},
        date: '',
        time: ''
    };

    getDate(date) {
        date = new Date(date * 1000);
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var realDate = month + "/" + day + "/" + year;
        var realTime = hours + ":" + minutes.substr(-2);
        return [realTime, realDate];
    }

    openEventModal = async (id, name, description, location, date) => {
        this.setState({
            eventModalContent: {
                id: id,
                name: name,
                description: description,
                location: location,
                date: date,
            },
        });
        this.setState({
            eventModalVisible: true,
        });
    };
    /****************************************************/
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

    render() {
        return (
            <LayoutPage content={Routes}>
                <div style={dashboardHomeStyle.container}>
                    <EventModal
                        onChangeHours={(time) => {
                            this.setState({
                                time: time.hours() + ':' + time.minutes(),
                            });
                        }}
                        onChangeDate={(date) => {
                            this.setState({
                                eventModalContent: {
                                    ...this.state.eventModalContent,
                                    date: [...this.state.eventModalContent.date, this.state.eventModalContent.date.splice(1, 1, ((date.month() + 1) + '-' + date.date() + '-' + date.year()))]
                                },
                            });
                        }}
                        content={this.state.eventModalContent}
                        onChangeName={(str) => {
                            this.setState({
                                eventModalContent: {...this.state.eventModalContent, name: str},
                            });
                        }}
                        onChangeDescription={(str) => {
                            this.setState({
                                eventModalContent: {...this.state.eventModalContent, description: str},
                            });
                        }}
                        onChangeLocation={(str) => {
                            this.setState({
                                eventModalContent: {...this.state.eventModalContent, location: str},
                            });
                        }}
                        visible={this.state.eventModalVisible}
                        ok={() => this.setState({eventModalVisible: false})}
                    />
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
                    <BackTop visibilityHeight={50}/>
                </div>
            </LayoutPage>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isLogged: (global) => {
            dispatch(loggedIn(global));
        },
    };
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        login: state.login,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);
