import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function EventModal(props) {
  return (
    <Modal
      closable={false}
      title="Edit"
      centered
      visible={props.visible}
      onOk={props.ok}
      onCancel={props.cancel}
    >
      <Paragraph editable={{ onChange: props.onChange }}>
        {props.content.name}
      </Paragraph>
    </Modal>
  );
}
export default EventModal;
