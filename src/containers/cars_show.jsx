import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCar } from '../actions/index';
import Aside from '../components/aside';

class CarsShow extends Component {
  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  render () {
    const car = this.props.car;
    if (!car) {
      return (
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="/assets/images/cone.svg" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownParams) {
  const id = parseInt(ownParams.match.params.id, 10);
  const car = state.cars.find(p => p.id === id);
  return { car };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteCar },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsShow));
