import { useEffect, useState } from "react";
import styles from "./Filter.module.css"
import CancelIcon from '@mui/icons-material/Cancel';

const categoryList = [{ value: "Mobile" },
{ value: "Laptop" },
{ value: "Headphone" },
{ value: "Furniture" }]

function Filter(props){

    // const API_URL_searchCategory="";

    const [category, setCategory] = useState("");
    const categoryHandler = (event) => setCategory(event.target.value);

    useEffect(()=>{
        // console.log(category);
        props.filterSearch(category);
    }, [category])

    return <>
        <div className={styles.filter_parent} >
            <div className={styles.filter}>
                <h1 className={styles.title}>{category}</h1>
                <div className={styles.filter_search}>
                    <select value={category} onChange={categoryHandler}>
                        <option value="" disabled>Select your category</option>
                        {categoryList.map((opt)=>(
                            <option value={opt.value}>{opt.value}</option>
                        ))}
                    </select>
                    {category==="" ? "" :<CancelIcon fontSize="small" onClick={()=> setCategory("")}/>}
                    
                </div>
            </div>
        </div>
    </>
}

export default Filter;  