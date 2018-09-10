import { createStore, combineReducers, applyMiddleware } from "redux";
import Location from "../reducer/reducer";
import { createLogger } from 'redux-logger'

const appReducer = combineReducers({
    location: Location
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const logger = createLogger({collapsed: true})
const middlewares = [logger]

export default createStore(rootReducer, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(...middlewares));