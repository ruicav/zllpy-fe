import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import green from '@material-ui/core/colors/green'
import AuthContainer from '../containers/AuthContainer';

const theme = createMuiTheme({
  palette: {
    primary: green
  }
})

function App(props) {
  const { classes } = props
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact component={AuthContainer} />
        </Router>
      </MuiThemeProvider>
    </div>
  )
}

export default App
