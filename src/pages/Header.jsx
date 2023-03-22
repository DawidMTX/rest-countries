import classes from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getFlagsAcitions } from '../story/flag-story';



const Header = () => {

const dispatch = useDispatch();
const mode = useSelector(state => state.mode)
const switchMode = () => {
    dispatch(getFlagsAcitions.switchMode())
}
    return (
        <div className={classes.header}>
            <div className={classes.contener}>
                <h2 className={classes.title}>Where in the world?</h2>
                <button onClick={switchMode} className={classes.darkMode}>
                <FontAwesomeIcon icon={!mode ? faMoon : faSun} style={{marginRight: '10px'}}/>
                {!mode? 'Dark mode' : 'Light mode'}</button></div>

        </div>
    )
}

export default Header;