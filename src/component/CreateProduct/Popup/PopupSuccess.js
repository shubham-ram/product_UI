import { Alert } from "@mui/material";

import "./Popup.css"

function PopupSuccess(props){
    return <>
        <Alert severity="success">
            {props.data}
        </Alert>
    </>
}

export default PopupSuccess;