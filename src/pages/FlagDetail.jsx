import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from './FlagDetail.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const FlagDetail = () => {

    const [detail, setDetail] = useState([]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { detailID } = useParams();
    const navigate = useNavigate();

    const getDetail = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${detailID}`)
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            const data = await response.json();
            setDetail(data)

        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getDetail()
    }, [detailID])
    console.log(detail)

    const backToMainSite = () => {
        navigate('/')
    }


    return (
        <div className={classes.contener}>
            <button onClick={backToMainSite} className={classes.backBtn}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10px' }} />
                Back</button>
            {loading && <p style={{ fontSize: "25px", textAlign: 'center', color: "white" }}>Loading...</p>}
            {error && <p style={{ fontSize: "25px", color: "red" }}>{error}</p>}
            <div >
                {detail.map(info => (
                    <div className={classes.content}>
                        <img className={classes.flagPicture} src={info.flags.png}></img>

                        <div className={classes.information}>
                            <div>
                                <h1 className={classes.title}>{info.name.common}</h1>
                            </div>

                            <div className={classes.detail}>
                                <p className={classes.detailTitles}>Native Name: <span>{info.name.nativeName.official}</span></p>
                                <p className={classes.detailTitles}>Population: <span>{info.population}</span></p>
                                <p className={classes.detailTitles}>Region: <span>{info.region}</span></p>
                                <p className={classes.detailTitles}>Sub Region: <span>{info.subregion}</span></p>
                                <p className={classes.detailTitles}>Capital: <span>{info.capital}</span></p>
                                <p className={classes.detailTitles}>Top Level Domain: <span>{info.tld}</span></p>
                                <p className={classes.detailTitles}>Currencies:
                                    {Object.values(info.currencies).map((currency, index) => (
                                        <span key={index}>
                                            {currency.name}
                                            {index < Object.values(info.currencies).length - 1 ? ", " : ""}
                                        </span>
                                    ))}

                                </p>
                                <p className={classes.detailTitles}>Language:
                                    {Object.values(info.languages).map((language, index) => (
                                        <span key={index}>
                                            {language}
                                            {index < Object.values(info.languages).length - 1 ? ", " : ""}
                                        </span>
                                    ))}</p>
                            </div>
                            <div className={classes.borderCountries}>
                                Boeder Counties:
                                {info.borders ?
                                    Object.values(info.borders).map((border, index) => (
                                        <div className={classes.border} key={index}>
                                            <p>
                                                {border}
                                            </p>
                                        </div>
                                    )) : ""}
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>


        </div>
    )
}

export default FlagDetail;