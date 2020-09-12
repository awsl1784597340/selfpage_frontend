import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright(props) {
    let ip=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    return (
        <Typography variant="body2" color="textSecondary"
                    onClick={()=>{console.log(props)}}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                material-ui
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            {'Here is your IP address:'}
            {props.information.ip}
        </Typography>
    );
}

export default function StickyFooter(props) {
    return (
        <div>
            <CssBaseline />
                <Container maxWidth="sm">
                    <Copyright information={props.information}/>
                </Container>
        </div>
    );
}