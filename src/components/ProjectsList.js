import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/getProjectsAction";

export class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return(
      <div />
    )
  }
}
const mapStateToProps = store => ({ projects: store.projects });
export default connect(
  mapStateToProps,
  { fetchProjects }
)(ProjectsList);
