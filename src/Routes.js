import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import App from './App';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Career from './components/Career/Career';

const Routes = ()=>(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
			<Route exact path='/career' component={Career}/>
		</Switch>
	</BrowserRouter>
	)

export default Routes;