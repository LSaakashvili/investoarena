import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Cryptodetail from './components/Cryptodetail';
import CryptoPage from './components/CryptoPage';
import MetalsPage from './components/MetalsPage';
import GasPage from './components/GasPage';
import AgriculturePage from './components/AgriculturePage';
import MetalDetail from './components/MetalDetail';
import SearchResult from './components/SearchResult';
import Abandoned from './components/Abandoned';
import MetauxBCDetail from './components/MetauxBCDetail';
import MetauxACDetail from './components/MetauxACDetail';
import AnimaDetail from './components/AnimaDetail';
import JuliusGold from './components/JuliusGold';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
          <Route path="*" component={Abandoned} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
