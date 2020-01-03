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
				<a target="_blank" href="https://github.com/albertrein"><img
				srcset={
					Img120 + ' 120w, ' + Img64 + ' 64w, ' + Img32 + ' 32w'}
				sizes="
					(max-width: 300px) 32px,
					(max-width: 600px) 64px,
					(min-width: 601px) 120px
				"
				src={Img120} /></a>
				
			</div>
		</div>
	</div>
);


export default footer;