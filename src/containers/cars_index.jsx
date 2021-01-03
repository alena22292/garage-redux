import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Aside from '../components/aside';
import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <div key={car.id} className="car-smallad">
          <Link to={`/cars/${car.id}`} key={car.id}>
            <img className="car-logo" src="assets/images/cone.svg" />
            <div className="car-details">
              <span>{car.brand} - {car.model}</span>
              <ul>
                <li><strong>Owner:</strong> {car.owner}</li>
              </ul>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    if (this.props.cars.length === 0) {
      return [
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/cars/new">Add a car</Link>
        </Aside>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        {this.renderCars()}
      </div>
    ];
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
