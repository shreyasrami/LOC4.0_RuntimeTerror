import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import home from '../../assests/images/home.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {connect} from 'react-redux'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const FundRaiser = ({ngoFundingData,ngoEventData}) => {
  const classes = useStyles();
  const cards=[1,2,3,4,5]
  return (

    <>
    {/* <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction="row"
    >
      <Grid item sm={6} md={3} className="left-box">
        <div className="text">
          <Grid item sm={6} md={3}>
            <Typography
              style={{
                fontSize: "3rem",
                letterSpacing: 1,
                fontFamily: "Roboto",
              }}
            >
              DONATE
            </Typography>
          </Grid>
          <br />
          <Grid item sm={6} md={12}>
            <Typography style={{ fontFamily: "Roboto", fontSize: "1.4rem", paddingBottom:"20px" }}>
              Our emotions can trigger all sorts of behaviors— uncontrollable
              anger, crying spells, self-loathing, and other not-so-positive
              reactions. Managing your emotions takes a dose of willpower,
              plenty of awareness, lots of resilience, among other self-care
              tools. Are you ready to build your own emotional toolkit? Here
              is what you can do:{" "}
            </Typography>
          </Grid>
          <br />
          <Grid item sm={6} md={3}>
            <Button
              style={{ borderRadius: "31px", backgroundColor: "#49AB94", fontSize:"1.2rem", height:"4rem" }}
              variant="contained"
            >
              Explore
            </Button>
          </Grid>
        </div>
      </Grid>
      <Grid item sm={6} md={6} className="right-box"></Grid>
    </Grid> */}

    <Container  component="section" maxWidth="lg" className={classes.root}>
    
      <Button style={{backgroundColor:'#14274E' , color:'white', height:'50px', width:'1200px' , position :'sticky', marginBottom:'20px'}}variant="contained" disabled>
       Start a fundraiser!
      </Button>
   
      <Grid container spacing={3} alignItems="stretch">
   
            {ngoFundingData.map((card) => (
                  <Card sx={{ maxWidth: 345 }} className='m-2'>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`http://127.0.0.1:8000/${card.image}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
            ))}
      </Grid>
      
      <Button style={{backgroundColor:'#14274E' , color:'white', height:'50px', width:'1200px' , position :'sticky', marginTop :'20px',  marginBottom :'20px'}}variant="contained" disabled>
      Schedule an event!
    </Button>
    
    <Grid container spacing={3} alignItems="stretch">
   
    {
        ngoEventData.map((card) => (
                  <Card sx={{ maxWidth: 345 }} className='m-2'>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`http://127.0.0.1:8000/${card.image}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
            ))}
</Grid>
    </Container>
    </>

  );
};

const mapStateToProps = state => ({
    ngoFundingData : state.ngo.fundingdata,
    ngoEventData : state.ngo.eventData,
})
export default connect(mapStateToProps)(FundRaiser);