import React from 'react';
import { Link } from 'react-router-dom';

const CoinsCrypto = ({ name, id, price ,ch }) => {
    return (
        <div className="commodities-container">
            <div className="commodities-row">
                <div><Link to={`/crypto/${id}`} id="commodities-title">{name}</Link>
                <p id="commodities-price">{price} USD</p>
                <p id="commodities-ch-2" className={ch > 0 ? "text-success mr-2" : "text-danger mr-2"}>{ch}</p>
                </div>
            </div>
        </div>
    )
}

export default CoinsCrypto;