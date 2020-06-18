import React from "react";
import taskContainerStyle from "./taskContainerStyle";
import {Card} from "antd";

function setLinesNumber(text) {
    var final = text.substr(0, 70);
    return final;
}


function TaskContainer(props) {
    return (
        <Card
            onClick={props.onClick}
            hoverable
            loading={props.loading}
            style={{
                width: "100%",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                minHeight: 200,
                backgroundColor: "white"
            }}
        >
            <h3 style={taskContainerStyle.title}>{props.title}</h3>
            <h4 style={taskContainerStyle.content}>
                {setLinesNumber(props.content)}
            </h4>
        </Card>
    );
}

export default TaskContainer;
