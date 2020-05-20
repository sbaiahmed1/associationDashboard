import React, {useState, useEffect} from "react";
import {Modal, Row, TimePicker, DatePicker} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import moment from 'moment';

function TaskModal(props) {
    // Similar to componentDidMount and componentDidUpdate:
    return (
        <Modal
            closable={false}
            title="Edit"
            centered
            visible={props.visible}
            onOk={props.ok}
            onCancel={props.cancel}
        >
            <Paragraph editable={{onChange: props.onChangeTitle}}>
                {props.content.title}
            </Paragraph>
            <Paragraph editable={{onChange: props.onChangeContent}}>
                {props.content.content}
            </Paragraph>
        </Modal>
    );
}

export default TaskModal;
