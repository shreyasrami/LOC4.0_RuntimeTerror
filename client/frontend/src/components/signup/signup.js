   
import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LockOutlined } from '@mui/icons-material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const theme = createTheme();

export default function SignUpSide({setJump}) {
  const [email,setEmail] = useState("")
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async() => {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(fname.length>0 && fname.trim()!=="" && lname.length>0 && lname.trim()!=="" && mailformat.test(email) ===  true && email.length>0){
      const data={
        fname:fname,
        lname:lname,
        email:email,
        password:password
      }
      try{
          const response = await axios.post('https://recommender-model.herokuapp.com/user/register/', JSON.stringify(data), {
              headers:{
                  'Content-Type': 'application/json',
                  'accept': 'application/json'
              }
          })
          const res = await response.data
          console.log(res)
          if(res.token){
            localStorage.setItem("token",res.token);
            alert("Register Successful")
            setFname("")
            setLname("")
            setEmail("")
            setPassword("")
            navigate('/dashboard');
          }
      }
      catch(err){
        alert("Registration failed! Invalid credentials");
        setFname("")
        setLname("")
        setEmail("")
        setPassword("")
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

          
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value = {fname}
                  onChange = {(e) => setFname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lname}
                  onChange = {(e) => setLname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {() => handleSubmit()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <div onClick={()=>{setJump(1)}} style={{textDecoration:'underline',color:'blue'}}>
                  Already have an account? Sign in
                </div>
              </Grid>
            </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
