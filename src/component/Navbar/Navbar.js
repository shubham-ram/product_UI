import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useDebounce, useDebouncedCallback} from "use-debounce";

import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css"

function Navbar(props){
    
    const navigate = useNavigate();

    const [searchProduct, setSearchProduct] = useState("");

    const debounced = useDebouncedCallback(value =>{
        props.navValue(value);
    },1000) 

    const searchHandler = (event) =>{
        setSearchProduct(event.target.value);

        debounced(event.target.value);
    }
    
    const homeHandler =()=>{
        navigate("/")
    }

    return <>
        <div className="navbar">
            <div onClick={homeHandler} className='navbar_title'>
                <h1>Product</h1>
            </div>

            <div className='search'>
                <SearchIcon className='search_icon' fontSize='medium'/>
                <input type="text" placeholder='Search....' value={searchProduct} onChange={searchHandler}/>

            </div>

        </div>
    </>
}

export default Navbar;