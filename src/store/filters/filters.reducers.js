import { ADD_FILTER, CLEAR_FILTER,REMOVE_FILTER } from "./filters.actions";

const initialState = []

export const filterReducer = (state=initialState,action) => {
	switch (action.type) {
		
		case ADD_FILTER:{
			// Если при нажатии фильтра нет в стейте, ...
			if(!state.includes(action.filter)){
				// Возвращаем прошлый стейт и добавляем то, на что нажали
				return [...state,action.filter]
			}else {
				return state
			}
			
		}
		
		case REMOVE_FILTER:{
			// Фильтруем фильтры
			return state.filter((item) => item !== action.filter)
		}
		
		case CLEAR_FILTER:{
			return initialState;
		}
		
		default:{
			return state
		}
	}
}
