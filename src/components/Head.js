import React, {Component} from 'react'
import GithubAPI from '../services/api/Github'

export default class Head extends Component{
	state = {albertrein: []};

	async componentDidMount(){
		let response = await GithubAPI.headerDrops();
		this.setState({albertrein: response});
	}
	
	render(){
		return(
			<p >asdasdasd</p>
		);
	}
}