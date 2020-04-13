import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { history } from '../_helper';
import $ from 'jquery';
import queryString from 'query-string';

export function withAuth(ComponentToProtect) {
  return class extends Component {
    
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    /*componentDidMount() {
      fetch('/api/v1/user/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
            console.log(res);
          } else {
            console.log("error!!");
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }*/

    componentWillMount() {
      // cheeck invitation code
      const parsed_search = queryString.parse(this.props.history.location.search);
      if (parsed_search.code && this.props.location.pathname === '/student/invitation')
        window.localStorage.setItem('invitation_code', parsed_search.code);

      console.log("props --->> ");
      console.log(this.props.location.pathname);
      console.log(this.props.match.url);
      $.get("/api/v1/user/checkToken",  // url
        (data, textStatus, jqXHR) => {  // success callback
          console.log(data);
          if (data.status === "success" && this.props.match.url === data.data) {
            this.setState({ loading: false });
            console.log("equal");
          } else if (data.status === "success" && this.props.match.url !== data.data) {
            this.setState({ loading: true });
          } else
            this.setState({ loading: false, redirect: true });
      });
    }


    render() {
      const { loading, redirect } = this.state;
      
      if (loading) {
        return <h1></h1>;
      }

      if (redirect) {
        return <Redirect to="/?_rdlgt=1" />;
      }

      return <ComponentToProtect {...this.props} />;
    }
  }
}