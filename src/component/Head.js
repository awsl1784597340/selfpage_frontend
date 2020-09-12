import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Account from "./Account.js"

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StarsIcon from '@material-ui/icons/Stars'

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(2),
    },
    icon1: {
        marginRight: theme.spacing(2),
    },
}));

export default function Head(props) {
    const classes=useStyles

    return(
        <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <StarsIcon className={classes.icon1} />
                <Typography variant="h6" color="inherit" noWrap>
                    HOMEPAGE
                </Typography>
            </Toolbar>
        </AppBar>

        <Container component="main" className={classes.main} maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom color={'primary'}>
                ShadowStar's Homepage
            </Typography>
            <Account num={props.num}/>
        </Container>
        </React.Fragment>
    )

}