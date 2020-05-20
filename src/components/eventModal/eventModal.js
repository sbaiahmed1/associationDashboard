import React, {useState, useEffect} from "react";
import {Modal, Row, TimePicker, DatePicker} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import moment from 'moment';

function EventModal(props) {
    const [time,setTime] = useState('');
    const [date,setDate] = useState('');
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        props.content.date && props.content.date.map(dates => {
            if ((dates.length === 4) || (dates.length === 5)) {
                console.log(dates)
                setTime(dates)
            } else {
                console.log(dates)
                setDate(dates)
            }
        })
    }, [props]);

    return (
        <Modal
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
            <Paragraph editable={{onChange: props.onChangeDescription}}>
                {props.content.description}
            </Paragraph>
            <Paragraph editable={{onChange: props.onChangeLocation}}>
                {props.content.location}
            </Paragraph>
            <Row>
                <TimePicker value={props.time} defaultValue={moment(time,'HH:mm')} onChange={props.onChangeHours} format={'HH:mm'}/>
                <DatePicker value={props.date} onChange={props.onChangeDate} defaultValue={moment(date, 'MM/DD/YYYY')} />
            </Row>
        </Modal>
    );
}

export default EventModal;
