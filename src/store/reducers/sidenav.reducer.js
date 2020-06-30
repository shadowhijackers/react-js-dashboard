import {SidenavAction} from "../actions/sidenav.actions";

const initialState = {
	chartData: Array.from({length: 3}, (val, i) => {
		return {
			id: i,
			type: i % 2 === 0 ? 'bar' : 'pie'
		}
	})
};

function sideNavReducer(state = initialState, action) {

	switch (action.type) {

		case SidenavAction.REMOVE_CHART:
			const index = state.chartData.findIndex((chart)=>chart.id === action.payload.id )
			state.chartData.splice(index, 1);
			return {
				...state,
				payload: action.payload
			};

		default:
			return state
	}

}

export default sideNavReducer;
