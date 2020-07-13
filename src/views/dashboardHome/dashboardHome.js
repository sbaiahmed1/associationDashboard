import React, {Component, createRef} from "react";
import {BackTop, Row} from "antd";
import {connect} from "react-redux";
import {loggedIn,logout} from "../../redux/actions/login";
import {Routes} from "../../config/constants";
import LayoutPage from "../layout/layout";
import StatsCard from "../../components/statsCard/statsCard";
import {DualLine, Liquid} from "@ant-design/charts";
import {
    BarChartOutlined,
    CalendarOutlined,
    MobileOutlined, NotificationOutlined,
    UnorderedListOutlined,
    UserOutlined
} from "@ant-design/icons";
import {WIDTH} from "../../redux/actions/width";

const liquid = {
    title: {
        visible: true,
        text: 'Received on Android % ',
    },
    min: 0,
    alignTo: 'center',
    max: 100,
    value: 80,
}
const liquid1 = {
    title: {
        visible: true,
        text: 'Received on IOS % ',
    },
    min: 0,
    max: 80,
    value: 20,
}
const data1 = [
    {year: '09/07', IOS: 3},
    {year: '10/07', IOS: 4},
    {year: '11/07', IOS: 7},
    {year: '12/07', IOS: 5},
    {year: '13/07', IOS: 8},
    {year: '14/07', IOS: 6},
    {year: '15/07', IOS: 7},
    {year: '16/07', IOS: 9},
    {year: '17/07', IOS: 13},
];

const data2 = [
    {year: '09/07', Android: 10},
    {year: '10/07', Android: 16},
    {year: '11/07', Android: 5},
    {year: '12/07', Android: 5},
    {year: '13/07', Android: 7},
    {year: '14/07', Android: 35},
    {year: '15/07', Android: 7},
    {year: '16/07', Android: 1},
    {year: '17/07', Android: 20},
];
const config = {
    data: [data1, data2],
    xField: 'year',
    yField: ['IOS', 'Android'],
};
const cardStats = [
    {
        iconName: <UserOutlined/>,
        cardTitle: 'Total Users',
        cardValue: 20,
    },
    {
        iconName: <UnorderedListOutlined/>,
        cardTitle: 'Total Tasks',
        cardValue: 20,
    },
    {
        iconName: <CalendarOutlined/>,
        cardTitle: 'Total Events',
        cardValue: 20,
    },
    {
        iconName: <BarChartOutlined/>,
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
        this.props.widthListener({width: window.outerWidth})
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <LayoutPage clickLogout={()=>{logout(this.props)}} content={Routes}>
                <div style={{marginLeft: this.props.width.width > 576 ? 200 : 0, marginTop: 50}}>
                    <h1 style={{fontFamily: 'Montserrat', fontWeight: 500, marginTop: 10, marginBottom:10}}><BarChartOutlined/> Stats : </h1>
                    <Row style={{justifyContent: 'space-evenly'}}>
                        {
                            cardStats && cardStats.map(single => {
                                return (
                                    <StatsCard
                                        gradient={gradientsAll[Math.floor(Math.random() * gradientsAll.length)]}
                                        cardTitle={single.cardTitle}
                                        cardValue={single.cardValue}
                                        iconName={single.iconName}
                                    />
                                )
                            })
                        }
                    </Row>
                    <h1 style={{fontFamily: 'Montserrat', fontWeight: 500, marginTop: 10, marginBottom:10}}><MobileOutlined/> Mobile Users : </h1>
                    <DualLine {...config} chartRef={this.ref}/>
                    <h1 style={{fontFamily: 'Montserrat', fontWeight: 500, marginTop: 10, marginBottom:10}}><NotificationOutlined/> Notification Stats : </h1>
                    <Row style={{justifyContent: 'space-evenly'}}>
                        <Liquid {...liquid}/>
                        <Liquid {...liquid1}/>
                    </Row>
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
        widthListener: (global) => {
            dispatch(WIDTH(global));
        }
    };
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        login: state.login,
        width: state.width
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);
