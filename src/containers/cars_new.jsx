import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { createCar } from '../actions';
import Aside from '../components/aside';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render() {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/car-engine.jpg' )" }}>
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field
              name="brand"
              type="text"
              placeholder="brand name..."
              component="input"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field
              name="model"
              type="text"
              placeholder="model..."
              component="input"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field
              name="owner"
              type="text"
              placeholder="owner..."
              component="input"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field
              name="plate"
              type="text"
              placeholder="plate number..."
              component="input"
              className="form-control"
            />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(connect(mapStateToProps, { createCar })(CarsNew));
