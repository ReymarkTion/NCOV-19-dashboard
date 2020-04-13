//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
//import $ from 'jquery';
//import Popper from 'popper.js';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import React, { Component } from 'react';
import CountUp from 'react-countup';
import { IoIosStats } from 'react-icons/io';
import { MdPlace } from 'react-icons/md';
import LeafletMapView from '../LeafletMapView/LeafletMapView';
import '../../../_css/sidebar_style.css';
import $ from 'jquery';

//import useChartConfig from 'hooks/useChartConfig'
import { Chart } from 'react-charts'


class DailyCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            map_info: [
                {
                    name: "Bukidnon",
                    pos: [8.0515, 124.9230],
                    zoom: 9.45,
                    selected: false,
                    ncov_info: { pum: 232, pui: 655, pc: 342, d: 0, r: 50230 }
                },
                {
                    name: "Camiguin",
                    pos: [9.1732, 124.7299],
                    zoom: 10.49,
                    selected: false,
                    ncov_info: { pum: 565, pui: 656, pc: 232, d: 0, r: 46454 }
                },
                {
                    name: "Lanao del Norte",
                    pos: [7.8722, 123.8858],
                    zoom: 10,
                    selected: false,
                    ncov_info: { pum: 10, pui: 132, pc: 54, d: 0, r: 23234 }
                },
                {
                    name: "Misamis Occidental",
                    pos: [8.3375, 123.70719],
                    zoom: 9.5,
                    selected: false,
                    ncov_info: { pum: 987, pui: 12, pc: 656, d: 0, r: 4544 }
                },
                {
                    name: "Misamis Oriental",
                    pos: [8.5046, 124.6220],
                    zoom: 11,
                    selected: false,
                    ncov_info: { pum: 232, pui: 656, pc: 656, d: 0, r: 45466 }
                },
                {
                    name: "Cagayan de Oro City",
                    pos: [8.4542, 124.6319],
                    zoom: 12,
                    selected: false,
                    ncov_info: { pum: 211, pui: 546, pc: 242, d: 0, r: 3424 }
                },
                {
                    name: "Iligan City",
                    pos: [8.2280, 124.2452],
                    zoom: 11,
                    selected: false,
                    ncov_info: { pum: 667, pui: 121, pc: 323, d: 0, r: 5655 }
                }
            ]
        };
    }

    set_map_data = (place) => {
        let Arr = [];
        let map_data = {};
        (this.state.map_info || []).map((data, index) => {
            data.selected = false;
            if (place === data.name) {
                map_data = data;
                data.selected = true;
            }
            Arr.push(data);
        });
        this.setState({ map_info: Arr });
    }

    render_provinces = () => {
        return (
            <>
                <p class="h6 text-center text-info mt-4">
                    <div className="d-flex">
                        <h4><MdPlace /></h4>
                        <strong className="flex-grow-1">PROVINCE / CHARTERED CITY</strong>
                    </div>
                </p>
                <ul class="list-group list-group-flush">
                    {
                        (this.state.map_info || []).map((data, index) => {
                            return (
                                <a type="button" onClick={() => this.set_map_data(data.name)}>
                                    <li class={"list-group-item ".concat(data.selected ? "bg-dark text-light" : "")}>
                                        <strong>{data.name}</strong>
                                    </li>
                                </a>
                            )
                        })
                    }
                </ul>
            </>
        );
    }

    render_chart = () => {
        return (
            <>
                <h1>My Chart</h1>
                <MyChart />
            </>
        );
    }

    render_mainComponent() {
        return (
            <>
                <NavigationBar nav_active="daily-charts" />
                <br /><br /><br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 scroll">
                            {this.render_provinces()}
                        </div>

                        <div className="col-sm-7 bg-primary">
                            {this.render_chart()}
                        </div>

                        <div className="col-sm-2 bg-dark">
                            <h3>INFO</h3>
                        </div>


                    </div>
                </div>
                <Footer />
            </>
        );
    }

    render() {
        return (
            <>  
                {
                    this.render_mainComponent()
                }
            </>
        );
    }
}



const MyChart = () => {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    const lineChart = (
        // A react-chart hyper-responsively and continuusly fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '400px',
                height: '300px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )

    return lineChart;
}



export default DailyCharts;