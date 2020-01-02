import React, {Component} from 'react';
import GithubAPI from '../../services/api/Github'
import './style.css'

export default class Main extends Component{
	state = {
		albertrein: []
	};

	async componentDidMount(){		
		let response = await GithubAPI.repoDrops();
		this.setState({albertrein: response});
	}

	render(){
		return (
			<div class="repos-content">
				{this.state.albertrein.map(repo => (
					<a key={repo.id} href={repo.svn_url} target="_blank" rel = "noopener noreferrer">
						<div class={'repository ' + repo.language} >
							<p class="title" >{repo.name}</p>
							<p class="description">{repo.description}</p>
						</div>
					</a>
				))}
			</div>
		);
	}
}
