import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data])
            return [ action.payload.data, ...state ]; // [city, city, city] this makes a new city then ...state takes the old cities and puts them in an array with the new city
    }
    return state;
}