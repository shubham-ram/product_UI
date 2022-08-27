import { useState, useEffect} from 'react';

import Navbar from "../Navbar/Navbar"

const IP_ADD="10.10.10.174";
const API_URL_getByCategory = `http://${IP_ADD}:8086/payments/product/all?category='`

const Category = (props) => {

    useEffect(()=>{
        const getDataBySearch =()=>{
            response =  await axios.get(API_URL_getByCategory+props.cat);
            console.log(response.data);
        }
    }, [])


    return <>
        <Navbar/>
    </>
}

export default Category;