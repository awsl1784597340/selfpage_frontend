import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function ErrorDialog(){
    const classes=useStyles
    const position={ vertical: 'top', horizontal: 'center' }
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return<div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={position}>
            <Alert onClose={handleClose} severity="error">
                Sorry, there is something wrong. I will fix it later...
            </Alert>
        </Snackbar>
    </div>
}