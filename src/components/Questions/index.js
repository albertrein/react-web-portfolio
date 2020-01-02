import React, {Component} from 'react'
import axios from 'axios'
import './style.css'

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
						{this.state.questions.map( (question, i) => (
							<li key={i} onClick={() => {
										if( document.getElementById(i).style.display === "block" ){
											document.getElementById(i).style.display = "none";
										}else{
											document.getElementById(i).style.display = "block";
										}
									}}>
								<div class="quest">
									<span>{question.quest}</span>
								</div>
								<div  class="answer">
									<p id={i} >{question.answer}</p>								
								</div>

							</li>
						) )}
					</ul>
				</div>
			</div>
		);
	}
}