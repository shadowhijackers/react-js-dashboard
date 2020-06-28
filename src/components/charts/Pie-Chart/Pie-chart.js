import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class PieChart extends React.Component {

	constructor(props) {
		super(props);
		this.chartComponent = React.createRef();
		this.state = {
			config: this.props.config
		}
	}

	componentDidMount() {
		const container = this.chartComponent.current.container.current;
		container.style.height = this.state.config.height;
		container.style.width = this.state.config.width;
		this.chartComponent.current.chart.reflow();
	}

	render() {

		const config = this._getConfig();

		return (
			<HighchartsReact
				highcharts={Highcharts}
				options={config}
				ref={ this.chartComponent}
			/>
		)
	}


	_getConfig() {
		return {
			chart: {
				type: "pie"
			},
			title: {
				text: ''
			},
			...this.state.config
		}
	}

}

export default PieChart;
