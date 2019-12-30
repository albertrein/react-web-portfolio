import React, {Component} from 'react';
import GithubAPI from '../../services/api/Github'
import './style.css'

export default class Main extends Component{
	state = {
		albertrein: []
	};

	async componentDidMount(){		
		// let response = await GithubAPI.headerDrops();
		// this.setState({albertrein: response});
		// console.log(this.state);
		
		let response = await GithubAPI.repoDrops();
		this.setState({albertrein: response});
		console.log(response);
	}

	render(){
		return (
			<div class="repos-content">
				{this.state.albertrein.map(repo => (
					<div class={'repository ' + repo.language} key={repo.id}>
						<p class="title" >{repo.name}</p>
						<p class="description">{repo.description}</p>
					</div>
				))}
			</div>
		);
	}
}
