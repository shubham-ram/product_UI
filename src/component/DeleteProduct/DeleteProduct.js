

import Alert from '@mui/material/Alert';

import "./DeleteProduct.css"

function DeleteProduct(){
    return <>
        <Alert severity="success">
            {/* This is a success alert — <strong>check it out!</strong> */}
            Successfully Deleted the Product
        </Alert>

       
    </>
}

export default DeleteProduct;