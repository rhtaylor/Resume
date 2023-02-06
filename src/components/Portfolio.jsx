import React, { Component } from 'react'
import forest from '../css/forest.jpg' 
import forestGif from '../css/littleGif.jpg'
import portfolio from '../css/portfolio.css'  
import portfolioScss from '../css/portfolioScss.scss'
import patients_hub from '../css/patients_hub.png'
export default class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio d-flex justify-content-center w-100">
            <div> 
            <h1>PatientsHub </h1> 
                <span className="span_space"><a href="https://github.com/rhtaylor/PatientsHubClient" target="_blank"><i className="fab fa-github"></i></a>
                </span>
            <p>Application designed for Healthcare Providers to make charting easier</p>
            <p>React-Redux Front-End || Rails-API Back-End application</p>
            <p>Allows Providers to Chart on their Patients</p> 
            </div> 
            <div>
            <div>
            <h1>BoilingForest</h1>
                <span className="span_space"><a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://boiling-forest-global-warming.herokuapp.com/" target="_blank"><img height="80px" src={forestGif}></img></a>
                </span>
                <p>A proof of Global Warming attributed to green house gas</p>
                <p>Utilizes a third party API openweathermap for real data</p>
                <p>JavaScript Front-End || Ruby on Rails Back-End</p>
                <p>Calculates rate of cooling from afternoon to temp past midnight</p>
            </div> 
                    <div>
                        <h1></h1>
                       <span>
                            
                        </span>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div> 
                    <div>
                        <h1></h1>
                       
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
        </div>
        </div>)
    }
}