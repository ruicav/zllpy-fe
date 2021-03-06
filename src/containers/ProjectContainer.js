import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import jwt_decode from 'jwt-decode';

import ProjectsList from '../components/ProjectsList'
import api from '../api'
import { projects, timekeepers, select } from '../ducks'

class ProjectContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    api.getProjects()
      .then(projects => {
        this.props.actions.setProjects({ projects })
        return api.getTimekeepers()
      })
      .then(timekeepers => {
        this.props.actions.setTimekeepers({ timekeepers })
      })
  }

  render() {
    return (
      <ProjectsList
        projects={this.props.projects}
        timekeepers={this.props.timekeepers}
        isAdmin={this.props.isAdmin}
        selectProject={this.props.actions.selectProject}
      />
    )
  }
}

const { getProjects } = projects.selectors
const { getTimekeepers } = timekeepers.selectors

const mapStateToProps = state => ({
  projects: getProjects(state),
  timekeepers: getTimekeepers(state),
  isAdmin: jwt_decode(state.auth.token).role === 'admin'
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...projects.actions,
    ...timekeepers.actions,
    ...select.actions
  }, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)