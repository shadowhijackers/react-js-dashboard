const SidenavAction = Object.freeze({
	REMOVE_CHART: '[SIDENAV] REMOVE Chart',
});

const removeChart = (payload)=>{
	return {
		type: SidenavAction.REMOVE_CHART,
		payload
	}
};

export {
	removeChart,
	SidenavAction
}
