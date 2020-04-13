import React, { Component } from 'react';
import $ from 'jquery';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
import '../../../_css/article.css';
//import Editor from './Editor';
import { IoIosCompass } from 'react-icons/io';

class ArticlesTeacher extends Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    renderNavigation() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse"
                        className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>

                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" 
                        data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/student/dashboard">Return To Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    renderContents(contents, index, topic_num) {
        return (contents || []).map((content, i) => {
            return (
                <li>
                    <Link id={"element" + index + i} className={"element" + index + i} to={"element" + index + i} spy={true}
                        onClick={() => this.contentsScroll(topic_num, content) }
                        smooth={true} duration={300}>
                        <div class="d-flex">
                            <div><span class="badge badge-warning">{topic_num}.{content.subtopic_num}</span></div>
                            <div class="flex-grow-1 ml-1">{content.subtopic_name}</div>
                        </div>
                    </Link>
                </li>
            )
        });
    }

    renderSideBarTopics() {
        //console.log("Hello world");
        return (this.state.topic_list || []).map((topic, index) => {
            const { topic_name, contents, topic_num } = topic;
            return (
                <>
                    <li>
                        <a href={"#topic_" + index + "_menu"} data-toggle="collapse"
                         aria-expanded="false" className="dropdown-toggle">
                            <div class="d-flex">
                                <div><span class="badge badge-secondary">{topic_num}</span></div>
                                <div class="flex-grow-1 ml-1">{topic_name}</div>
                            </div>
                        </a>
                        <ul className="collapse list-unstyled" id={"topic_" + index + "_menu"}>
                            {this.renderContents(contents, index, topic.topic_num)}
                        </ul>
                    </li>
                </>
            )
        });
    }

    render() {

        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });

        return (
            <>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Bootstrap Sidebar</h3>
                        </div>

                        <ul className="list-unstyled components">
                            <p>Dummy Heading</p>
                            <li>
                                <a href="#" className="">
                                    <div class="d-flex">
                                        <div><IoIosCompass/></div>
                                        <div class="flex-grow-1 ml-1">Cagayan de Oro City</div>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    <div id="content" className="active">
                        {this.renderNavigation()}
                        



                    </div>
                </div>
            </>
        );
    }
}

export default ArticlesTeacher;