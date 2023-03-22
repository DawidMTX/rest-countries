import { useRef } from "react"
import { useDispatch } from "react-redux";
import { getFlagsAcitions } from "../story/flag-story";
import classes from './SearchCountry.module.css';


const SearchCountry = () => {
    const dispatch = useDispatch();
    const countryName = useRef();
   

    const getCountryName = (event) => {
        event.preventDefault();
        const country = countryName.current.value;
        if( country.trim() === 0){
            return
        }else{
            dispatch(getFlagsAcitions.searchData(country))
        }

    }

    return(
        <form onChange={getCountryName} className={classes.form} >
        <input className={classes.search} type="text" name="searchCountry" placeholder={ "Search for a country" }ref={countryName} />
        </form>
        
    )
}

export default SearchCountry;