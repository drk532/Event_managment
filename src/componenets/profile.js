import React, { Component } from "react";
export default class Profile extends Component {
constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Deepak Reddy',
        biography: 'Deepak who specalized in coding with the technical skills of html,css,js,rect',
        age:20,
        email_id:"deepakxyz123@gmail.com"
      }
    };
}
  render() {
    return(
      <div className="App">
        <Profile person={this.state.person} />
      </div>
    );
  }
}