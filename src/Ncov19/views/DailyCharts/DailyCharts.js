//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import React, { Component } from 'react';
import { MdPlace } from 'react-icons/md';
import { IoIosStats } from 'react-icons/io';
import '../../../_css/sidebar_style.css';
import Chart from "react-apexcharts";

class DailyCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {

            // -------------------------------------------------------------
            /**
             *  Dummy data - Kai ra na data e change na gikan sa server, same lang ani ang format
             *  Note: This data must be sorted in ascending order
             *  from the server
             */
            incov_data: [
                // March 2
                {
                    name: "Bukidnon",
                    date: new Date("March 2, 2020"),
                    ncov_info: { pum: 1, pui: 2, pc: 2, d: 0, r: 0 }
                },
                {
                    name: "Camiguin",
                    date: new Date("March 2, 2020"),
                    ncov_info: { pum: 2, pui: 1, pc: 1, d: 0, r: 2 }
                },
                {
                    name: "Lanao del Norte",
                    date: new Date("March 2, 2020"),
                    ncov_info: { pum: 0, pui: 0, pc: 1, d: 0, r: 1 }
                },
                {
                    name: "Misamis Occidental",
                    date: new Date("March 2, 2020"),
                    ncov_info: { pum: 0, pui: 0, pc: 2, d: 0, r: 2 }
                },
                {
                    name: "Misamis Oriental",
                    date: new Date("March 2, 2020"),
                    ncov_info: { pum: 0, pui: 0, pc: 0, d: 0, r: 0 }
                },
                {
                    name: "Cagayan de Oro City",
                    date: new Date("March 2, 2020"),
                    ncov_info: { pum: 0, pui: 2, pc: 0, d: 0, r: 1 }
                },
                {
                    name: "Iligan City",
                    date: new Date("March 2, 2020"),
                    ncov_info: { pum: 2, pui: 1, pc: 0, d: 0, r: 2 }
                },


                // March 3
                {
                    name: "Bukidnon",
                    date: new Date("March 3, 2020"),
                    ncov_info: { pum: 3, pui: 6, pc: 10, d: 0, r: 7 }
                },
                {
                    name: "Camiguin",
                    date: new Date("March 3, 2020"),
                    ncov_info: { pum: 6, pui: 7, pc: 8, d: 1, r: 9 }
                },
                {
                    name: "Lanao del Norte",
                    date: new Date("March 3, 2020"),
                    ncov_info: { pum: 10, pui: 7, pc: 5, d: 0, r: 6 }
                },
                {
                    name: "Misamis Occidental",
                    date: new Date("March 3, 2020"),
                    ncov_info: { pum: 7, pui: 10, pc: 9, d: 0, r: 5 }
                },
                {
                    name: "Misamis Oriental",
                    date: new Date("March 3, 2020"),
                    ncov_info: { pum: 6, pui: 5, pc: 9, d: 0, r: 8 }
                },
                {
                    name: "Cagayan de Oro City",
                    date: new Date("March 3, 2020"),
                    ncov_info: { pum: 7, pui: 9, pc: 6, d: 0, r: 4 }
                },
                {
                    name: "Iligan City",
                    date: new Date("March 3, 2020"),
                    ncov_info: { pum: 5, pui: 3, pc: 10, d: 0, r: 8 }
                },


                // March 4
                {
                    name: "Bukidnon",
                    date: new Date("March 4, 2020"),
                    ncov_info: { pum: 16, pui: 20, pc: 10, d: 0, r: 19 }
                },
                {
                    name: "Camiguin",
                    date: new Date("March 4, 2020"),
                    ncov_info: { pum: 13, pui: 12, pc: 19, d: 0, r: 10 }
                },
                {
                    name: "Lanao del Norte",
                    date: new Date("March 4, 2020"),
                    ncov_info: { pum: 17, pui: 1, pc: 20, d: 0, r: 12 }
                },
                {
                    name: "Misamis Occidental",
                    date: new Date("March 4, 2020"),
                    ncov_info: { pum: 13, pui: 11, pc: 18, d: 0, r: 19 }
                },
                {
                    name: "Misamis Oriental",
                    date: new Date("March 4, 2020"),
                    ncov_info: { pum: 10, pui: 18, pc: 16, d: 0, r: 12 }
                },
                {
                    name: "Cagayan de Oro City",
                    date: new Date("March 4, 2020"),
                    ncov_info: { pum: 14, pui: 16, pc: 12, d: 0, r: 13 }
                },
                {
                    name: "Iligan City",
                    date: new Date("March 4, 2020"),
                    ncov_info: { pum: 17, pui: 12, pc: 15, d: 0, r: 12 }
                },


                // March 5
                {
                    name: "Bukidnon",
                    date: new Date("March 5, 2020"),
                    ncov_info: { pum: 20, pui: 15, pc: 22, d: 2, r: 18 }
                },
                {
                    name: "Camiguin",
                    date: new Date("March 5, 2020"),
                    ncov_info: { pum: 19, pui: 16, pc: 23, d: 0, r: 21 }
                },
                {
                    name: "Lanao del Norte",
                    date: new Date("March 5, 2020"),
                    ncov_info: { pum: 22, pui: 17, pc: 20, d: 0, r: 23 }
                },
                {
                    name: "Misamis Occidental",
                    date: new Date("March 5, 2020"),
                    ncov_info: { pum: 21, pui: 15, pc: 24, d: 0, r: 19 }
                },
                {
                    name: "Misamis Oriental",
                    date: new Date("March 5, 2020"),
                    ncov_info: { pum: 22, pui: 23, pc: 25, d: 1, r: 15 }
                },
                {
                    name: "Cagayan de Oro City",
                    date: new Date("March 5, 2020"),
                    ncov_info: { pum: 21, pui: 17, pc: 22, d: 0, r: 18 }
                },
                {
                    name: "Iligan City",
                    date: new Date("March 5, 2020"),
                    ncov_info: { pum: 19, pui: 24, pc: 19, d: 0, r: 15 }
                },


                // March 6
                {
                    name: "Bukidnon",
                    date: new Date("March 6, 2020"),
                    ncov_info: { pum: 35, pui: 25, pc: 30, d: 2, r: 29 }
                },
                {
                    name: "Camiguin",
                    date: new Date("March 6, 2020"),
                    ncov_info: { pum: 28, pui: 32, pc: 29, d: 2, r: 27 }
                },
                {
                    name: "Lanao del Norte",
                    date: new Date("March 6, 2020"),
                    ncov_info: { pum: 26, pui: 32, pc: 30, d: 2, r: 35 }
                },
                {
                    name: "Misamis Occidental",
                    date: new Date("March 6, 2020"),
                    ncov_info: { pum: 35, pui: 29, pc: 31, d: 2, r: 27 }
                },
                {
                    name: "Misamis Oriental",
                    date: new Date("March 6, 2020"),
                    ncov_info: { pum: 37, pui: 30, pc: 35, d: 2, r: 25 }
                },
                {
                    name: "Cagayan de Oro City",
                    date: new Date("March 6, 2020"),
                    ncov_info: { pum: 29, pui: 30, pc: 28, d: 2, r: 27 }
                },
                {
                    name: "Iligan City",
                    date: new Date("March 6, 2020"),
                    ncov_info: { pum: 32, pui: 30, pc: 29, d: 2, r: 35 }
                },
            ],
            // -------------------------------------------------------------

            // fixed
            place_info: [
                {
                    name: "Bukidnon",
                    selected: false
                },
                {
                    name: "Camiguin",
                    selected: false
                },
                {
                    name: "Lanao del Norte",
                    selected: false
                },
                {
                    name: "Misamis Occidental",
                    selected: false
                },
                {
                    name: "Misamis Oriental",
                    selected: false
                },
                {
                    name: "Cagayan de Oro City",
                    selected: false
                },
                {
                    name: "Iligan City",
                    selected: false
                }
            ],

            stat: [
                {
                    name: "Persons Under Moitoring",
                    selected: false
                },
                {
                    name: "Persons Under Investigation",
                    selected: false
                },
                {
                    name: "Positive Cases",
                    selected: false
                },
                {
                    name: "Deaths",
                    selected: false
                },
                {
                    name: "Recoveries",
                    selected: false
                },
            ],

            // line chart data
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#620ef1', '#ffc107', '#da0505', "#da5456", "#23a442"],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Daily Records',
                    align: 'left'
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 2
                },
                xaxis: {
                    categories: [],
                    title: {
                        text: 'Date'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Number'
                    },
                    min: 0,
                    max: 40
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                }
            },

            series: [
                {
                    name: "PUM",
                    data: []
                },
                {
                    name: "PUI",
                    data: []
                },
                {
                    name: "Positive Cases",
                    data: []
                },
                {
                    name: "Deaths",
                    data: []
                },
                {
                    name: "Recoveries",
                    data: []
                }
            ],

            // bar graph data
            options_bar: {
                chart: {
                    type: 'basic-bar',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#620ef1'],
                title: {
                    text: 'Statistics Bar Graph',
                    align: 'left'
                },
                colors: ['#620ef1'],
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 2
                },
                xaxis: {
                    categories: [],
                    title: {
                        text: 'PROVINCE / CHARTERED CITY'
                    }
                },
                yaxis: {
                    title: {
                        text: ''
                    }/*,
                    min: 0,
                    max: 40 */
                }
            },

            series_bar: [
                {
                    name: "",
                    data: []
                }
            ]

        };

        this.tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    }

    componentDidMount = () => {
        // initialize options bargraph data
        let Arr = [];
        (this.state.place_info || []).map(data => {
            Arr.push(data.name);
        });
        this.setState({
            options_bar: {
                ...this.state.options_bar, xaxis: {
                    categories: Arr, title: { text: "PROVINCE / CHARTERED CITY" }
                }
            }
        });



        //console.log("date now -> ",Date.now);
        //console.log("date new -> ", new Date());
        //console.log("dt state -> ", this.state.incov_data[0].date);
    }

    on_highlight = (p, state, s) => {
        let Arr = [];
        (state || []).map((data, index) => {
            data.selected = false;
            if (p === data.name)
                data.selected = true;
            Arr.push(data);
        });
        s === "place" ? this.setState({ place_info: Arr }) : this.setState({ stat: Arr });
    }

    //------------------------------------------------
    select_place = (place) => {
        this.on_highlight(place, this.state.place_info, 'place');

        // set daily map data
        // parse data for daily chart display
        let cat = [];
        let max = 10; let pum = []; let pui = []; let pc = []; let d = []; let r = [];
        (this.state.incov_data || []).map((data) => {
            if (data.name === place) {
                //console.log("cat -> ", data.date);
                cat.push(this.tmonth[data.date.getMonth()] + " " + data.date.getDate() + ", " + data.date.getFullYear())
                const pum_t = data.ncov_info.pum; const pui_t = data.ncov_info.pui;
                const pc_t = data.ncov_info.pc; const d_t = data.ncov_info.d;
                const r_t = data.ncov_info.r;

                pum.push(pum_t); pui.push(pui_t);
                pc.push(data.ncov_info.pc); d.push(d_t);
                r.push(r_t);

                pum_t > max ? max = pum_t : max = max; pui_t > max ? max = pui_t : max = max;
                pc_t > max ? max = pc_t : max = max; d_t > max ? max = d_t : max = max;
                r_t > max ? max = r_t : max = max;
            }
        });

        /*console.log("pum -> ", pum);
        console.log("pui -> ", pui);
        console.log("pc -> ", pc);
        console.log("d -> ", d);
        console.log("r -> ", r);
        console.log("cat -> ", cat);
        console.log('max -> ',max); */

        // set daily chart series
        let series = [
            {
                name: "PUM",
                data: pum
            },
            {
                name: "PUI",
                data: pui
            },
            {
                name: "Positive Cases",
                data: pc
            },
            {
                name: "Deaths",
                data: d
            },
            {
                name: "Recoveries",
                data: r
            }
        ];

        //console.log("series -> ", series);
        this.setState({
            series: series,
            options: {
                ...this.state.options,
                yaxis: { title: { text: "Number" }, min: 0, max: max + 5 },
                xaxis: { categories: cat, title: { text: 'Date' } },
                title: { text: place + " - Daily Records", align: 'left' }
            },
        });
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
                        (this.state.place_info || []).map((data, index) => {
                            return (
                                <a type="button" onClick={() => this.select_place(data.name)}>
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
                <br />
                <div className="row">
                    <div className="col-lg-1 col-xl-1"></div>
                    <div className="col-lg-10 col-xl-10 col-sm-12 col-md-12">
                        <div class="card">
                            <div className="card-body">
                                <Chart
                                    options={this.state.options}
                                    series={this.state.series}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-xl-1"></div>
                </div>
            </>
        );
    }

    // -----------------------------------------------

    select_stat = (st) => {
        this.on_highlight(st, this.state.stat, 'stat');

        const place_num = this.state.place_info.length;
        const latest_data = this.state
            .incov_data
            .slice(this.state.incov_data.length - place_num, this.state.incov_data.length);

        let cat = [];
        let sb = [];
        let max = 0;
        let color = '#620ef1';
        (latest_data || []).map(data => {
            cat.push(data.name);
            switch (st) {
                case "Persons Under Moitoring":
                    color = '#620ef1';
                    data.ncov_info.pum > max ? max = data.ncov_info.pum : max = max;
                    sb.push(data.ncov_info.pum);
                    break;
                case "Persons Under Investigation":
                    color = '#ffc107';
                    data.ncov_info.pui > max ? max = data.ncov_info.pui : max = max;
                    sb.push(data.ncov_info.pui);
                    break;
                case "Positive Cases":
                    color = '#da0505';
                    data.ncov_info.pc > max ? max = data.ncov_info.pc : max = max;
                    sb.push(data.ncov_info.pc);
                    break;
                case "Deaths":
                    color = "#da5456";
                    data.ncov_info.d > max ? max = data.ncov_info.d : max = max;
                    sb.push(data.ncov_info.d);
                    break;
                case "Recoveries":
                    color = '#23a442';
                    data.ncov_info.r > max ? max = data.ncov_info.r : max = max;
                    sb.push(data.ncov_info.r);
                    break;
            }
        });

        //console.log(color);
        this.setState({
            options_bar: {
                ...this.state.options_bar, xaxis: {
                    categories: cat, title: { text: "PROVINCE / CHARTERED CITY" }
                },
                yaxis: { title: { text: "" }, min: 0, max: max + 5 },
                colors: [color]
            },
            series_bar: [
                { name: st, data: sb }
            ]
        });




    }

    render_stats = () => {
        const data = this.state.incov_data[this.state.incov_data.length - 1];
        return (
            <>
                <p class="h6 text-center text-info mt-4">
                    <div className="d-flex">
                        <h4><IoIosStats /></h4>
                        <strong className="flex-grow-1 mt-2">STATISTICS</strong>
                    </div>
                    {this.tmonth[data.date.getMonth()] + " " + data.date.getDate() + ", " + data.date.getFullYear()}
                </p>
                <ul class="list-group list-group-flush">
                    {
                        (this.state.stat || []).map((data, index) => {
                            return (
                                <a type="button" onClick={() => this.select_stat(data.name)}>
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

    render_chart_bar = () => {
        return (
            <>
                <br />
                <div className="row">
                    <div className="col-lg-1 col-xl-1"></div>
                    <div className="col-lg-10 col-xl-10 col-sm-12 col-md-12">
                        <div class="card">
                            <div className="card-body">
                                <Chart
                                    options={this.state.options_bar}
                                    series={this.state.series_bar}
                                    type="bar"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-xl-1"></div>
                </div>
            </>
        )
    }

    // -----------------------------------------------


    render_mainComponent() {
        return (
            <>
                <NavigationBar nav_active="daily-charts" />
                <br /><br /><br />
                <div className="container-fluid mt-n3">
                    <div className="row">
                        <div className="col-sm-3">
                            {this.render_provinces()}
                        </div>

                        <div className="col-sm-9">
                            {this.render_chart()}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            {this.render_stats()}
                        </div>

                        <div className="col-sm-9">
                            {this.render_chart_bar()}
                        </div>
                    </div>
                </div>
                <br /><br />
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

export default DailyCharts;