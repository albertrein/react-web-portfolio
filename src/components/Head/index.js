import React, {Component} from 'react'
import GithubAPI from '../../services/api/Github'
import "./style.css"
import backgroundHeader from "./header-background.jpg"

export default class Head extends Component{
	state = {albertrein: []};

	async componentDidMount(){
		let response = await GithubAPI.headerDrops();
		this.setState({albertrein: response});
	}
	
	render(){
		return(
			<div class="header">
				<img class="background-img" alt="background" src={backgroundHeader} />
				<div class="head-info">
					<img alt="perfil" src={this.state.albertrein.img_perfil} />
					<div class="head-text">
						<p>{this.state.albertrein.name}</p>
						<p>{this.state.albertrein.description}</p>
					</div>
				</div>
			</div>
		);
	}
}