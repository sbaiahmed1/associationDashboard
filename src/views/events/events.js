import React, {Component} from "react";
import Navbar from "../../components/navBar/navbar";
import DrawerNav from "../../components/drawer/drawer";
import {EventsDummy, Routes} from "../../config/constants";
import {List} from "antd";
import event from "../../assets/event.jpg";
import eventStyle from "./eventStyle";
import EventModal from "../../components/eventModal/eventModal";
import EventContainer from "../../components/eventContainer/eventContainer";
import ListHeader from "../../components/listHeader/listHeader";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {
                new: [],
                old: []
            },
            loading: false,
            eventModalVisible: false,
            eventModalContent: {},
            visible: false
        }
    }

    /******************************************************/
    // getData = () => {
    //     this.setState({loading: true});
    //     let url = baseUrl + 'event';
    //     let token = localStorage.getItem('token');
    //     var options = {
    //         accept: '*/*',
    //         headers: {
    //             token: token,
    //         },
    //     };
    //     axios
    //         .get(url, options)
    //         .then(Response => {
    //             let datas = Response.data;
    //             let newAdded = [];
    //             let old = [];
    //             console.log(datas);
    //             datas.map(data => {
    //                 if (data.checked === true) {
    //                     old.push(data);
    //                 } else {
    //                     newAdded.push(data);
    //                 }
    //             });
    //             this.setState({
    //                 loading: false,
    //                 tasks: {old, newAdded}
    //             })
    //         });
    //
    //
    // };

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
    openEventModal = async (id, name, description, location, date) => {
        this.setState({
            eventModalContent: {
                id: id,
                name: name,
                description: description,
                location: location,
                date: date
            },
        });
        this.setState({
            eventModalVisible: true,
        });
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

    /******************************************************/
    // componentDidMount() {
    //     this.getData()
    // }

    render() {
        return (
            <div style={eventStyle.container}>
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
                <Navbar onPressDrawer={() => this.onOpen()}/>
                <DrawerNav
                    visible={this.state.visible}
                    onClose={() => this.onClose(false)}
                    content={Routes}
                />
                <ListHeader text={'events'} hideShowAll={true}/>
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
            </div>
        );
    }
}

export default Events;
