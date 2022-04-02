export const selectVisiblePositions = (state,filters=[]) => {
	// Если фильтры не выбраны - возвращаем обычный массив
	if(filters.length === 0){
		return state.positions
	} else {
		return state.positions.filter((position) => {
			
			const positionFilters = [].concat(
				position.role,
				position.level,
				...position.languages,
				...position.tools
				)
			return filters.every((filter) => positionFilters.includes(filter))
		})
	}
}
