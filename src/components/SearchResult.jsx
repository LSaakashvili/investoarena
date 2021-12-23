import React, {useState} from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';
import Sidebar from 'react-sidebar';
import { Link, useParams } from 'react-router-dom';
import progressimage from '../images/progress.png';
import regressimage from '../images/regress.png';
import AllMetals from './AllMetals';
import closeoutline from '../images/close-outline.svg';
import homeoutline from '../images/home-outline.svg';
import searchicon from '../images/search-icon.png';
import logobitcoin from '../images/logo-bitcoin.svg';
import metalimage from '../images/metal.png';
import gasimage from '../images/gas.png';
import agricultureimage from '../images/agriculture.png';
import navbaricon from '../images/navbaricon.png';
import Coin from '../components/Coin';
import CoinsCrypto from '../components/CoinsCrypto';
import FilteredTicker from '../components/FilteredTicker';


const SearchResult = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchTime, setFetchTime] = useState(1);
    const [goldData, setGoldData] = useState({});
    const [coalData, setCoalData] = useState({});
    const [agriculture, setAgriculture] = useState([]);
    const [metals, setMetals] = useState([]);
    const [gas, setGas] = useState([]);
    const [coffeData, setCoffeData] = useState({});
    const [platinumData, setPlatinumData] = useState({});
    const [gasolineData, setGasolineData] = useState({});
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dataForSearch, setDataForSearch] = useState([]);
    const [search, setSearch] = useState('');
    const [cryptoSearch, setCryptoSearch] = useState([]);
    const [tickerSearch, setTickerSearch] = useState([]);
    const { id } = useParams();
    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open)
    }
    const fetchSearchData = async() => {
        const metalsData = await axios.get('http://investoarena.herokuapp.com/data/metals');
        const gasData = await axios.get('http://investoarena.herokuapp.com/data/gas');
        const agricultureData = await axios.get('http://investoarena.herokuapp.com/data/agriculture');
        const tickerData = await axios.get('http://investoarena.herokuapp.com/data/tickers');
        const cryptoData = await axios.get('http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setMetals(metalsData.data);
        const filteredmetal = metals;
        setAgriculture(agricultureData.data);
        setGas(gasData.data);
        setCryptoSearch(cryptoData.data);
        setDataForSearch(filteredmetal.concat(gas, agriculture));
        setTickerSearch(tickerData.data);
        setIsLoading(false);
    }

    useEffect(() => {
    fetchSearchData();
    setSearch(id);
},[]);
    const filteredValues = dataForSearch.filter(value => {
        return (value.name.toLowerCase().includes(id.toLowerCase()));
    });
    const filteredCrypto = cryptoSearch.filter(value => {
        return (value.name.toLowerCase().includes(id.toLowerCase()));
    });
    const filteredTicker = tickerSearch.filter(value => {
        return (value.name.toLowerCase().includes(id.toLowerCase()));
    })
    const handleChange = () => {
        let inputfield = document.getElementById("search-input").value;
        if (inputfield.length > 2.5) {
            window.location.replace(`/search/${inputfield}`)
        }
    }
    return (
        <div className="main-cent">
        <div className="main">
        <header className="header">
                <div className="header-up">
                    <Sidebar
                        sidebar={
                        <div id="sidebar">
                            <img src={closeoutline} alt="" id="navbar-close" onClick={() => {
                                setSidebarOpen(false)
                            }}/>
                            <a href="/" id="a-sidebar">
                            <div className="container-sidebar-1">
                                <img src={homeoutline} id="img-sidebar" alt=""/>
                                <p id="text-sidebar">Home</p>
                            </div>
                            </a>
                            <a href="/crypto/" id="a-sidebar">
                            <div className="container-sidebar">
                                <img src={logobitcoin} id="img-sidebar" alt=""/>
                                <p id="text-sidebar">Crypto</p>
                            </div>
                            </a>
                            <a href="/metals/" id="a-sidebar">
                            <div className="container-sidebar">
                                <img src={metalimage} id="img-sidebar" alt=""/>
                                <p id="text-sidebar">Metals</p>
                            </div>
                            </a>
                            <a href="/gas/" id="a-sidebar">
                            <div className="container-sidebar">
                                <img src={gasimage} id="img-sidebar" alt=""/>
                                <p id="text-sidebar">Gas</p>
                            </div>
                            </a>
                            <a href="/agriculture/" id="a-sidebar">
                            <div className="container-sidebar">
                                <img src={agricultureimage} id="img-sidebar" alt=""/>
                                <p id="text-sidebar">Agriculture</p>
                            </div>
                            </a>
                        </div>
                    }
                        open={sidebarOpen}
                        onSetOpen={onSetSidebarOpen}
                        id="sidebar"
                        styles={{ sidebar: {background: "white", position:'fixed', left:'0px', width:'470px'}}}
                    >
      </Sidebar>
                    <Link to='/' id="title">I N V E S T O A R E N A</Link>
                    <div className="search">
                        <input autoComplete="off" type="text" id="search-input" placeholder="Tap to Search..."/>
                        <button onClick={handleChange} id='search-btn'><img src={searchicon} id="search-img" alt=""/></button>
                   </div>
        <img alt="" id="navbar" src={navbaricon} onClick={() => onSetSidebarOpen(true)}/>
                </div>
                <div className="header-down">
                    <div id="modal-header-box" className="modal1-header">
                    {isLoading === false &&
                    <div> 
                        <img id="primg" src={metals[0].chp > 0 ? progressimage:regressimage } alt=""/>
                        <p id="title-header-box">Gold</p>
                        <div className="pricechange">
                            <p className={metals[0].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-chp">{metals[0].chp}</p>
                            <p className={metals[0].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-ch">{metals[0].ch}</p>
                            <p id="modal-header-price">{metals[0].price}$</p>
                        </div>
                    </div>
                     }
                     {isLoading && <Spinner animation="border"/>}
                    </div>
                    <div id="modal-header-box" className="modal2-header">
                        {isLoading === false &&
                        <div>
                        <img id="primg" src={agriculture[3].chp > 0 + '%' ? progressimage:regressimage } alt=""/>
                        <p id="title-header-box">Coffee</p>
                        <div className="pricechange">
                        <p className={agriculture[3].chp > 0  ? "text-success mt-3":"text-danger mt-3"} id="modal-header-chp">{agriculture[3].chp}</p>
                        <p className={agriculture[3].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-ch">{agriculture[3].ch}</p>
                        <p id="modal-header-price">{agriculture[3].price}$</p>
                        </div>
                        </div>
                        }
                        {isLoading && <Spinner animation="border"/>}
                        </div>
                    <div id="modal-header-box" className="modal3-header">
                        {isLoading === false && <div>
                        <img id="primg" src={gas[3].chp > 0 + '%' ? progressimage:regressimage } alt=""/>
                        <p id="title-header-box">Coal</p>
                        <div className="pricechange">
                        <p className={gas[3].chp > 0  ? "text-success mt-3":"text-danger mt-3"} id="modal-header-chp">{gas[3].chp}</p>
                        <p className={gas[3].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-ch">{gas[3].ch}</p>
                        <p id="modal-header-price">{gas[3].price}$</p></div></div>}
                     {isLoading && <Spinner animation="border"/>}</div>
                    <div id="modal-header-box" className="modal4-header">
                        {isLoading === false && <div>
                        <img id="primg" src={metals[2].chp > 0 + '%' ? progressimage:regressimage } alt=""/>
                        <p id="title-header-box">Platinum</p>
                        <div className="pricechange">
                        <p className={metals[2].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-chp">{metals[2].chp}</p>
                        <p className={metals[2].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-ch">{metals[2].ch}</p>
                        <p id="modal-header-price">{metals[2].price}$</p></div></div>}
                     {isLoading && <Spinner animation="border"/>}</div>
                    <div id="modal-header-box" className="modal5-header">
                        {isLoading === false && <div>
                        <img id="primg" src={gas[1].chp > 0 + '%' ? progressimage:regressimage } alt=""/>
                        <p id="title-header-box">Ethanol</p>
                        <div className="pricechange">
                        <p className={gas[1].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-chp">{gas[1].chp}</p>
                        <p className={gas[1].chp > 0 ? "text-success mt-3":"text-danger mt-3"} id="modal-header-ch">{gas[1].ch}</p>
                        <p id="modal-header-price">{gas[1].price}$</p></div></div>}
                     {isLoading && <Spinner animation="border"/>}</div>
                </div>
            </header>
            <div className="center-box">
                <p id="center-box-title1">Search Result</p>
                <div id="line"></div>
                {
                    filteredValues.map(value => {
                        return (
                            <Coin name={value.name} price={value.price} ch={value.ch} chp={value.chp}/>
                        )
                    })
                }
                {
                    filteredCrypto.map(value => {
                        return (
                            <CoinsCrypto name={value.name} id={value.id} price={value.current_price} ch={value.price_change_24h} chp={value.price_change_percentage_24h}/>
                        )
                    })
                }
                {
                    filteredTicker.map(value => {
                        return (
                            <FilteredTicker name={value.name} price={value.price} ch={value.ch} url={value.url}/>
                        )
                    })
                }
            </div>
            </div>
                {isLoading &&<div id="modal-bg"><Spinner animation="border" variant="primary" id="spinner-modal"/></div>}
            </div>
    )
}

export default SearchResult;