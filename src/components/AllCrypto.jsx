import React from 'react';
import { Link } from 'react-router-dom';

const AllCrypto = ({ data }) => {
    return data.map(res => {
        return (
        <div className="commodities-container">
        <div className="commodities-row">
            <Link to={`/crypto/${res.id}`} id="commodities-title">{res.name}</Link>
            <p id="commodities-price">{res.current_price} USD</p>
            <p id="commodities-chp" className={res.price_change_24h > 0 ? "text-success mr-2":"text-danger mr-2"}>{res.price_change_percentage_24h}</p></div>
        </div>)
    })
}

export default AllCrypto;