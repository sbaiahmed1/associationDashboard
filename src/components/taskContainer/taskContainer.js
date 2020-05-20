import React, {useState, useEffect} from "react";
import taskContainerStyle from "./taskContainerStyle";
import {Card, Row, TimePicker} from "antd";

function setLinesNumber(text) {
    var final = text.substr(0, 70);
    return final;
}


function TaskContainer(props) {
    return (
        <Card
            onClick={props.onClick}
            hoverable
            style={{width: "100%", borderTopLeftRadius: 6, borderTopRightRadius: 6}}
        >
            <h3 style={taskContainerStyle.title}>{props.title}</h3>
            <h4 style={taskContainerStyle.content}>
                {setLinesNumber(props.content)}
            </h4>
        </Card>
    );
}

export default TaskContainer;
