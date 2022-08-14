import {combineReducers} from "redux";
import popularMoviesSlice from "./slices/popularMoviesSlice";

export const reducers = combineReducers({
    popularMovies: popularMoviesSlice,
});

