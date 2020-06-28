import React from "react";
import {Gradient} from "react-gradient";
import {Popover} from "antd";

function StatsCard(props) {
    return (
        <Popover content={'slm'} placement="rightTop" trigger="hover" title="Title">
            <Gradient
                gradients={props.gradient} // required
                property="background"
                duration={1000}
                angle="45deg"
                style={{margin: 20}}

            >
                <div style={{minHeight: 100, minWidth: 150, padding: 50}}>
                    <h1 style={{textAlign: 'center'}}>{props.cardTitle}</h1>
                    <h2 style={{textAlign: 'center'}}>{props.cardValue}</h2>
                </div>
            </Gradient>
        </Popover>

    )
}

export default StatsCard
