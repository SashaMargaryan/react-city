import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import List from './components/List'

const App = () => {
    return(
        <div >
            <List/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);