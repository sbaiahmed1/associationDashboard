import React, {Component} from "react";
import DrawerNav from "../../components/drawer/drawer";
import {List} from "antd";
import dashboardHomeStyle from "./dashboarHomeStyle";
import Navbar from "../../components/navBar/navbar";
import {connect} from "react-redux";
import {loggedIn} from "../../redux/actions/login";
import {EventsDummy, Routes, Tasks} from "../../config/constants";
import event from "../../assets/event.jpg";
import EventContainer from "../../components/eventContainer/eventContainer";
import EventModal from "../../components/eventModal/eventModal";
import TaskContainer from "../../components/taskContainer/taskContainer";
import TaskModal from "../../components/taskModal/taskModal";
import ListHeader from "../../components/listHeader/listHeader";

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
                <Navbar onPressDrawer={() => this.onOpen()}/>
                <DrawerNav
                    visible={this.state.visible}
                    onClose={() => this.onClose(false)}
                    content={Routes}
                />
                <ListHeader text={'events'} route={'/tasks'}/>
                <List style={{margin: 10}}
                      grid={{
                          gutter: 16,
                          xs: 1,
                          sm: 2,
                          md: 4,
                          lg: 4,
                          xl: 4,
                          xxl: 3,
                      }}
                      dataSource={EventsDummy}
                      renderItem={(item) => (
                          <List.Item>
                              <EventContainer
                                  image={event}
                                  onClick={(_) =>
                                      this.openEventModal(
                                          item._id,
                                          item.name,
                                          item.description,
                                          item.location,
                                          this.getDate(item.date)
                                      )
                                  }
                                  name={item.name}
                                  description={item.description}
                                  location={item.location}
                                  date={item.date}
                              />
                          </List.Item>
                      )}
                />
                <ListHeader text={'tasks'} route={'/tasks'}/>
                <List
                    style={{margin: 10}}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 3,
                    }}
                    dataSource={Tasks}
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
