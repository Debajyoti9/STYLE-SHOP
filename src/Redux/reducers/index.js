import {combineReducers} from 'redux';
import { productReducer, selectedProductSReducer } from './productReducer';

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductSReducer
});

export default reducers;