import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import home from '../../assests/images/home.jpg'


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

const Features = () => {
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
    <Container>
      <Button style={{backgroundColor:'#14274E' , color:'white', height:'50px', width:'1200px' , position :'sticky', marginBottom:'20px'}}variant="contained" disabled>
        Disabled
      </Button>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            </Container>
      <Grid container spacing={3} alignItems="stretch">
   
            {cards.map((card) => (
        <Grid item xs={12} sm={4}>
          <div style={{height:'300px'}}className={classes.card}>
            {/* <EmojiPeopleIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
            /> */}
            <Typography variant="h5" component="h3" className={classes.title}>
              Explore Tokyo
            </Typography>
            <Typography className={classes.featureList}>
              Discover Tokyo like you never have before.
            </Typography>
            

            <Button style={{backgroundColor:'#14274E', marginBottom:'10px'}} variant="contained" color="primary">DONATE NOW</Button>
          </div>
        </Grid>
            ))}
      </Grid>
      <Container>
      <Button style={{backgroundColor:'#14274E' , color:'white', height:'50px', width:'1200px' , position :'sticky', marginTop :'20px',  mRGINM :'20px'}}variant="contained" disabled>
      Volunteer in an event!
    </Button>
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
    </Typography>
    </Container>
    <Grid container spacing={3} alignItems="stretch">
   
   {cards.map((card) => (
<Grid item xs={12} sm={4}>
 <div style={{height:'300px'}} className={classes.card}>
   {/* <EmojiPeopleIcon
     color="primary"
     fontSize="large"
     className={classes.icon}
   /> */}
   <Typography variant="h5" component="h3" className={classes.title}>
     Explore Tokyo
   </Typography>
   <Typography className={classes.featureList}>
     Discover Tokyo like you never have before.
   </Typography>
   <Button style={{backgroundColor:'#14274E', marginBottom:'10px'}}variant="contained" color="primary">DONATE NOW</Button>
 </div>
</Grid>
   ))}
</Grid>
    </Container>
    </>

  );
};

export default Features;