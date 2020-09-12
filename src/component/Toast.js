import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
import SuccessDialog from "./SuccessDialog";
import ErrorDialog from "./ErrorDialog";
import Snackbar from "@material-ui/core/Snackbar";

export default function CustomizedSnackbars(props) {
    if(props.success==='success') {
        return <SuccessDialog />
    }
    if(props.success==='error'){
        return <ErrorDialog />
    }
    return <Snackbar open={false}/>
}


