import React from "react";

import './Header.scss';

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.navigations = this._getNavigations();
	}

	_getNavigations(){
		return [
			{
				path: '/',
				name: 'Home'
			},
			{
				path: '/file',
				name: 'File'
			},
			{
				path: '/resize',
				name: 'Resize'
			},
			{
				path: '/changes',
				name: 'All changes saved'
			}
		]
	}
	render() {

		const navigationElements = this.navigations.map((nav, i)=>{
			return <li key={i}>{nav.name}</li>
		});

		return (
			<header className="Header u-shadow">
				<div className="Header__wrapper">

					<section className="Header-left-menu">
						<i className="Header-left-menu__icon icon icon-menu"/>
						<nav>
							<ul className="Header-left-menu__list">
								{navigationElements}
							</ul>
						</nav>
					</section>

				</div>
			</header>
		);
	}
}

export default Header;
