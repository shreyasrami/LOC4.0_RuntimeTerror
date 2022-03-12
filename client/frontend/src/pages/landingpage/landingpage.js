import { Grid, Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Accordion from "react-bootstrap/Accordion";
import IconButton from "@mui/material/IconButton";
import "./landingpage.css";
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

export default function LandingPage() {
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                color="primary"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
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
                  fontSize: "1.5rem",
                  paddingBottom: "20px",
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
                  backgroundColor: "#49AB94",
                  fontSize: "10px",
                  height: "3rem",
                }}
                variant="contained"
              >
                Start a fundraiser / Donate as a user!
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} md={6} className="right-box"></Grid>
      </Grid>
      <Container fluid={true}>
        <Row className="mt-5">
          <Col>
            <Card.Body>
              <Card.Title>
                Together Let's bring smile on 7.6 billion faces!
              </Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Donate!</Button>
            </Card.Body>
          </Col>
          <Col>
          <Image  src={`${children}`} height="213px" width="320px" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
          <Image  src={`${children}`} height="213px" width="320px" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                An act of kindness no matter how small is never wasted!
              </Card.Text>
              <Button variant="primary">Volunteer!</Button>
            </Card.Body>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card.Body>
              <Card.Title> Bigger the heart better the cause!</Card.Title>
              <Card.Text>Start a fundraiser!</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col>
            <Image  src={`${children}`} height="213px" width="320px" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
          <Image  src={`${children}`} height="213px" width="320px" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
        </Row>
        <Accordion>
          <Accordion.Item eventKey="0" flush alwaysOpen="true">
            <Accordion.Header>FAQ 1</Accordion.Header>
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
          <Accordion.Item eventKey="1" flush alwaysOpen="true">
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
          <Accordion.Item eventKey="1" flush alwaysOpen="true">
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
          <Accordion.Item eventKey="1" flush alwaysOpen="true">
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
