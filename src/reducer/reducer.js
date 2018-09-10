import { SEARCH_LOCATION } from '../actions/actionTypes';

const initialState = {
    location: {
      lat: 10.315,
      lng: 123.8854
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_LOCATION :
            return Object.assign({}, state, {
                location: [...state.location, action.location]
            })
        
        default:
            return state;
    }
};

export default rootReducer;