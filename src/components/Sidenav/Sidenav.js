import React from "react";

import './Sidenav.scss';
import BarChart from '../charts/Bar-chart/Bar-chart'
import PieChart from '../charts/Pie-Chart/Pie-chart'

class Sidenav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			charts: this._getChartData()
		}
	}

	dragStartHandler = (ev) => {
		ev.dataTransfer.setData("text/plain", ev.target.id);
	};

	dragEndHandler = (ev) => {
		ev.dataTransfer.clearData();
	};

	render() {
		return (
			<section className="Sidenav u-shadow">
				<div className="Sidenav__wrapper">

					<section className="Sidenav-list">
						<ul className="Sidenav-list__container">
							<li>
								<i className="Sidenav__icon icon icon-update"/>
								<label>Update</label>
							</li>
							<li className="Sidenav-list__item--active">
								<i className="Sidenav__icon icon icon-bar-chart"/>
								<label>Templates</label>
							</li>
							<li>
								<i className="Sidenav__icon icon icon-work"/>
								<label>Work</label>
							</li>
						</ul>
					</section>

					<section className="Sidenav-body">

						<article className="Sidenav-body-item">
							<div className="Sidenav-body-item__header">
								<h4 className="u-no-margin">Charts</h4>
								<span>See all</span>
							</div>
							<div className="Sidenav-body-item__body">
								<div
									draggable="true"
									id="bar-1"
									onDragStart={(ev) => {
										this.dragStartHandler(ev)
									}}
									onDragEnd={event => this.dragStartHandler(event)}
								>
									<BarChart config={this.state.charts.bar}/>
								</div>
								<div
									draggable="true"
									id="pie"
									onDragStart={(ev) => {
										this.dragStartHandler(ev)
									}}
									onDragEnd={event => this.dragStartHandler(event)}
								>
									<PieChart config={this.state.charts.pie}/>
								</div>
								<div
									draggable="true"
									id="bar-2"
									onDragStart={(ev) => this.dragStartHandler(ev)}
									onDragEnd={event => this.dragEndHandler(event)}
								>
									<BarChart config={this.state.charts.bar}/>
								</div>
							</div>
						</article>

					</section>

				</div>
			</section>
		);
	}

	_getChartData() {
		return {
			bar: this._getBarChartConfig(),
			pie: this._getPieChartConfig()
		};
	}

	_getBarChartConfig() {
		return {
			...this._getChartConfig(),
			chart: {
				type: 'bar',
				backgroundColor: "rgba(0,0,0,0)"
			},
			series: [{
				color: "#757ce8",
				data: [1, 5, 3, 4]
			}]
		}
	}

	_getPieChartConfig() {
		return {
			...this._getChartConfig(),
			width: '150px',
			height: '120px',
			chart: {
				type: 'pie',
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				backgroundColor: 'rgba(0,0,0,0)'
			},
			plotOptions: {
				pie: {
					allowPointSelect: false,
					cursor: 'pointer',
					dataLabels: {
						enabled: false,
					},
					showInLegend: false
				}
			},
			series: [{
				name: 'Brands',
				data: [{
					name: 'Chrome',
					y: 61.41
				}, {
					name: 'Internet Explorer',
					y: 11.84
				}, {
					name: 'Firefox',
					y: 10.85
				}, {
					name: 'Edge',
					y: 4.67
				}, {
					name: 'Safari',
					y: 4.18
				}, {
					name: 'Other',
					y: 2.61
				}]
			}]
		}
	}

	_getChartConfig() {
		return {
			width: '150px',
			height: '120px',
			credits: {
				enabled: false
			},
			xAxis: {
				title: false,
				labels: {
					enabled: false
				}
			},
			yAxis: {
				title: false,
				labels: {
					enabled: false
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				enabled: false
			},
		}
	}
}

export default Sidenav;
