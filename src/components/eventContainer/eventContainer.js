import React, { useState, useEffect } from "react";
import eventContainerStyle from "./eventContainerStyle";
import { Card, Row} from "antd";

function setLinesNumber(text) {
  var final = text.substr(0, 70);
  return final;
}
function getDate(date) {
  date = new Date(date * 1000);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();

  var realDate =
    month + '-' + day + '-' + year + ' ';
  return realDate;
}

function EventContainer(props) {
  return (
    <Card
      onClick={props.onClick}
      hoverable
      style={{ width: "100%", borderTopLeftRadius: 6, borderTopRightRadius: 6 ,borderWidth:0}}
      cover={<img alt="example" src={props.image} />}
    >
      <h3 style={eventContainerStyle.name}>{props.name}</h3>
      <h4 style={eventContainerStyle.description}>
        {setLinesNumber(props.description)}
      </h4>
      <Row style={{ justifyContent: "space-between" }}>
        <h6 style={eventContainerStyle.location}>{props.location}</h6>
        <h6 style={eventContainerStyle.date}>{getDate(props.date)}</h6>
      </Row>
    </Card>
  );
}

export default EventContainer;
