import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                material-ui
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            {'Here is your ip:'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <div>
            <CssBaseline />
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
        </div>
    );
}