import React from 'react'
import './style.css'
import Img120 from './media/GitHub-Mark-120px-plus.png'
import Img64 from './media/GitHub-Mark-32px.png'
import Img32 from './media/GitHub-Mark-64px.png'

let footer = _ => (
	<div class="footer">
		<h1 class="footer-title">Vamos Conversar?</h1>
		<div class="footer-info">
			<div class="footer-contact">
				<i>&#9993;</i>
				<span>guilhermealberto8@gmail.com</span>
			</div>
			<div class="footer-contact">
				<i>&#9990;</i>
				<span>(51) 98518-7841</span>
			</div>
			<div class="footer-contact">
				<img src={Img120} />
				<span>(51) 98518-7841</span>
			</div>
		</div>
	</div>
);


export default footer;