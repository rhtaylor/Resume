import React, {Component} from 'react'  
import open from '../css/open.scss'
const myPitch = "Certified AWS Developer Full Stack Software Engineer with Front-End, Back-End, and Mobile Development Experience... .  .   ."

export default class Services extends Component{
    
    makeTicker = () => {
        let arryForMap = myPitch.split(' ') 

    }
    render(){
        return (<div className="open">
            <h4 className="rolling"><span className="w-100">{myPitch}</span></h4>
            <h4></h4>
        </div>

        )
    }

}