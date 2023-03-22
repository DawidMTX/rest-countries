import { useEffect, useState } from "react";
import classes from './Country.module.css'
import { useSelector } from "react-redux";
import FlagInfo from "./FlagInfo";


const Country = () => {
    const [flags, setFlags] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const apiAdress = useSelector(state => state.selectCountry)
    const searchName = useSelector(state => state.searchName)
   


    const getCountryDate = async () => {

    

        setLoading(true)
        try {
            const response = await fetch(apiAdress);

            if (!response.ok) {
                console.log("Something went wrong")
                throw new Error("Something went wrong")
            }

            const data = await response.json();
            setFlags(data)
        }
        catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getCountryDate()
    }, [apiAdress])

 
    return (

        <div className={classes.contener}>
        {loading && <p style={{fontSize: '25px', color: "white"}}>Loading...</p>}
        {error && <p style={{fontSize: "25px", color: "red"}}>{error}</p>}
        
        {flags.filter((flag)=> {
          if( flag.name.common.toLowerCase().includes(searchName.toLowerCase())|| searchName == ''){
            return true
          } 
            
        }).map(info => (
            <FlagInfo
            key={info.name.common}
            name={info.name.common}
            region={info.region}
            capital={info.capital}
            population={info.population}
            flag={info.flags.png}
                />
        ) )}

        </div>
    )

}

export default Country;

