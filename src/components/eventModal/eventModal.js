import React, { useState, useEffect } from "react";
import { Modal, Row, TimePicker } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import moment from 'moment';

function EventModal(props) {
  const [date, SetDate] = useState({
    date: '',
    time: ''
  })
  props.content.date && props.content.date.map(dates => {
    if ((dates.length == 4) || (dates.length == 5)) {
      console.log(typeof dates)
    }
  })

  return (
    <Modal
      closable={false}
      title="Edit"
      centered
      visible={props.visible}
      onOk={props.ok}
      onCancel={props.cancel}
    >
      <Paragraph editable={{ onChange: props.onChangeName }}>
        {props.content.name}
      </Paragraph>
      <Paragraph editable={{ onChange: props.onChangeDescription }}>
        {props.content.description}
      </Paragraph>
      <Paragraph editable={{ onChange: props.onChangeLocation }}>
        {props.content.location}
      </Paragraph>
      <Row>
        <TimePicker onChange={props.onChangeHours} defaultValue={moment('12:08', 'HH:mm')} format={'HH:mm'} />
      </Row>
    </Modal>
  );
}
export default EventModal;
