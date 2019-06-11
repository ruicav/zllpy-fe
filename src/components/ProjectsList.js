import React from 'react'

import history from '../history'

import {
	Button,
	Card,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
	withStyles
} from '@material-ui/core'

const style = theme => ({
	card: {
    maxWidth: 342,
    padding: 16
	},
	button: {
		margin: 8
	}
})

const ProjectItem = (project, timekeepers, classes, isAdmin, selectProject) => {
	const goToTimekeeper = (p) => {
		selectProject({selected: p})
		history.push('/timekeeper')
	}

	const hours = [...timekeepers].filter(tk => tk.project === project.id)
		.reduce((acc, cur) => acc + cur.hours, 0)
	
	return (
		<ListItem>
			<Grid container direction="column" alignItems="flex-start">
				<ListItemText primary={project.name}/>
				<Typography variant="caption" gutterBottom>
					Horas apontadas: {hours}
				</Typography>
				{ isAdmin ? '' :
				(<Button
					size="small"
					variant="outlined"
					color="primary"
					onClick={()=> goToTimekeeper(project)}
					className={classes.button}
        >
          Apontar horas
        </Button>)}
			</Grid>
		</ListItem>
	)
}

const ProjectsList = ({projects, timekeepers, isAdmin, classes, selectProject}) => {
	return (
		<Grid container alignItems="center" justify="center" direction="column">
			<Card className={classes.card}>
				<List>
					{[...projects].map(p => (ProjectItem(p, timekeepers, classes, isAdmin, selectProject)))}
				</List>
			</Card>
		</Grid>		
	)
}

export default withStyles(style)(ProjectsList)