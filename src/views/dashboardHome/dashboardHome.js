import React, {Component, createRef} from "react";
import {BackTop, Row} from "antd";
import {connect} from "react-redux";
import {loggedIn} from "../../redux/actions/login";
import {Routes} from "../../config/constants";
import LayoutPage from "../layout/layout";
import StatsCard from "../../components/statsCard/statsCard";
import {DualLine} from "@ant-design/charts";

const data1 = [
    {year: '09/07', IOS: 3},
    {year: '10/07', IOS: 4},
    {year: '11/07', IOS: 3.5},
    {year: '12/07', IOS: 5},
    {year: '13/07', IOS: 4.9},
    {year: '14/07', IOS: 6},
    {year: '15/07', IOS: 7},
    {year: '16/07', IOS: 9},
    {year: '17/07', IOS: 13},
];

const data2 = [
    {year: '09/07', Android: 10},
    {year: '10/07', Android: 4},
    {year: '11/07', Android: 5},
    {year: '12/07', Android: 5},
    {year: '13/07', Android: 4.9},
    {year: '14/07', Android: 35},
    {year: '15/07', Android: 7},
    {year: '16/07', Android: 1},
    {year: '17/07', Android: 20},
];
const config = {
    data: [data1, data2],
    title: {
        visible: true,
        text: 'Mobile Users',
    },
    xField: 'year',
    yField: ['IOS', 'Android'],
};
const cardStats = [
    {
        cardTitle: 'Total Users',
        cardValue: 20,
    },
    {
        cardTitle: 'Total Tasks',
        cardValue: 20,
    },
    {
        cardTitle: 'Total Events',
        cardValue: 20,
    },
    {
        cardTitle: 'Total Polls',
        cardValue: 20,
    }
]
const gradientsAll = [
    [
        ['#42CAFD', '#66B3BA'],
        ['#8EB19D', '#F6EFA6']
    ],
    [
        ['#DDFFF7', '#93E1D8'],
        ['#FFA69E', '#AA4465']
    ],
    [
        ['#DDFFF7', '#FFD2FC'],
        ['#E980FC', '#E980FC']
    ],
    [
        ['#F46036', '#2E294E'],
        ['#1B998B', '#E71D36']
    ],
    [
        ['#D8CFAF', '#E6B89C'],
        ['#ED9390', '#F374AE']
    ],
    [
        ['#6C464F', '#9E768F'],
        ['#9FA4C4', '#B3CDD1']
    ],
    [
        ['#65DEF1', '#A8DCD1'],
        ['#DCE2C8', '#F96900']
    ],


];
// const content = (
//     <div>
//         <p>Content</p>
//         <p>Content</p>
//     </div>
// );

class DashboardHome extends Component {
    ref = createRef();
    state = {
        width: 1366,
        height: 50
    };

    // DownloadImage
    downloadImage = () => {
        return this.ref.current?.downloadImage();
    };

    // Get data base64
    toDataURL = () => {
        console.log(this.ref.current?.toDataURL());
    };

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <LayoutPage content={Routes}>

                <div style={{marginLeft: this.state.width > 576 ? 200 : 0, marginTop: 50}}>
                    <Row>
                        {
                            cardStats && cardStats.map(single => {
                                return (
                                    <StatsCard
                                        gradient={gradientsAll[Math.floor(Math.random() * gradientsAll.length)]}
                                        cardTitle={single.cardTitle}
                                        cardValue={single.cardValue}/>
                                )
                            })
                        }
                    </Row>
                    <DualLine {...config} chartRef={this.ref}/>
                    <BackTop visibilityHeight={50}/>
                </div>
            </LayoutPage>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isLogged: (global) => {
            dispatch(loggedIn(global));
        },
    };
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        login: state.login,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);
