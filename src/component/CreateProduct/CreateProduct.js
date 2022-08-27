import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import Popup from "./Popup/Popup";
import PopupSuccess from "./Popup/PopupSuccess";
import PopupUpLoading from "./Popup/PopupUploading";
import Loader from "../Loader/Loader";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import styles from "./CreateProduct.module.css"

const categoryList = [{ value: "Mobile" },
{ value: "Laptop" },
{ value: "Headphone" },
{ value: "Furniture" }]

function CreateProduct() {

    const API_URL = "http://10.10.10.174:8086/payments/product/";
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const [nameCheck, setNameCheck] = useState(true);
    const [priceCheck, setPriceCheck] = useState(true);
    const [categoryCheck, setCategoryCheck] = useState(true);
    const [imgUrlCheck, setImgURlCheck] = useState(true);


    const [incompleteInfo, setIncompleteInfo] = useState(false) 
    const [completeInfo, setCompleteInfo] = useState(false);
    const [loader, setLoader] = useState(false);

    const nameHandler = (event) => { setName(event.target.value); setNameCheck(true)}
    const categoryHandler = (event) => {setCategory(event.target.value); setCategoryCheck(true)}
    const priceHandler = (event) => {setPrice(event.target.value); setPriceCheck(true)}
    const imgUrlHandler = (event) => {setImgUrl(event.target.value); setImgURlCheck(true)}

    const productHandler = async (e) => {
        e.preventDefault();

        if(name==="" || price === "" || category === "" || imgUrl ===""){
            setIncompleteInfo(true);

            if(name ==="") setNameCheck(false);
            if(price ==="") setPriceCheck(false);
            if(category ==="") setCategoryCheck(false);
            if(imgUrl ==="") setImgURlCheck(false);

            setTimeout(()=>{
                setIncompleteInfo(false);
            }, 2000)
        }else{
            console.log("submitted");
            setCompleteInfo(true);

            let data ={
                name: name,
                price: price,
                category: category,
                image: imgUrl
            }
            console.log(data);
            let response = await axios.post(API_URL, data);
            console.log(response.data); //Created_success

            if(response.data === "Created_success"){
                setLoader(false);
                setName(""); setPrice(""); setCategory(""); setImgUrl("");
                
                setTimeout(()=>{
                    setCompleteInfo(false);
                    navigate("/");
                },1500)

            }else{
                setLoader(true)
            }


        }

    }
    
    return <>
        <Navbar />
        {incompleteInfo ? <Popup/> : "" }
        {completeInfo ? <PopupSuccess data="Product Added successfully"/> : ""}
        <div className={styles.product_parent}>
            <h1>Upload Product</h1>
            {loader ? 
                <div>
                    <Loader/>
                    <PopupUpLoading/>
                </div> 
                : 
                <div className={styles.product_form}>
                    <form>
                        <div className={styles.product_top}>

                            <input className={`${!nameCheck ? styles.error : ""}`} type="text" placeholder="Name of product"  value={name} onChange={nameHandler}/>
                            <select className={`${!categoryCheck ? styles.error : ""}`} value={category} onChange={categoryHandler}>
                                <option value="" disabled>Select your category</option>
                                {categoryList.map((opt)=>(
                                    <option value={opt.value}>{opt.value}</option>
                                ))}
                            </select>
                        </div>
                        
                        <input className={`${styles.product_bottom} ${!priceCheck ? styles.error :  "" }`} type="number" placeholder="Enter price" value={price} onChange={priceHandler} required/>
                        <input className={`${styles.product_bottom} ${!imgUrlCheck ? styles.error : ""}`} type="url" placeholder="Name image URL" value={imgUrl} onChange={imgUrlHandler} required/>
                        
                        <Button onClick={productHandler} className={styles.btn} variant="contained" endIcon={<SendIcon />}>
                            Upload
                        </Button>
                    </form>
                    </div>
            }

        </div>
    </>
}

export default CreateProduct