import {A4SheetAction} from "../actions/a4sheet.actions.";

const initialState = {
	chartData: []
};

function a4SheetReducer(state = initialState, action) {

	switch (action.type) {
		case A4SheetAction.ADD_CHART:
			return {
				...state,
				chartData: [
					...state.chartData,
					action.payload
				]
			};
		default:
			return state
	}

}

export default a4SheetReducer;
