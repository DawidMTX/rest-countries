
import classes from './FlagInfo.module.css'
import { useNavigate } from 'react-router-dom'


const FlagInfo= (props) => {

    const navigate = useNavigate();
   
    const showDetails = () => {
       navigate(`detail/${props.name}`)
    }
    
    return(
        <div className={classes.contener} onClick={showDetails}>
        <div className={classes.flag} style={{backgroundImage:`url(${props.flag})`}}></div>
        <div className={classes.content}>
            <h1>{props.name}</h1>
            <p>Population: {new Intl.NumberFormat().format(props.population)}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
        </div>
        </div>
    )
}

export default FlagInfo;