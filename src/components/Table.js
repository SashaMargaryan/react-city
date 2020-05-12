import React from "react";
import './Table.css';
import {renderChange} from '../helpers';

const Table = ({ temperatura , city , country, flags, iconTemp }) => {
    return (
        <div className="table-div">
            <ul className='informationList'>
                <li>
                    <span id="city">{city}</span>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span>City</span>
                </li>
                <li>
                    <span  id="country">{country}</span>
                    <span><img src={flags}  /></span>
                    <span>Country</span>
                </li>
                <li>
                    <span className="temp">{temperatura} C</span>
                    <span> <img src={iconTemp}  /> </span>
                    <span> { renderChange(temperatura) } </span>
                    <span>Temperature </span>
                </li>
            </ul>
        </div>
    )
};

export default Table;