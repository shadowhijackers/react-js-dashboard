export class ChartService {

	static getChartData() {
		return {
			bar: this.getBarChartConfig(),
			pie: this.getPieChartConfig()
		};
	}

	static getBarChartConfig() {
		return {
			...this.getChartConfig(),
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

	static getPieChartConfig() {
		return {
			...this.getChartConfig(),
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

	static getChartConfig() {
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
