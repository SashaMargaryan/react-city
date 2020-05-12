import React from 'react';

export const renderChange = change => {
    if(change > 0) {
        return <span> <i className="fa fa-thermometer i1" /> </span>;
    }else if (change < 0) {
        return <span> <i className="fa fa-thermometer i2" /> </span>
    }else {
        return <span> <i className="fa fa-thermometer i3" /> </span>
    }
}