import React from 'react';
import Sidebar from 'react-sidebar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
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
import PopularCrypto from './PopularCrypto';
import AllCrypto from './AllCrypto';


const CryptoPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [goldData, setGoldData] = useState({});
    const [coffeData, setCoffeData] = useState({});
    const [agriculture, setAgriculture] = useState([]);
    const [metals, setMetals] = useState([]);
    const [gas, setGas] = useState([]);
    const [coalData, setCoalData] = useState({});
    const [platinumData, setPlatinumData] = useState({});
    const [gasolineData, setGasolineData] = useState({});
    const [cryptoData, setCryptoData] = useState([]);
    const [cryptoFull, setCryptoFull] = useState([]);
    const [isLoadingCrypto, setIsLoadingCrypto] = useState(true);
    useEffect(async() => {
        await axios.get('http://investoarena.herokuapp.com/data/gas')
        .then(res => {
            setGas(res.data);
        })
        .catch(res => {
            console.log(res);
        })
        await axios.get('http://investoarena.herokuapp.com/data/agriculture')
        .then(res => {
            setAgriculture(res.data);
        })
        .catch(res => {
            console.log(res);
        })
        await axios.get('http://investoarena.herokuapp.com/data/metals')
        .then(res => {
            setMetals(res.data);
        })
        .catch(res => {
            console.log(res);
        })
        await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
        .then(res => {
            setCryptoData(res.data)
        })
        await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCryptoFull(res.data)
            setIsLoadingCrypto(false);
            
            setIsLoading(false);
        })
        setIsLoading(false)
    }, [])
    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open)
    }
    const handleChange = (e) => {
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
                <p id="center-box-title1">Popular Cryptocurrencies On MarketCap</p>
                <div id="line"></div>
                <PopularCrypto data={cryptoData}/>
                <p id="center-box-title1">Cryptocurrencies</p>
                <div id="line"></div>
                <AllCrypto data={cryptoFull} />
            </div>
            {isLoadingCrypto &&<div id="modal-bg"><Spinner animation="border" variant="primary" id="spinner-modal"/></div>}
        </div>
        </div>
    )
}

export default CryptoPage;