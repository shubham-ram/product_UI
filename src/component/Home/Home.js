import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import axios from "axios";

import Product from "./product/Product";
import CreateProductIcon from "../CreateProduct/CreateProductIcon";
import Filter from "./filter/Filter";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import PopupSuccess from "../CreateProduct/Popup/PopupSuccess";
import NoProduct from "../NoProduct/NoProduct";
import Loader from "../Loader/Loader";


import styles from "./Home.module.css"

const IP_ADD="10.10.10.174";
const API_URL_get=`http://${IP_ADD}:8086/payments/product/all`
const API_URL_getBySearch = `http://${IP_ADD}:8086/payments/product/particular_name?name=`
const API_URL_getByCategory = `http://${IP_ADD}:8086/payments/product/all?category=`

const  Home = ({searchedValue})=>{

    const {filterValue}  = useSelector(state => state.filterReducer)
    
    const [data, setData] = useState([]);
    const [noproduct, setNoProduct] = useState(false);
    const [delPro, setDelPro] = useState(false);
    const [createSuccess, setCreateSuccess] = useState(false);

    // const [loader, setLoader] = useState(true);
    const [loader, setLoader] = useState(false);




    useEffect(()=>{
        if(filterValue !== ""){
            const getDataBySearch =async()=>{
                console.log(API_URL_getByCategory+filterValue);
                let response =  await axios.get(API_URL_getByCategory+filterValue);
                console.log(response.data);
                if(response.data.length !== 0){
                    setData(response.data);
                    setLoader(false);
                }else{
                    setNoProduct(true);
                    setLoader(false);
                }
            }
            // getDataBySearch();
            console.log("filter value", filterValue)
        }
    },[filterValue])

    // useEffect( ()=>{
    //     let response

    //     async function getData(){
    //         response = await axios.get(API_URL_get);
    //         console.log(response)
    //         if(response.data.length !== 0){
    //             setData(response.data);
    //             setLoader(false);
    //             setNoProduct(false)
    //         }else{
    //             setNoProduct(true);
    //             setLoader(false);
    //         }
    //     }

    //     async function getDataBySearch(){
    //         response =  await axios.get(API_URL_getBySearch+searchedValue);
    //         console.log(response.data);

    //         if(response.data.length !== 0){
    //             setData(response.data);
    //             setLoader(false);
    //             setNoProduct(false)
    //         }else{
    //             setNoProduct(true);
    //             setLoader(false);
    //         }
    //     }

    //     if(searchedValue){
    //         getDataBySearch();
    //     }else{
    //         getData();
    //     }

    // }, [searchedValue])


    const delHandler= async(v) => {
        // setDelPro(!delPro);
        
        let response = await axios.get(API_URL_get);
        if(response.data.length !== 0){
            setData(response.data);
            setLoader(false);
        }else{
            setNoProduct(true);
            setLoader(false);
        }
        setDelPro(v)
        console.log("delPro", delPro);
        setTimeout(()=>{
            setDelPro(false)
        },2000)
    }

    // console.log(data);
    return <>
        <div className={styles.home}>
            <Filter />
            
            {loader 
            ? 
                <Loader/>
            :   
                 noproduct ? <NoProduct/>
                :
                <div>
                    {delPro ? <DeleteProduct/> : <div></div>}
                    {createSuccess ? <PopupSuccess/> : ""} 
                
                    <div className={styles.productlist}>

                        {/* {data.map(opt =>{
                            return <Product id={opt.id} name={opt.name} price={opt.price} imgUrl = {opt.image} showDelete={delHandler}/>
                        })} */}

                        <Product name="Shoes" price="23" imgUrl = "https://images.hindustantimes.com/tech/img/2022/07/16/960x540/IMG_4284_1657976137822_1657976147107_1657976147107.jpg" showDelete={delHandler}/>
                        <Product name="Shoes" price="23" imgUrl = "https://images.samsung.com/in/smartphones/galaxy-z-fold2/images/galaxy-z-fold2-share-image.jpg" showDelete={delHandler}/>
                        <Product name="Shoes" price="23" imgUrl = "https://www.techadvisor.com/wp-content/uploads/2022/07/asus-rog-phone-6-1.jpg?quality=50&strip=all" showDelete={delHandler}/>
                        <Product name="Shoes" price="23" imgUrl = "https://picsum.photos/200" showDelete={delHandler}/>
                        <Product name="Shoes" price="23" imgUrl = "https://picsum.photos/200" showDelete={delHandler}/>
                        <Product name="Shoes" price="23" imgUrl = "https://picsum.photos/200" showDelete={delHandler}/>
                        <Product name="Shoes" price="23" imgUrl = "https://picsum.photos/200" showDelete={delHandler}/>

                    </div>

                </div>
            }
            <CreateProductIcon/>
        </div>
    </>
}

export default Home;