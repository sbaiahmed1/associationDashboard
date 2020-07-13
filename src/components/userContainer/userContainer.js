import React from "react";
import userContainerStyle from "./userContainerStyle";
import {Avatar, Card} from "antd";


function UserContainer(props) {
    return (
        <Card
            onClick={props.onClick}
            hoverable
            loading={props.loading}
            style={{
                width: "100%",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                minHeight: 300,
                backgroundColor: "white"
            }}
        >
            <Avatar size={100}
                    src={props.imageName != null ? 'data:image/jpeg;base64,' + props.imageName : 'https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'}/>
            <h3 style={userContainerStyle.title}>{props.name}{' '}{props.lastName}</h3>
            <h4 style={userContainerStyle.subtitle}>@{props.username}</h4>
            <h4 style={userContainerStyle.content}>
                {(props.role)}
            </h4>
        </Card>
    );
}

export default UserContainer;
