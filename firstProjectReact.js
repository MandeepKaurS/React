import React from "react";
import ReactDOM from "react-dom";

const page=(
	<div>
		<img src="" alt="logo"/>
		<h1>Fun Facts about React</h1>
		<ul>
				<li>Was first created in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 10k stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprises apps, including mobile apps</li>
		</ul>
	</div>
)

ReactDOM.render(page, document.getElementById("root"));