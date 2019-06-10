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
        redirectTo={()=>{}}
        authenticate={api.authenticate}
      />
    )
  }
}

// const { getToken } = auth.selectors

const mapStateToProps = state => ({
  // token: getToken(state),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...auth.actions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)