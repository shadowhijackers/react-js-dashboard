import React from "react";

import './Dashboard.scss';
import Header from "../../components/Header/Header";
import Sidenav from "../../components/Sidenav/Sidenav";
import A4Sheet from "../../components/A4-sheet/A4-sheet";

class Dashboard extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			isMenuOpened: true
		};
	}

	toggleMenu = (ev)=>{
		this.setState({
			...this.state,
			isMenuOpened: !this.state.isMenuOpened
		});
	};

	render() {

		return (
			<div className="Dashboard">
				<div>
					{React.createElement(Header, {toggleMenuCallBack: this.toggleMenu})}
				</div>
				<div className="Dashboard-body">
					<section className="Dashboard-body__side-nav">
						<Sidenav toggleSideNavBody={this.state.isMenuOpened} />
					</section>
					<main className="Dashboard-body__content">
						<A4Sheet />
					</main>
				</div>
			</div>
		);
	}

}
export default Dashboard;
