import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import PopupSuccess from "../CreateProduct/Popup/PopupSuccess"

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import styles from "../CreateProduct/CreateProduct.module.css"
import axios from "axios";

const categoryList = [{ value: "Mobile" },
{ value: "Laptop" },
{ value: "Headphone" },
{ value: "Furniture" }]

function EditProduct() {

    const IP_ADD="10.10.10.174";
    const API_URL_post=`http://${IP_ADD}:8086/payments/product`;
    const API_URL_get=`http://${IP_ADD}:8086/payments/product/particular_id?id=`

    const {id} = useParams();
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [productId, setProductId] = useState("");
    const [updateProduct, setUpdateProduct] = useState(false)

    const nameHandler = (event) => setName(event.target.value);
    const categoryHandler = (event) => setCategory(event.target.value);
    const priceHandler = (event) => setPrice(event.target.value);
    const imgUrlHandler = (event) => setImgUrl(event.target.value);

    useEffect(()=>{
        const getData =async() =>{
            let response =await axios.get(`${API_URL_get}${id}`);
            console.log(response.data);
            setProductId(response.data.id)
            setName(response.data.name);
            setImgUrl(response.data.image);
            setCategory(response.data.category);
            setPrice(response.data.price)
        }
        getData();
    },[])

    const productHandler = async(e) => {
        e.preventDefault();
        
        let data ={
            id: productId,
            name: name,
            price: price,
            category: category,
            image: imgUrl
        }
        
        
        let response = await axios.put(API_URL_post, data);
        console.log("post res", response);
        console.log(data);
        
        console.log("submitted")
        setUpdateProduct(true);

        setTimeout(()=>{
            setUpdateProduct(false);
            navigate("/");
        },1000)

        
    }


    return <>
        <Navbar />
        {updateProduct ? <PopupSuccess data=" Product Updated Successfully"/> : "" }
        
        <div className={styles.product_parent}>
            <h1>Edit Product</h1>

            <div className={styles.product_form}>
                <form>
                    <div className={styles.product_top}>

                        <input type="text" placeholder="Name of product"  value={name} onChange={nameHandler}/>
                        <select value={category} onChange={categoryHandler}>
                            <option value="" disabled>Select your category</option>
                            {categoryList.map((opt)=>(
                                <option value={opt.value}>{opt.value}</option>
                            ))}
                        </select>
                    </div>
                    
                    <input className={styles.product_bottom} type="number" placeholder="Enter price" value={price} onChange={priceHandler}/>
                    <input className={styles.product_bottom} type="url" placeholder="Name image URL" value={imgUrl} onChange={imgUrlHandler}/>
                    
                    {/* <button>Submit</button> */}
                    <Button onClick={productHandler} className={styles.btn} variant="contained" endIcon={<SendIcon />}>
                        Upload
                    </Button>
                </form>
            </div>
        </div>
    </>
}

export default EditProduct