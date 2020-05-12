import React from 'react';
import {API_URL} from '../config';
import {API_KEY} from '../config';
import Search from './Search';
import Table from './Table';
import Loader from './Loader';
import {x1, x2, x3, x4} from './style';

class List extends React.Component {
    constructor(){
        super();
        this.state={
            temperatura:null,
            city: null,
            country:null,
            inputValue:"",
            flags: null,
            iconTemp: null,
            error: null,
            loader: false,
            z1: ''
        };
        
        this. handleChange = this. handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    fetchCurrencies(){
        const {inputValue}=this.state;
        this.setState({
            loader: true
        })
        if(inputValue){
        fetch(`${API_URL}${inputValue}&appid=${API_KEY}&units=metric`)
        .then(resp => {
            //  console.log(resp);
            return resp.json();})
        .then(data => {
                // console.log(data);
                this.setState({
                    temperatura: Math.round(data.main.temp),
                    city:data.name,                    
                    country: data.sys.country,
                    flags: `https://www.countryflags.io/${data.sys.country}/flat/64.png`,
                    iconTemp: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                    error: null,
                    loader: false
                })
        
            })

            .catch(err => {
                console.log('reor', err);
                this.setState({
                    error: 'The requested URL/error was not found this server!!!',
                    flags: null,
                    iconTemp: null,
                    temperatura: null,
                    city: null,
                    country: null,
                    loader: false
                })
            })

        }else { this.setState({
            temperatura: null,
            city:null,                    
            country:null,
            error: null,
            flags: null,
            iconTemp:null,
            loader: false
        });
           
        };
    };
   
    handleChange(event) {
        this.setState({inputValue: event.target.value});
    };
    
    handleSubmit(event) {
        const {inputValue} = this.state;
        this.setState({
            inputValue: this.state.inputValue,
            loader: false
        }, () => {
            this.fetchCurrencies();
        });
        if(inputValue == "") {
            alert('Please enter the city name');
        }
        event.preventDefault();
       
      };

    render(){
        const {temperatura , city , country, flags, iconTemp,  error, inputValue,loader } = this.state;

        let s = temperatura > 0 && temperatura < 17 ? x4 : x2 && temperatura < 0 ? x3 : x2 && temperatura > 17 ? x1 : x2;
        return (
            <div className="App" style={s} > 
                
                <Search 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    inputValue={inputValue} 
                    error={error} 
                />

                <div className="div-loader"> {loader? <Loader /> : <p></p>} </div>

                <Table 
                    temperatura={temperatura} 
                    country={country} 
                    city={city} 
                    flags={flags} 
                    iconTemp={iconTemp} 
                />
                
            </div>
        );
    };
};



export default List;