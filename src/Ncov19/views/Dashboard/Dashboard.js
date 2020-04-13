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


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            map_data: {
                name: '',
                pos: [8.0202, 124.6857],
                zoom: 8.45
            },
            ncov_info: { pum: 0, pui: 0, pc: 0, d: 0, r: 0 },
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
            ],
            facilities: [],
            cache_key: "pui_per-facility",
            ncov_info_sidebar: 'cm' // f = facility, cm = city/municipality
        };

        this.tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        this.tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    }

    componentDidMount = () => {
        this.update_time();
        try {
            this.set_facilities_data_api();
        } catch (err) { }
    }

    request_to_NCOV_api = () => {
        $.get("https://ncovph.com/api/pui/per-facility", (data) => {
            try {
                //console.log(data);
                if (data.length !== 0) {
                    localStorage.setItem(this.state.cache_key, JSON.stringify(data));
                    localStorage.setItem(this.state.cache_key + ':ts', Date.now());
                }
            } catch (err) { console.log('error request -> ', err) }
        }).fail((data, textStatus, xhr) => {
            console.log("STATUS: " + xhr);
            //console.log(data);
        }).always(() => {
            console.log('ended');
        });
    }

    // set facilities data and save to cache which exprires every 15 mins to update the content
    set_facilities_data_api = () => {
        let expiry = 15 * 60;
        let whenCached = localStorage.getItem(this.state.cache_key + ':ts');
        console.log('when cached -> ', whenCached);
        //localStorage.removeItem(this.state.cache_key + ':ts');
        let age = 0;
        let err = false;
        if (whenCached !== undefined || whenCached !== null) {
            age = (Date.now() - whenCached) / 1000
        } else
            err = true;
        console.log("expr -> ", age);
        console.log("expr -> ", expiry);
        if (age < expiry) {
            //let response = new Response(new Blob([cached]))
            //return Promise.resolve(response)
            console.log("--cache not yet expired--");
            if (err) {
                console.log("err -> undefined ts");
                this.request_to_NCOV_api();
            }
        } else {
            // request data to api again
            console.log("--request data to API--");
            // request to api and save data to cache
            this.request_to_NCOV_api();
        }

        let Arr = [];
        const facilities = JSON.parse(localStorage.getItem(this.state.cache_key));
        if (facilities === undefined || facilities === null) {
            console.log("--facilities is undifined--");
            return;
        }
        (facilities || []).map((data) => {
            const region = data.metadata.raw_data.region;
            if (region === "Northern Mindanao") {
                Arr.push({
                    name: data.facility.name,
                    pos: [data.facility.coordinates.lat, data.facility.coordinates.lng],
                    zoom: 17,
                    selected: false,
                    ncov_info: { pui: data.total }
                });
            }
        });
        this.setState({ facilities: Arr });
    }

    update_time = () => {
        let d = new Date();
        let nday = d.getDay();
        let nmonth = d.getMonth();
        let ndate = d.getDate();
        let nyear = d.getYear();
        let nhour = d.getHours();
        let nmin = d.getMinutes();
        let nsec = d.getSeconds();
        let ap = "";

        if (nyear < 1000) nyear = nyear + 1900;

        if (nhour == 0) { ap = " AM"; nhour = 12; }
        else if (nhour <= 11) { ap = " AM"; }
        else if (nhour == 12) { ap = " PM"; }
        else if (nhour >= 13) { ap = " PM"; nhour -= 12; }

        if (nmin <= 9) { nmin = "0" + nmin; }
        if (nsec <= 9) { nsec = "0" + nsec; }

        document.getElementById('clockbox').innerHTML = "" + this.tday[nday] + ", " + this.tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + ap + "";
        setTimeout(() => {
            this.update_time();
        }, 1000);
        //setTimeout(update_time(), 1000);
    }

    reset_map_info = () => {
        let Arr = [];
        (this.state.map_info || []).map((data) => {
            if (data.selected)
                data.selected = false;
            Arr.push(data);
        });
        this.setState({ map_info: Arr });
    }

    reset_facility_info = () => {
        let Arr = [];
        (this.state.facilities || []).map((data) => {
            if (data.selected)
                data.selected = false;
            Arr.push(data);
        });
        this.setState({ facilities: Arr });
    }

    set_map_data = (place) => {
        this.reset_facility_info();
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
        this.setState({ ncov_info: map_data.ncov_info, map_data: { name: map_data.name, pos: map_data.pos, zoom: map_data.zoom }, map_info: Arr, ncov_info_sidebar: 'cm' });
    }

    set_data_facilities = (place) => {
        this.reset_map_info();
        let Arr = [];
        let map_data = {};
        (this.state.facilities || []).map((data, index) => {
            data.selected = false;
            if (place === data.name) {
                map_data = data;
                data.selected = true;
            }
            Arr.push(data);
        });
        this.setState({ ncov_info: map_data.ncov_info, map_data: { name: map_data.name, pos: map_data.pos, zoom: map_data.zoom }, facilities: Arr, ncov_info_sidebar: 'f' });
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

    ncov_info_header = () => {
        return (
            <>
                <p class="h3 text-center text-info mt-4"> <IoIosStats />STATISTICS</p>
                <p class="text-center text-light" style={{ fontSize: '9pt' }}> <strong>As of</strong></p>
                <p class="text-center text-light mt-n3" style={{ fontSize: '9pt' }} id="clockbox"></p>
            </>
        );
    }

    render_province_info = () => {
        return (
            <>
                <div class="d-flex flex-column">
                    {this.ncov_info_header()}
                    <div className="card text-center border-top-0 pt-2 pb-2">
                        <h6 className="card-title"><strong>PUM</strong></h6>
                        <h3 className="card-text text-primary">
                            <CountUp
                                end={this.state.ncov_info.pum}
                                duration={2}
                            />
                        </h3>
                    </div>

                    <div className="card text-center border-top-0 pt-2 pb-2 mt-2">
                        <h6 className="card-title"><strong>PUI</strong></h6>
                        <h3 className="card-text text-warning">
                            <CountUp
                                end={this.state.ncov_info.pui}
                                duration={2}
                            />
                        </h3>
                    </div>

                    <div className="card text-center border-top-0 pt-2 pb-2 mt-2">
                        <h6 className="card-title"><strong>POSITIVE CASES</strong></h6>
                        <h3 className="card-text text-danger">
                            <CountUp
                                end={this.state.ncov_info.pc}
                                duration={2}
                            />
                        </h3>
                    </div>

                    <div className="card text-center border-top-0 pt-2 pb-2 mt-2">
                        <h6 className="card-title"><strong>DEATHS</strong></h6>
                        <h3 className="card-text text-danger">
                            <CountUp
                                end={this.state.ncov_info.d}
                                duration={2}
                            />
                        </h3>
                    </div>

                    <div className="card text-center border-top-0 pt-2 pb-2 mt-2">
                        <h6 className="card-title"><strong>RECOVERIES</strong></h6>
                        <h3 className="card-text text-success">
                            <CountUp
                                end={this.state.ncov_info.r}
                                duration={2}
                            />
                        </h3>
                    </div>
                    <br />
                </div>

            </>
        );
    }

    render_facility_info = () => {
        return (
            <>
                <div class="d-flex flex-column">
                    {this.ncov_info_header()}
                    <div className="card text-center border-top-0 pt-2 pb-2 mt-2">
                        <h6 className="card-title"><strong>PUI</strong></h6>
                        <h3 className="card-text text-warning">
                            <CountUp
                                end={this.state.ncov_info.pui}
                                duration={2}
                            />
                        </h3>
                    </div>
                    <br />
                </div>

            </>
        );
    }

    render_facilities = () => {
        return (
            <>
                <p class="h6 text-center text-info mt-4">
                    <div className="d-flex">
                        <h4><MdPlace /></h4>
                        <strong className="flex-grow-1">List of Facilities</strong>
                    </div>
                </p>
                <ul class="list-group list-group-flush">
                    {
                        (this.state.facilities || []).map((data, index) => {
                            return (
                                <a type="button" onClick={() => this.set_data_facilities(data.name)}>
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

    render_mainComponent() {
        return (
            <>
                <NavigationBar nav_active="home" />
                <br /><br /><br />
                <div className="container-fluid mt-n3">
                    <div className="row">
                        <div className="col-sm-3 scroll">
                            { this.render_provinces() }
                            { this.render_facilities() }
                        </div>

                        <div className="col-sm-7 bg-primary">
                            <LeafletMapView mapData={this.state.map_data} />
                        </div>

                        <div className="col-sm-2 bg-dark">
                            {
                                this.state.ncov_info_sidebar === 'cm'
                                    ? this.render_province_info()
                                    : this.render_facility_info()
                            }
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



export default Dashboard;