import React from 'react';
import { Link } from 'react-router-dom';

const AllGas = ({ data }) => {
    return data.map(res => {
        return (
        <div className="commodities-container">
        <div className="commodities-row">
            <Link to={`/metals/${res.name.replace(" ", "")}`} id="commodities-title">{res.name}</Link>
            <p id="commodities-price">{res.price} USD</p>
            <p id="commodities-chp" className={res.chp > 0 + '%' ? "text-success mr-2":"text-danger mr-2"}>{res.chp}</p>
            <p id="commodities-ch" className={res.chp > 0 + '%' ? "text-success mr-2":"text-danger mr-2"}>{res.ch}</p>
            </div>
        </div>)
    })
}

export default AllGas;