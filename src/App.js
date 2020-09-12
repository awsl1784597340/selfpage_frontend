import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import axios from 'axios'
import StickyFooter from "./component/StickyFooter";
import Head from "./component/Head";
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

function App() {
    const classes = useStyles();
  return (
      <div className={classes.root}>
      {/*<Button onClick={function () {*/}
      {/*    axios.get('/info').then((res)=>{*/}
      {/*        console.log(res)*/}
      {/*    }).catch((err)=>{*/}
      {/*        console.log(err)*/}
      {/*    })*/}
      {/*}}>*/}
      {/*    hello*/}
      {/*</Button>*/}

          {/*<Grid container spacing={3}>*/}
          {/*    <Grid item xs={12}>*/}
          {/*        <Paper className={classes.paper}>xs=12</Paper>*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={6}>*/}
          {/*        <Paper className={classes.paper}>xs=6</Paper>*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={3}>*/}
          {/*        <Paper className={classes.paper}>xs=3</Paper>*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={3}>*/}
          {/*        <Paper className={classes.paper}>xs=3</Paper>*/}
          {/*    </Grid>*/}

          {/*</Grid>*/}
          <Head/>
          <footer className={classes.footer}><StickyFooter/></footer>
      </div>
  );
}
export default App;
