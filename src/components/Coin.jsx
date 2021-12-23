import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ name, price ,ch, chp }) => {
    return (
        <div className="commodities-container">
            <div className="commodities-row">
                <div><Link to='/commodities/platinum' id="commodities-title">{name}</Link>
                <p id="commodities-price">{price} USD</p>
                <p id="commodities-ch-2" className={ch > 0 ? "text-success mr-2" : "text-danger mr-2"}>{ch}$</p>
                <p id="commodities-chp-2" className={chp > 0 + '%' ? "text-success mr-2":"text-danger mr-2"}>{chp}</p></div>
            </div>
        </div>
    )
}

export default Coin;