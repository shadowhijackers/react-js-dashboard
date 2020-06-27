import React from "react";

import './A4-sheet.scss';

class A4Sheet extends React.Component{

	drop = (ev)=>{
		ev.preventDefault();
		const data = ev.dataTransfer.getData("chart");
		const clonedNode = document.getElementById(data);
		ev.target.appendChild(clonedNode);
	};

	render() {
		return (
			<div className="A4Sheet" onDrop={(ev)=>{this.drop(ev)}} onDragOver={(ev)=>ev.preventDefault()}>
				<page size="A4" />
			</div>
		);
	}
}

export default A4Sheet;
