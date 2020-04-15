import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes.js";
import $ from 'jquery';

class StudentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            section_select: true,
            sections: []
        }
    }

    componentWillMount = () => {
        document.title = "NCOV-19";
    }

    render_mainComponent() {
        return (
            <Switch>
                {routes.map((prop, key) => {
                    if (prop.layout === "/ncov19") {
                        return (
                            <Route
                                path={prop.layout + prop.path}
                                component={prop.component}
                                key={key}
                            />
                        );
                    }
                    return null;
                })}
                <Redirect from="/ncov19" to="/ncov19/dashboard" />
            </Switch>
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

export default StudentPage;
