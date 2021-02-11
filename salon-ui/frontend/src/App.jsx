import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
	const classes = useStyles();
	const handleChange = (event, newValue) => {
	    
	  };
	return (
		<Router>
			<AppBar position="static">
				<Container maxWidth="lg">
				  <Toolbar>
				    <Typography variant="h6" className={classes.title}>
				      Ar Salon &amp; Day Spa
				    </Typography>
				  </Toolbar>
			  </Container>
			</AppBar>
		</Router>
		)
}
