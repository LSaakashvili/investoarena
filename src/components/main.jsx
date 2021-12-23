import React, {useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cryptolist from '../components/Cryptolist';
import axios from 'axios';
import Sidebar from 'react-sidebar';
import navbaricon from '../images/navbaricon.png';
import closeoutline from '../images/close-outline.svg';
import homeoutline from '../images/home-outline.svg';
import logobitcoin from '../images/logo-bitcoin.svg';
import metalimage from '../images/metal.png';
import gasimage from '../images/gas.png';
import agricultureimage from '../images/agriculture.png';
import progressimage from '../images/progress.png';
import regressimage from '../images/regress.png';
import searchicon from '../images/search-icon.png';


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchTime, setFetchTime] = useState(1);
    const [goldData, setGoldData] = useState({});
    const [coalData, setCoalData] = useState({});
    const [coffeData, setCoffeData] = useState({});
    const [aluminum, setAluminum] = useState({});
    const [naturalgas, setNaturalgas] = useState({});
    const [gasoline, setGasoline] = useState({});
    const [palladiumData, setPalladiumData] = useState({});
    const [heatingoil, setHeatingoil] = useState({}); 
    const [platinumData, setPlatinumData] = useState({});
    const [cocoaData, setCocoaData] = useState({});
    const [soybeanoilData, setSoybeanoilData] = useState({});
    const [gasolineData, setGasolineData] = useState({});
    const [silverData, setSilverData] = useState({});
    const [metals, setMetals] = useState([]);
    const [agriculture, setAgriculture] = useState([]);
    const [gas, setGas] = useState([]);
    const [crypto, setCrypto] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const fetchData = async() => {
        await axios.get('http://investoarena.herokuapp.com/data/metals')
        .then(res => {
            setMetals(res.data);
        })
        await axios.get('http://investoarena.herokuapp.com/data/gas')
        .then(res => {
            setGas(res.data);
        })
        await axios.get('http://investoarena.herokuapp.com/data/agriculture')
        .then(res => {
            setAgriculture(res.data);
        })
        await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(res => {
            setCrypto(res.data);
        })
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
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
                <p id="center-box-title1">Commodities Top Performers</p>
                <div id="line"></div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false && 
                        <div><Link to='/agriculture/coffee' id="commodities-title">Coffee</Link>
                        <p id="commodities-price">{agriculture[3].price} USD</p>
                        <p id="commodities-chp" className={agriculture[3].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{agriculture[3].chp}</p></div>}
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& 
                        <div><Link to='/agriculture/cocoa' id="commodities-title">Cocoa</Link>
                        <p id="commodities-price">{agriculture[4].price} USD</p>
                        <p id="commodities-chp" className={agriculture[4].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{agriculture[4].chp}</p></div>}
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/gas/heatingoil' id="commodities-title">Heating Oil</Link>
                        <p id="commodities-price">{gas[2].price} USD</p>
                        <p id="commodities-chp" className={agriculture[2].chp > 0? "text-success mr-2":"text-danger mr-2"}>{agriculture[2].chp}</p></div>}
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/agriculture/soybeanoil' id="commodities-title">Soybean Oil</Link>
                        <p id="commodities-price">{agriculture[14].price} USD</p>
                        <p id="commodities-chp" className={agriculture[14].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{agriculture[14].chp}</p></div>}
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/metals/silver' id="commodities-title">Silver</Link>
                        <p id="commodities-price">{metals[4].price} USD</p>
                        <p id="commodities-chp" className={metals[4].chp > 0 + '%' ? "text-success mr-2":"text-danger mr-2"}>{metals[4].chp}</p></div>}
                    </div>
                </div>
                <p id="center-box-title1">Commodity Prices</p>
                <div id="line"></div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        <p id="commodities-title">Metals</p>
                        <p id="commodities-price">Price</p>
                        <p id="commodities-chp-c">%</p>
                        <p id="commodities-chp-c-c">+/-</p>
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/metals/gold' id="commodities-title">Gold</Link>
                        <p id="commodities-price">{metals[0].price} USD</p>
                        <p id="commodities-ch-2" className={metals[0].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{metals[0].chp}</p>
                        <p id="commodities-chp-2" className={metals[0].chp > 0  ? "text-success mr-2":"text-danger mr-2"}>{metals[0].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/metals/silver' id="commodities-title">Silver</Link>
                        <p id="commodities-price">{metals[4].price} USD</p>
                        <p id="commodities-ch-2" className={metals[4].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{metals[4].chp}</p>
                        <p id="commodities-chp-2" className={metals[4].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{metals[4].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/metals/platinum' id="commodities-title">Platinum</Link>
                        <p id="commodities-price">{metals[2].price} USD</p>
                        <p id="commodities-ch-2" className={metals[2].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{metals[2].chp}</p>
                        <p id="commodities-chp-2" className={metals[2].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{metals[2].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/metals/palladium' id="commodities-title">Palladium</Link>
                        <p id="commodities-price">{metals[1].price} USD</p>
                        <p id="commodities-ch-2" className={metals[1].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{metals[1].chp}</p>
                        <p id="commodities-chp-2" className={metals[1].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{metals[1].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/metals/aluminum' id="commodities-title">Aluminium</Link>
                        <p id="commodities-price">{metals[5].price} USD</p>
                        <p id="commodities-ch-2" className={metals[5].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{metals[5].chp}</p>
                        <p id="commodities-chp-2" className={metals[5].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{metals[5].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container2">
                    <div className="commodities-row">
                        <p id="commodities-title">Gas</p>
                        <p id="commodities-price">Price</p>
                        <p id="commodities-chp-c">%</p>
                        <p id="commodities-chp-c-c">+/-</p>
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/gas/naturalgas' id="commodities-title">Natural Gas</Link>
                        <p id="commodities-price">{gas[0].price} USD</p>
                        <p id="commodities-ch-2" className={gas[0].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{gas[0].chp}</p>
                        <p id="commodities-chp-2" className={gas[0].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{gas[0].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/gas/ethanol' id="commodities-title">Ethanol</Link>
                        <p id="commodities-price">{gas[1].price} USD</p>
                        <p id="commodities-ch-2" className={gas[1].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{gas[1].chp}</p>
                        <p id="commodities-chp-2" className={gas[1].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{gas[1].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/gas/heatingoil' id="commodities-title">Heating Oil</Link>
                        <p id="commodities-price">{gas[2].price} USD</p>
                        <p id="commodities-ch-2" className={gas[2].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{gas[2].chp}</p>
                        <p id="commodities-chp-2" className={gas[2].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{gas[2].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/gas/coal' id="commodities-title">Coal</Link>
                        <p id="commodities-price">{gas[3].price} USD</p>
                        <p id="commodities-ch-2" className={gas[3].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{gas[3].chp}</p>
                        <p id="commodities-chp-2" className={gas[3].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{gas[3].ch}</p></div>
                        }
                    </div>
                </div>
                <div className="commodities-container">
                    <div className="commodities-row">
                        {isLoading === false&& <div><Link to='/gas/gasoline' id="commodities-title">RBOB Gasoline</Link>
                        <p id="commodities-price">{gas[4].price} USD</p>
                        <p id="commodities-ch-2" className={gas[4].chp > 0 ? "text-success mr-2" : "text-danger mr-2"}>{gas[4].chp}</p>
                        <p id="commodities-chp-2" className={gas[4].chp > 0 ? "text-success mr-2":"text-danger mr-2"}>{gas[4].ch}</p></div>
                        }
                    </div>
                </div>
                <p id="center-box-title1">Top Cryptocurrencies</p>
                <div id="line"></div>
    
                {crypto.map(coin => {
                    return (
                    <Cryptolist name={coin.name} id={coin.id} price={coin.current_price} ch={coin.price_change_24h} chp={coin.price_change_percentage_24h} />
                    )
                })}
                {isLoading && <div id="modal-bg"><Spinner animation="border" variant="primary" id="spinner-modal"/></div>}
                </div>
                </div>
            </div>
    )
}

export default Main;