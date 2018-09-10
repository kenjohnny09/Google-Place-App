import { SEARCH_LOCATION } from '../actions/actionTypes';

const initialState = {
    location: {
      lat: 10.315,
      lng: 123.8854
    },
    locationList: []
};

const Location = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_LOCATION :
            return Object.assign({}, state, {
                locationList: [...state.locationList, action.location],
                location: action.location
            })

        default:
            return state;
    }
};

export default Location;