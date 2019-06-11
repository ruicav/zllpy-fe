import React from 'react'
import { connect } from "react-redux"

import { select } from '../ducks'

import Timekeeper from '../components/Timekeeper'

import api from '../api'

class TimekeeperContainer extends React.Component {
  render() {
    return (
      <Timekeeper
        project={this.props.project}
        createTimekeeper={ api.createTimekeeper }
      />
    )
  }
}

const mapStateToProps = state => ({
  project: state.select.project
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimekeeperContainer)