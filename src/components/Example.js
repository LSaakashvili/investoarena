import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Cryptodetail from './Cryptodetail';
import CryptoPage from './CryptoPage';
import Main from './main';
import MetalsPage from './MetalsPage';
import GasPage from './GasPage';
import AgriculturePage from './AgriculturePage';
import MetalDetail from './MetalDetail';
import SearchResult from './SearchResult';
import Abandoned from './Abandoned';
import MetauxBCDetail from './MetauxBCDetail';
import MetauxACDetail from './MetauxACDetail';
import AnimaDetail from './AnimaDetail';
import JuliusGold from './JuliusGold';

function Example () {
    return (
        <div className="App">
        <BrowserRouter>
            <Route exact path='/' component={Main} />
            <Route exact path='/crypto/:id' component={Cryptodetail} />
            <Route exact path='/crypto/' component={CryptoPage} />
            <Route exact path='/metals/' component={MetalsPage} />
            <Route exact path='/gas/' component={GasPage} />
            <Route exact path="/agriculture/" component={AgriculturePage} />
            <Route exact path="/metals/:id" component={MetalDetail} />
            <Route exact path="/agriculture/:id" component={MetalDetail} />
            <Route exact path="/gas/:id" component={MetalDetail} />
            <Route exact path="/search/:id" component={SearchResult} />
            <Route exact path="/tickers/FR0013342797" component={MetauxBCDetail} />
            <Route exact path="/tickers/FR0013342789" component={MetauxACDetail} />
            <Route exact path="/tickers/IT0005332686" component={AnimaDetail} />
            <Route exact path="/tickers/GB00B6197G24" component={JuliusGold} />
            <Route exact path="/tickers/LU1844121522" component={JuliusGold} />
        </BrowserRouter>
        </div>
    )
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
