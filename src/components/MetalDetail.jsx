import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';

const Metalsdetail = () => {
    const { id } = useParams();
    const [fetchTimer, setFetchTimer] = useState(1);
    const [ cryptoData, setCryptoData ] = useState({});
    const [goldData, setGoldData] = useState({});
    const [fullLoaded, setFullLoaded] = useState(true);
    const [coalData, setCoalData] = useState({});
    const [coffeData, setCoffeData] = useState({});
    const [coalChart, setCoalChart] = useState([]);
    const [platinumData, setPlatinumData] = useState({});
    const [gasolineData, setGasolineData] = useState({});
    const [agriculture, setAgriculture] = useState([]);
    const [metals, setMetals] = useState([]);
    const [gas, setGas] = useState([]);
    const [bitcoinData, setBitcoinData] = useState({});
    const [chartData, setChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [err404, setErr404] = useState(false);
    const formatPrice = data => {
        return data.map(el => {
            return {
                x:Date.parse(el.t),
                y:el.x
            }
        })
    }
    const fetchData = async() => {
        await axios.get(`http://investoarena.herokuapp.com/data/${id}`)
        .then(res => {
            setCryptoData(res.data)
        })
        .catch(err => {
            setErr404(true);
        })
        await axios.get('http://investoarena.herokuapp.com/data/gas')
        .then(res => {
            setGas(res.data);
            setFullLoaded(false);
        })
        await axios.get('http://investoarena.herokuapp.com/data/metals')
        .then(res => {
            setMetals(res.data);
            setFullLoaded(false);
        })
        await axios.get('http://investoarena.herokuapp.com/data/agriculture')
        .then(res => {
            setAgriculture(res.data);
            setFullLoaded(false);
        })
        await axios.get(`http://investoarena.herokuapp.com/chart/${id}`)
        .then(res => {
            setChartData(res.data)
            setFullLoaded(false);
            setSuccess(true);
        })
        .catch(err => {
            setIsLoading(false);
            setFullLoaded(false);
            setErr404(true);
        })
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [fetchTimer])
    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open)
    } 
    const handleChange = () => {
        let inputfield = document.getElementById("search-input").value;
        if (inputfield.length > 2.5) {
            window.location.replace(`/search/${inputfield}`)
        }
    }
    return (
        <div className="main-cent">
        <div className="cryptodetail">
        <header className="header" style={{ position:"absolute" }}>
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
            <div className="center-box-detail">
                <div className="info-detail">
                <div className="blueline"></div>
                <p id="title-detail">
                    {cryptoData.name}
                </p>
                <div id="pricing-info">
                    <p id="price-detail">
                        {cryptoData.price}
                    </p>
                    <p id="ch-detail" className={cryptoData.ch > 0 ? "text-success mr-2": "text-danger mr-2"}>
                        {cryptoData.ch}$
                    </p>
                    <p id="chp-detail" className={cryptoData.ch > 0 ? "text-success mr-2": "text-danger mr-2"}>
                        {cryptoData.chp}
                    </p>
                </div>
            </div>
            <Chart id="myChart"
              options={{
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                    type:'datetime'
                }
              }}
              series={[
                {
                  name: "series-1",
                  data: formatPrice(chartData),
                }
              ]}
              type="line"
            />
            <div className="info-modals-detail">
                <div className="modal1-info">
                    <p id="modal-low-price">
                        Prev.Close
                    </p>
                    <p id="modal-high-price">
                        Open
                    </p>
                    <p id="modal-low-price-value">
                        {cryptoData.open}
                    </p>
                    <p id="modal-high-price-value-detail">
                        {cryptoData.close}
                    </p>
                </div>
                <div className="modal2-info-detail">
                    <p id="modal-description">
                        Description
                    </p>
                    <p id="modal-text">
                        {cryptoData.description}
                    </p>
                    <p id="modal-marketcap-rank-value">
                        {cryptoData.market_cap_rank}
                    </p>
                    <p id="modal-marketcap-price-value">
                        {cryptoData.market_cap}
                    </p>
                </div>
                {isLoading &&<div id="modal-bg"><Spinner animation="border" variant="primary" id="spinner-modal"/></div>}
            </div>
        </div>
        </div>
        </div>
    )
}

export default Metalsdetail;