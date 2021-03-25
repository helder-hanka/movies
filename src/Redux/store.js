import { createStore, combineReducers, applyMiddleware } from 'redux';
import actionListVideos from './Reducers/reducerListVideos';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    listVideos: actionListVideos
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
