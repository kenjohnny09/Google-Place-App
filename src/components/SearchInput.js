import React from 'react';
import { connect } from 'react-redux';
import {searchLocation} from '../actions/actionTypes';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import "../styles.css";
import { TextField } from "@material-ui/core";
import { classnames } from '../helpers';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '',
                    location: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ address });
          this.props.searchLocation(latLng, address);})
      .catch(error => console.error('Error', error));
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      location: null
    });
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="search-bar-container">
              <div className="search-input-container">
                <TextField
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                    })}
                    label="Search Place"
                    id="multiline-flexible"
                    multiline
                />
                {this.state.address.length > 0 && (
                    <button
                      className="clear-button"
                      onClick={this.handleCloseClick}
                    >
                      x
                    </button>
                  )}
              </div>
              {suggestions.length > 0 && (
                  <div className="autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames('suggestion-item', {
                        'suggestion-item--active': suggestion.active,
                      });

                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{' '}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                    })}
                    <div className="dropdown-footer">
                      <div>
                        <img
                          src={require('../images/powered_by_google_default.png')}
                          className="dropdown-footer-image"
                        />
                      </div>
                    </div>
                  </div>
                )}      
            
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

const mapDispatchToProps = {
    searchLocation: searchLocation
  }

  export default connect(null, mapDispatchToProps)(LocationSearchInput)