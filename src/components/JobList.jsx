import { JobPosition } from './JobPosition';
import { useSelector,useDispatch } from "react-redux";
import { selectVisiblePositions } from "../store/positions/position.selectors";
import { addFilter } from "../store/filters/filters.actions";
import { selectFilters } from "../store/filters/filters.selectors";

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilter = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePositions(state,currentFilter))
  
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export {JobList};
