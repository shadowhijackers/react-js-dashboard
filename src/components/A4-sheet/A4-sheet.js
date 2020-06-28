import React from "react";

import './A4-sheet.scss';

class A4Sheet extends React.Component{

	dropHandler = (ev)=>{
		ev.preventDefault();
		const data = ev.dataTransfer.getData("text/plain");
		const clonedNode = document.getElementById(data);
		if(!/A4Sheet__chart/.test(clonedNode.className))clonedNode.className += ' A4Sheet__chart';
		const box = clonedNode.getBoundingClientRect();
		clonedNode.style.left = (ev.clientX - box.width/2) + "px";
		clonedNode.style.top = (ev.clientY - box.height/2) + "px";
		ev.target.appendChild(clonedNode);
	};

	dragOVerHandler = (ev)=>{
		ev.preventDefault();
		ev.dataTransfer.dropEffect = "move";
	};

	render() {
		return (
			<div className="A4Sheet">
				<div
					className="A4Sheet__page"
					onDrop={(ev)=>{this.dropHandler(ev)}}
					onDragOver={(ev)=>this.dragOVerHandler(ev)}
				/>
			</div>
		);
	}
}

export default A4Sheet;
