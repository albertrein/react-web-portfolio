import React, {Component} from 'react'
import axios from 'axios'

export default class Questions extends Component{
	state = {
		questions : []
	}

	async componentDidMount(){
		let response = await axios.get('https://jsonblob.com/api/jsonBlob/3326234b-2c04-11ea-8649-790ffbe1acfc');
		this.setState({questions : response.data.commom_questions});
	}

	render(){
		return (
			<div>
				<h1 class="title">Perguntas Frequentes</h1>
				<div class="content">
					<ul>
						{this.state.questions.map( question => (
							<li>{question.quest} »» {question.answer}</li>
						) )}
					</ul>
				</div>
			</div>
		);
	}
}