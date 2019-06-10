import React from 'react'

import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  Card,
  Typography,
  withStyles,
  Button
} from '@material-ui/core'

import { Visibility, VisibilityOff }from '@material-ui/icons/'

const style = theme => ({
  card: {
    maxWidth: 342,
    padding: 16
  },
  title: {
    textAlign: 'center'
  },
  loginButton: {
    margin: 8
  }
})

const Auth = ( { setToken, redirectTo, authenticate, classes } ) => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const disableLogin = ({email, password}) => {
    return !(email && password)
  }

  const login = ({email, password}) => {
    authenticate({email, password})
  }

  return (
    <Grid container alignItems="center" justify="center" direction="column">
      <Card className={classes.card}>
        <Grid item xs={12}>
          <Typography variant="h6" noWrap className={classes.title}>
            Zallpy Timekeeper
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="user-email"
            label="E-mail"
            value={values.email}
            type="email"
            onChange={handleChange('email')}
            margin="normal"
            fullWidth
          />   
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="adornment-password">Senha</InputLabel>
            <Input
              id="adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid container justify="flex-end">
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={()=>login(values)}
            className={classes.loginButton}
            disabled={disableLogin(values)}
          >
            Entrar
          </Button>
        </Grid>
      </Card>        
    </Grid>
  )
}

export default withStyles(style)(Auth)