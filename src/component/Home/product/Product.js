import { useNavigate } from "react-router-dom";
import axios from "axios";

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import styles from "./Product.module.css"

function Product(props){

    const API_URL_delete ="http://10.10.10.174:8086/payments/product";
    const navigate = useNavigate();

    const editHandler =()=>{
        // console.log("edit");
        console.log((props.id));
        navigate("/editproduct/"+props.id)
    }

    const deleteHandler = async() => {
        console.log("delete");
        
        let response = await axios.delete(API_URL_delete, {data :{id: props.id}});
        console.log(response);
        
        if(response.data === "Deleted_success"){
            props.showDelete(true);
            navigate("/");

        }
    }

    return <>
        <div className={styles.product}>
            <div className={styles.product_img}>
                {/* <img src="https://picsum.photos/200" alt=""/> */}
                <img src={props.imgUrl} alt="1"/>
            </div>
            <div className={styles.product_info}>
                <h2>{props.name}</h2>

                <div className={styles.product_action}>
                    <div className={styles.product_price}>
                        <CurrencyRupeeIcon className={styles.rupee}/>
                        <p>{props.price}</p>
                    </div>
                    <div className={styles.product_update}>
                        <Tooltip title="Edit">
                            <IconButton onClick={editHandler} color="secondary">
                                <EditIcon className={styles.updateicon}/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton onClick={deleteHandler} color="secondary">
                                <DeleteIcon id="1" className={styles.updateicon}/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Product;