import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../Redux/actions/productAction';
// import axios from 'axios';
function ProductListing() {
    const products = useSelector((state)=>state);
    console.log(products);
    const dispatch = useDispatch();
    // const fetchProducts = async()=>{
    //    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
    //        console.log("Error",err);
    //    });
    //    dispatch(setProducts(response.data));//pass to actions
    // }

    useEffect(()=>{
       dispatch(fetchProducts());
    });
    // console.log("Products",products);
    return (
        <div className="ui grid container">
           <ProductComponent/>
        </div>
    )
}

export default ProductListing;
