import React, { Component } from "react";
import Eventregister from "./event_registration.js";
import {Redirect} from 'react-router-dom';
export default class Event extends Component {
    btnClick() {
        window.open("./event_registration.js");
    }
    render() {
        return (
            <form>
                <h3> Events </h3>
                <div className="form-group">
                <img src={require('./hackathon1.png')} />
                <button type="submit" className="btn btn-primary" onClick={this.btnClick.bind(this)}>Register</button>
                <p style={{color:"red"}}> This is Hackathon on Technical Events</p>
                </div>
                <div className="form-group">
                <img src={require('./coding.jpeg')} />
                <button type="submit" className="btn btn-primary" onClick={this.btnClick.bind(this)}>Register</button>
                <p style={{color:"red"}}>This is Coding Contest by Titans</p>
                </div>
                <div className="form-group">
                <img src={require('./webinar.jpeg')} />
                <button type="submit" className="btn btn-primary" onClick={this.btnClick.bind(this)}>Register</button>
                <p style={{color:"red"}}>This is Webinars on Techincal Events</p>
                </div>
            </form>
            );
    }
}