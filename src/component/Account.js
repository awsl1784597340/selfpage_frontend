import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EasyDialog from './Dialog'
import bilibili from '../img/bilibili.png'
import github from '../img/github.jpg'
import gogs from '../img/gogs.png'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [
    {
        id:1,
        image:bilibili,
        name:'bilibili',
        imageTitle:'bilibili',
        link1:'https://space.bilibili.com/34222806',
        link2: 'https://www.bilibili.com/',
        header:'Bilibili Account',
        content: 'Bilibili plays user submitted videos,' +
            'while featuring a scrolling closed caption commenting system nicknamed "bullet curtain" '
    },
    {
        id:2,
        image: github,
        name:'github',
        imageTitle: 'github',
        link1: 'https://github.com/awsl1784597340',
        link2:'https://github.com/',
        header: 'Github Account',
        content: 'GitHub is a development platform inspired by the way you work. '
    },
    {
        id:3,
        image: gogs,
        name: 'gogs',
        imageTitle: 'gogs',
        link1: 'http://47.106.226.210:3000/',
        link2: 'https://gogs.io/',
        header: 'Gogs Address',
        content:'Gogs is a painless self-hosted Git service'
    },
];


export default function CenteredGrid(props) {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
                        Introduction
                    </Typography>
                    <div>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        This page is Created on September 12, 2020
                    </Typography>
                    </div>
                    <div>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            You are the {props.num.num}th visitor
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            For more information, click the button below
                        </Typography>
                    </div>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <EasyDialog/>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={function () {
                                    window.open("https://github.com/awsl1784597340/selfpage_frontend/blob/master/Intro.md")
                                }}>
                                    More information
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.image}
                                    title={card.imageTitle}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.header}
                                    </Typography>
                                    <Typography>
                                        {card.content}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={()=>{
                                        window.open(card.link2)
                                    }}>
                                        {card.name}
                                    </Button>
                                    <Button size="small" color="primary" onClick={()=>{
                                        window.open(card.link1)
                                    }}>
                                        My Account
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}