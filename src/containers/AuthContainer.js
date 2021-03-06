import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Auth from '../components/Auth'
import { auth } from '../ducks'

import api from '../api'

class AuthContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Auth
        setToken={this.props.actions.setToken}
        authenticate={api.authenticate}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...auth.actions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)