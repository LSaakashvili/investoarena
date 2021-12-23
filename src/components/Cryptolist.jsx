import React from 'react';
import {Link} from 'react-router-dom';

const Cryptolist = ({ name, id, price, ch, chp }) => {
    return (
        <div className="commodities-container">
        <div className="commodities-row">
            <Link to={`/crypto/${id}`} id="commodities-title">{name}</Link>
            <p id="commodities-price">{price}</p>
            <p id="commodities-ch-2" className={ch > 0 ? "text-success mr-2" : "text-danger mr-2"}>{ch}$</p>
            <p id="commodities-chp-2" className={ch > 0  ? "text-success mr-2":"text-danger mr-2"}>{chp}%</p>
        </div>
        </div>
    )
} 

export default Cryptolist;