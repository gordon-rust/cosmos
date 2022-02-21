import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ReactPlayer from "react-player";
import Paper from '@mui/material/Paper';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
    mainSplash: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        margin: 'auto'
    }
}));

function Copyright() {
  return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const cardContent = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

const theme = createTheme();

export default function Landing() {
    const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
              <Toolbar sx={{ flexWrap: 'wrap' }}>
                  <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                      Cosmos
                  </Typography>
                  <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                      Home
                  </Button>
                  <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                      Services
                  </Button>
                  <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                      Resources
                  </Button>
                  <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                      Sign-up/Login
                  </Button>
              </Toolbar>
          </AppBar>
        <main>
            <Container maxWidth={false}>
                <ImageList
                    className={classes.mainSplash}
                    variant="quilted"
                    cols={6}
                    rowHeight={200}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 150, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
            <Container maxWidth={false}>
                <Grid container spacing={8} rowSpacing={4} style={{paddingTop:'25px'}}>
                    <Grid item xs={3}>
                        <Box display="flex" justifyContent="flex-start">
                        {integratedServicesLeft.map((item) => (
                            <img
                                {...srcset(item.img, 150)}
                                alt={item.title}
                                loading="lazy"
                            />
                        ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex" justifyContent="flex-end">
                        {integratedServicesRight.map((item) => (
                            <img
                                {...srcset(item.img, 150)}
                                alt={item.title}
                                loading="lazy"
                            />
                        ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth={false}>
                <Grid container spacing={8} style={{paddingTop:'25px'}}>
                    {newsFeed.map((card) => (
                        <Grid item key={card} xs={4}>
                            <Card variant="outlined">{cardContent}</Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth={false}>
                <Grid container spacing={8} style={{paddingTop:'25px', height:'600px'}}>
                    <Grid item xs={6} md={4}>
                        <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            width='100%'
                            height='100%'
                        />
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Box>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={15}
                                placeholder="Minimum 15 rows"
                                style={{ width: 800 }}
                            />
                            <Grid container>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
          <Container maxWidth={false}>
            {/* End hero unit */}
            <Grid container spacing={8} style={{paddingTop:'25px'}}>
              {confidence.map((card) => (
                  <Grid item key={card} xs={3}>
                      <Card variant="outlined">{cardContent}</Card>
                  </Grid>
              ))}
            </Grid>
          </Container>
            <Container maxWidth={false}>
                {/* End hero unit */}
                <Grid container spacing={8} style={{paddingTop:'25px'}}>
                    {whoWeServe.map((card) => (
                        <Grid item key={card} xs={3}>
                            <Card variant="outlined">{cardContent}</Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth={false} style={{paddingTop:'25px'}}>
                <Card variant="outlined">{cardContent}</Card>
            </Container>
        </main>
        {/* Footer */}
          <Container maxWidth={false}>
              <Grid container spacing={4} style={{paddingTop:'25px'}}>
                  <Grid item xs={1}>
                      <Box display="flex" justifyContent="flex-start">
                          <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' style={{width:'400px', height:'400px'}}/>
                      </Box>
                  </Grid>
                  <Grid item xs={10}>
                      <Box>
                          <Typography variant="h6" align="center" gutterBottom>
                              Footer
                          </Typography>
                          <Typography
                              variant="subtitle1"
                              align="center"
                              color="text.secondary"
                              component="p"
                          >
                              Something here to give the footer a purpose!
                          </Typography>
                          <Copyright />
                      </Box>
                  </Grid>
                  <Grid item xs={1}>
                      <Box display="flex" justifyContent="flex-end">
                          <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' style={{width:'400px', height:'400px'}}/>
                      </Box>
                  </Grid>
              </Grid>
          </Container>
        {/* End footer */}
      </ThemeProvider>
  );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const integratedServicesLeft = [
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    }
    ];

const integratedServicesRight = [
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    }
]
const newsFeed = [1, 2, 3];
const confidence = [1, 2, 3, 4];
const whoWeServe = [1, 2, 3, 4];


