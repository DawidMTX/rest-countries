import FilterByRegion from "../components/FilterByRegion";
import SearchCountry from "../components/SearchCountry";
import Country from './../components/Country'
import classes from './HomePage.module.css'



const HomePage = () => {

    return (
        <div className={classes.home}>
            <div className={classes.contener}>
                <SearchCountry />
                <FilterByRegion />
            </div>
            <Country />
        </div>
    )
}

export default HomePage;