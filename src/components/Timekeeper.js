import React from 'react'

import {
	Button,
	Card,
  Grid,
  Typography,
  TextField,
	withStyles
} from '@material-ui/core'

const style = theme => ({
	card: {
    maxWidth: 342,
    padding: 16
	},
	button: {
		margin: 8
  },
  title: {
    textAlign: 'center'
  }
})

const Timekeeper = ({ project, classes, createTimekeeper }) => {
  const [values, setValues] = React.useState({
    workingTime: '',
    workingDate: ''
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const disable = ({workingTime, workingDate}) => {
    return !(workingTime && workingDate) || workingTime < 1
  }

  return (
    <Grid container alignItems="center" justify="center" direction="column">
      <Card className={classes.card}>
        <Grid item xs={12}>
          <Typography variant="h6" noWrap className={classes.title}>
            Apontar horas em {project.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="workingHour"
            value={values.workingTime}
            type="number"
            onChange={handleChange('workingTime')}
            margin="normal"
            placeholder="Horas"
            fullWidth
            error={ values.workingTime && values.workingTime<1 }
          />
        </Grid>
        <Grid>
        <TextField
          id="dateWork"
          label="Dia"
          type="date"
          value={values.workingDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange('workingDate')}
          fullWidth
        />
        </Grid>
        <Grid container justify="flex-end">
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() =>
              createTimekeeper ({
                workingTime: values.workingTime,
                workingDate: values.workingDate,
                projectId: project.id
              })}
            className={classes.button}
            disabled={disable(values)}
          >
            Apontar
          </Button>
        </Grid>
      </Card>
    </Grid>
  )
}

export default withStyles(style)(Timekeeper)
