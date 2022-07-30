import React, { Component } from 'react'


// for testing to get current location 

const mapStyles = {
    width: '100%',
    height: '100%'
  };

export default class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
      }
    
      render() {
        return (
          <div>
            <h4>Using geolocation JavaScript API in React</h4>
          </div>
        );
      
  }
}
