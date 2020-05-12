import React from 'react';
import "./Search.css";


const Search = ({ inputValue, handleChange, handleSubmit, error }) => {
    return (
        <div className="divS">
            <form onSubmit={handleSubmit}>

                <fieldset className="url">

                    <input 
                        type="text" 
                        placeholder="City" 
                        value={inputValue} 
                        onChange={handleChange} 
                    />

                    <label ><i className="fa fa-search" />Search</label>
                    
                    <div className="after"></div>

                </fieldset>

                <fieldset className="enter">
                    <button></button>
                </fieldset>

            </form>

            <p className="errorMessage">{error}</p>
            
        </div>
    );
};

export default Search;