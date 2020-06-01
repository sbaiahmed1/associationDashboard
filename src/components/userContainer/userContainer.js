import React, {useState, useEffect} from "react";
import userContainerStyle from "./userContainerStyle";
import {Card, Row, TimePicker} from "antd";


function UserContainer(props) {
    return (
        <Card
            onClick={props.onClick}
            hoverable
            loading={props.loading}
            style={{width: "100%", borderTopLeftRadius: 6, borderTopRightRadius: 6,minHeight:200,backgroundColor:"white"}}
        >
            <h3 style={userContainerStyle.title}>{props.name}{' '}{props.lastName}</h3>
            <h4 style={userContainerStyle.subtitle}>@{props.username}</h4>
            <h4 style={userContainerStyle.content}>
                {(props.role)}
            </h4>
        </Card>
    );
}

export default UserContainer;
