import { useDispatch } from 'react-redux'
import { getFlagsAcitions } from '../story/flag-story';
import classes from './FilterByRegion.module.css'

const FilterByRegion = () => {
    const dispatch = useDispatch();

    const selectedRegion = (event) => {
        dispatch(getFlagsAcitions.filterData(event.target.value))
    }

    return (
        <select className={classes.panel} onChange={selectedRegion} defaultValue="Filter by region">
            <option disabled value="Filter by region" >Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}

export default FilterByRegion;