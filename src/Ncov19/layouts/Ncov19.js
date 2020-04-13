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

    }

    set_section = (val) => {
        //console.log(val);
        /*$.post("/api/v1/admin/set_section", { section_id: val },(data) => {
            //console.log(data);
            if (data.status === "success")
                this.setState({ section_select: false, loading: true });
        }).fail((data, textStatus, xhr) => {
            console.log("STATUS: " + xhr);
            //console.log(data);
        }).always(() => {
            console.log('ended');
            //console.log(this.state);
        }); */
    }


    render_mainComponent() {
        return (
            <Switch>
                {routes.map((prop, key) => {
                    if (prop.layout === "/") {
                        return (
                            <Route
                                path={/*prop.layout + */prop.path}
                                component={prop.component}
                                key={key}
                            />
                        );
                    }
                    return null;
                })}
                <Redirect from="/" to="/dashboard" />
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
