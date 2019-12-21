import React, {Component} from 'react';
import GithubAPI from '../../services/api/Github'

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
//<span>This is Main {this.state.albertrein.name}!</span><img alt="my-self" src={this.state.albertrein.img_perfil}></img>

	render(){
		return (
			<div>
				{this.state.albertrein.map(repositorio => (
					<div key={repositorio.id}>{repositorio.name} »» {repositorio.language}</div>
				))}				
			</div>
		);
	}
}
