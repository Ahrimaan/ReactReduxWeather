import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { city: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event) {
        this.setState({ city: event.target.value });
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.city);
        this.setState({ city: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm} className="row">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <input
                                value={this.state.city}
                                onChange={this.onInputChange}
                                type="text"
                                className="form-control"
                                placeholder="Search for City" />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="submit">Search </button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);