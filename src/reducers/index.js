import { combineReducers } from 'redux';
import { CarReducer } from "./CarReducer";
import { FeatureReducer } from "./FeatureReducer";
import { PriceReducer } from "./PriceReducer";

export default combineReducers({
    PriceReducer,
    CarReducer,
    FeatureReducer
});