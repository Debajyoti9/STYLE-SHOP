import { createStore,applyMiddleware,compose } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,{},composeEnhancers(applyMiddleware(thunk)));//it takes three argument one is all the combine reducers and a middle ware or redux thunk and a state

export default store;