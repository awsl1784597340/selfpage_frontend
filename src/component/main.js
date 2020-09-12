import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from "./StickyFooter";
import Head from "./Head";
// import {render} from "react-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));
function MainApp(props){
    const classes =useStyles()
    return (
        <div className={classes.root}>
            <Head num={props.data}/>
            <footer className={classes.footer}>
                <StickyFooter
                    information={props.data}
                />
            </footer>
        </div>
    );



}

export default MainApp;