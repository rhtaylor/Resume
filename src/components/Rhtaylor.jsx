import React, { Component } from 'react' 
import avatar from '../css/avatar.jpg' 
import '../css/styling.scss' 
import rhtaylor from '../css/rhtaylor.css'
import SocialLinks from './SocialLinks'
export default class Rhtaylor extends Component{
    render(){ 
        
        return(
            <div className="resume flex-column justify-content-between">
               
                <h1 className="justify-content-center mx-auto"><img height="80px" src={avatar} id="avatar" alt="Randall Taylor"/>Randall Taylor</h1>

                <span><a href="https://software-for-humanity.medium.com/" target="_blank"><i className="fab fa-medium"></i></a>
                </span> 
                
                <p>Randall has a Science degree from the University of Arizona in Physiology with minors in Biochemistry and Business Administration.</p>
                <p>While working within Emergency Medical Services as a 911 response EMT he learned to implement High Reliability Organization and teamwork to achieve the best outcomes for the sick and injured.</p>
                <p>Later he moved into Behavioral Health Care, worked as a Behavior Health Tech, and Case Manager.</p> 
                <p>He is currently working as an AWS Cloud Developer with skills in Mobile Development, Back-End and Front-End programming.</p> 
                <p>With volunteer, freelance, professional software, and cloud enterprise experience he is eager to start his next code project.</p>
                <p>Terraform HashiCorp Certification pending.</p>
            </div>
        )
    }
} 

