import React from 'react'

import {
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
  }
})

const ProjectItem = (project, timekeepers) => {
	const hours = [...timekeepers].filter(tk => tk.project === project.id)
		.reduce((acc, cur) => acc + cur.hours, 0)
	return (
		<ListItem>
			<Grid container direction="column" alignItems="flex-start">
				<ListItemText primary={project.name}/>
				<Typography variant="caption" gutterBottom>
					Horas apontadas: {hours}
				</Typography>
			</Grid>
		</ListItem>
	)
}

const ProjectsList = ({projects, timekeepers, classes}) => {
	return (
		<Grid container alignItems="center" justify="center" direction="column">
			<Card className={classes.card}>
				<List>
					{[...projects].map(p => (ProjectItem(p, timekeepers)))}
				</List>
			</Card>
		</Grid>		
	)
}

export default withStyles(style)(ProjectsList)