import { Grid, Button, Typography, Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Accordion from "react-bootstrap/Accordion";
import IconButton from "@mui/material/IconButton";
import "../landingpage/landingpage.css";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Row, Col, Card, Image } from "react-bootstrap";
import home from "../../assests/images/home.jpg";
import children from "../../assests/images/children.jpg";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBarComponent from '../../components/navbar/navbar.js';

function HomePage({user}) {
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const{is_NGO} = user;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // const decoratedOnClick = useAccordionButton(eventKey, onClick);
  return (
    <>
      <NavBarComponent/>
     
        
      <Grid
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
                LOREM
              </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={12}>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontSize: "2rem",
                  paddingBottom: "30px",
                }}
              >
                A non-governmental organization (NGO) is a non-profit group that
                functions independently of any government. NGOs, sometimes
                called civil societies, are organized on community, national and
                international levels to serve a social or political goal such as
                humanitarian causes or the environment.{" "}
              </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={3}>
              <Button
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#14274E",
                  fontSize: "10px",
                  height: "3rem",
                }}
                variant="contained"
               
              >
                Explore!
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} md={6} className="right-box"></Grid>
      </Grid>
      <Container >
        {!is_NGO?
        <>
        <Row className="mt-5">
          <Col>
            <Card.Body>
              <Card.Title style={{fontSize:"2.5rem", color:'#7A58FF'}} > 
                Together Let's bring smile on 7.6 billion faces!
              </Card.Title>
              <Card.Text style={{fontSize:"1.5rem", color:'#9BA4B4'}}>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <div  style={{display:'inline-flex', alignItems:'center', justifyContent:'center', backgroundColor:'#14274E', margin:'15px', borderRadius:'10px'}}>
              <Button  style={{ color:'white', borderRadius:'10px'}}>   Donate!</Button>
              </div>
            </Card.Body>
          </Col>
          <Col>
          <Image  src={`${children}`} height="318px" width="480px" style={{borderRadius:'15px'}} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
          <Image  src={`${children}`} height="318px" width="480px" style={{borderRadius:'15px'}}  />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title style={{fontSize:"2.5rem", color:'#7A58FF'}}>hIII HELLO PLSS DONATE</Card.Title>
              <Card.Text style={{fontSize:"1.5rem", color:'#9BA4B4'}}>
                An act of kindness no matter how small is never wasted!
              </Card.Text>
              <div style={{display:'inline-flex', alignItems:'center', justifyContent:'center', backgroundColor:'#14274E', margin:'10px', borderRadius:'10px'}}>
              <Button  style={{ color:'white' , borderRadius:'10px'}}>Volunteer!</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
        </>
        :
        <>
        <Row className="mt-5">
          <Col>
            <Card.Body>
              <Card.Title style={{fontSize:"2.5rem", color:'#7A58FF'}}> Bigger the heart better the cause!</Card.Title>
              <Card.Text style={{fontSize:"1.5rem", color:'#9BA4B4'}}>Start a fundraiser!</Card.Text>
              <div style={{display:'inline-flex', alignItems:'center', justifyContent:'center', backgroundColor:'#14274E', margin:'15px', borderRadius:'10px'}}>
              <Button  style={{ color:'white' , borderRadius:'10px'}}>Go somewhere</Button>
              </div>
            </Card.Body>
          </Col>
          <Col>
            <Image  src={`${children}`} height="318px" width="480px" style={{borderRadius:'15px' , borderRadius:'25px'}}  />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
          <Image  src={`${children}`} height="318px" width="480px"  style={{borderRadius:'15px' , borderRadius:'25px'}} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title style={{fontSize:"2.5rem", color:'#7A58FF'}}>Special title treatment</Card.Title>
              <Card.Text style={{fontSize:"1.5rem", color:'#9BA4B4'}}>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <div style={{display:'inline-flex', alignItems:'center', justifyContent:'center', backgroundColor:'#14274E', margin:'15px', borderRadius:'10px'}}>
              <Button  style={{ color:'white', borderRadius:'10px' }}>Go somewhere</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
        </>
}
        <Accordion className="mt-5">
          <Accordion.Item eventKey="0"  >
            <Accordion.Header>FAQ 1</Accordion.Header>
            <Accordion.Body className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1"  >
            <Accordion.Header>FAQ 2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1"  >
            <Accordion.Header>FAQ 2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" >
            <Accordion.Header>FAQ 2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  user:state,
})
export default connect(mapStateToProps,null)(HomePage)