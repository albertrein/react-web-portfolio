import React, { Component } from 'react';
import Axios from 'axios';
import './styles.css'

export default class About extends Component{
	state = {
		aboutMe : []
	}

	async componentDidMount(){
		let response = await Axios.get('https://jsonblob.com/api/jsonBlob/3326234b-2c04-11ea-8649-790ffbe1acfc');
		this.setState({aboutMe : response.data.aboutMe});
	}

	render(){
		return (
			<div>
				<h1 class="title">Sobre</h1>
				<div class="content"><p class="text">{this.state.aboutMe}</p></div>
			</div>
		);
	}
}