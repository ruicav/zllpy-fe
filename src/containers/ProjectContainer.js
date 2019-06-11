import React from 'react'
import { connect } from "react-redux"

class ProjectContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          Projetos
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)