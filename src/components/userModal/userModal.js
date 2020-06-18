import React from "react";
import {Modal} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";

function UserModal(props) {
    // Similar to componentDidMount and componentDidUpdate:
    return (<Modal
            closable={false}
            title="Edit"
            centered
            visible={props.visible}
            onOk={props.ok}
            onCancel={props.cancel}
        >
            <Paragraph editable={{onChange: props.onChangeName}}>
                {props.content.name}
            </Paragraph>
            <Paragraph editable={{onChange: props.onChangeLastName}}>
                {props.content.lastName}
            </Paragraph>
            <Paragraph editable={{onChange: props.onChangeEmail}}>
                {props.content.email}
            </Paragraph>
            <Paragraph editable={{onChange: props.onChangeRole}}>
                {props.content.role}
            </Paragraph>
            <Paragraph editable={{onChange: props.onChangeType}}>
                {props.content.type}
            </Paragraph>
            <Paragraph editable={{onChange: props.onChangeUsername}}>
                {props.content.username}
            </Paragraph>
        </Modal>
    );
}

export default UserModal;
