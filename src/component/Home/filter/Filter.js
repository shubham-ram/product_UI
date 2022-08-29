import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CancelIcon from '@mui/icons-material/Cancel';

import styles from "./Filter.module.css"
import { setCategoryValue } from "../../../feature/Filter/Filter";


const categoryList = [{ value: "Mobile" },
{ value: "Laptop" },
{ value: "Headphone" },
{ value: "Furniture" }]

function Filter(props){

    // const API_URL_searchCategory="";

    const dispatch = useDispatch();
    const {categoryValue} = useSelector(state => state.userInputReducer)

    const categoryHandler = (event) => {
        dispatch(setCategoryValue(event.target.value)) //passing to redux
    }


    return <>
        <div className={styles.filter_parent} >
            <div className={styles.filter}>
                <h1 className={styles.title}>{categoryValue}</h1>
                <div className={styles.filter_search}>

                    <select value={categoryValue} onChange={categoryHandler}>
                        <option value="" disabled>Select your category</option>
                        {categoryList.map((opt)=>(
                            <option value={opt.value}>{opt.value}</option>
                        ))}
                    </select>

                    {categoryValue==="" ? "" :<CancelIcon fontSize="small" onClick={()=> dispatch(setCategoryValue(""))}/>}
                    
                </div>
            </div>
        </div>
    </>
}

export default Filter;  