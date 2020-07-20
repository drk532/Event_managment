import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Event_Register extends Component {
    render() {
        return (
            <form >
                <h3>Event Register</h3>

                <div className="form-group">
                    <label>Event name</label>
                    <input type="text" className="form-control" placeholder="Event name" />
                </div>

                <div className="form-group">
                    <label>Code</label>
                    <input type="text" className="form-control" placeholder="Event Code" />
                </div>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Enter userid" />
                </div>

                <div className="form-group">
                    <label>Payment</label>
                    <input type="digits" className="form-control" placeholder="Enter payment id" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
        );
        }
    }