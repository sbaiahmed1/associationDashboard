import React, { Component } from "react";
import DrawerNav from "../../components/drawer/drawer";
import { Menu, Row, List } from "antd";
import dashboardHomeStyle from "./dashboarHomeStyle";
import Navbar from "../../components/navBar/navbar";
import { connect } from "react-redux";
import { loggedIn } from "../../redux/actions/login";
import { Events } from "../../config/constants";
import event from "../../assets/event.jpg";
import EventContainer from "../../components/eventContainer/eventContainer";
import EventModal from "../../components/eventModal/eventModal";

class DashboardHome extends Component {
  state = {
    drawerVisible: false,
    eventModalVisible: false,
    taskModalVisible: false,
    taskModalContent: {},
    eventModalContent: {},
  };
  getDate(date) {
    date = new Date(date * 1000);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var realDate =
      month + "-" + day + "-" + year + " " + hours + ":" + minutes.substr(-2);
    return realDate;
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

  render() {
    return (
      <div style={dashboardHomeStyle.container}>
        <EventModal
          onChangeDate={(date) => {
            this.setState({
              eventModalContent: {
                ...this.state.eventModalContent,
                date: date,
              },
            });
          }}
          content={this.state.eventModalContent}
          onChange={(str) => {
            this.setState({
              eventModalContent: { ...this.state.eventModalContent, name: str },
            });
          }}
          visible={this.state.eventModalVisible}
          ok={() => this.setState({ eventModalVisible: false })}
        />
        <Navbar onPressDrawer={() => this.onOpen()} />
        <DrawerNav
          visible={this.state.visible}
          onClose={() => this.onClose(false)}
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
            <h1 style={{ fontFamily: "Montserrat", fontWeight: "bold" }}>
              Recently added Tasks
            </h1>
          }
          footer={<div>Footer</div>}
          bordered
          dataSource={Events}
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
                    item.date
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
