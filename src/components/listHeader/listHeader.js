import React, {Component} from "react";
import {Row} from "antd";
import {Link} from "react-router-dom";

class ListHeader extends Component {
    render() {
        return (
            <div style={{margin : 10}}>
                <Row style={{justifyContent: 'space-between'}}>
                    <h2 style={{fontFamily: "Montserrat", fontWeight: "bold", color: 'white'}}>
                        Recently added {this.props.text}
                    </h2>
                    <Link to={this.props.route}>
                        <h4 hidden={this.props.hideShowAll || false} style={{fontFamily: "Montserrat", fontWeight: "500", paddingTop: 10, color: 'white',marginRight:10}}>See
                            all {' '}
                            {this.props.text}</h4>
                    </Link>

                </Row>

            </div>
        );
    }
}

export default ListHeader
