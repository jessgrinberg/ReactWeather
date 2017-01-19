var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props; //es6 means var temp=this.props.temp and location = this.props.location
    return (
        <h3 className="text-center">Its is {temp} in {location}.</h3>
    );
}

module.exports = WeatherMessage;
