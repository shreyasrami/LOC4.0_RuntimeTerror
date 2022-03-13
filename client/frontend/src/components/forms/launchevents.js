import React, { useState } from "react";
// import "../App.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

// Importing Header

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    display: "block",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
});

function LaunchEvents () {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [duration, setDuration] = useState("");
  const [link, setLink] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  // const [name, setName] = useState("");

  const handleSubmit= async () => {
    // const handleSubmit = () => {
    //   // method: "POST",
    //   // headers: { "Content-Type": "application/json" },
    //   // body: JSON.stringify({
    //     // courseId: match.params.id,
    //     // name: name,
    //     // email: email,
    //     // number: number,
    //     // description: description,
    //   }),
    // };
    // setPublicIdd(response.data.secure_url);
    // fetch(`http://localhost:8080/contact/contacForm`, requestOptions)
    //   .then((response) => {
    //     // console.log(response);

    //     response.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
    // alert("Query sent successfully");
  };

  return (
    <>
     
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ margin: "80px 0px 10px" }}
      >
        <Card
          style={{
            maxWidth: 950,
            padding: "5px",
            margin: "0 auto",
            boxShadow: "5px 5px 5px 5px lightgrey",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
             Schedule Event
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid xs={12} item>
                  <TextField
                    // placeholder="Enter first name"
                    label="Type"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(event) => setType(event.target.value)}
                    // error={nameError}
                  />
                </Grid>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  // value={value}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
                </Grid>
              
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Time"
                  // value={value}
                  onChange={(event) => {
                    setTime(event.target.value);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="description"
                    label="Location"
                    multiline
                    rows={3}
                    // placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(event) => setLocation(event.target.value)}
                    // error={descriptionError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Link"
                
                    // placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(event) => setLink(event.target.value)}
                    // error={descriptionError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="description"
                    label="Description"
                    multiline
                    rows={4}
                    // placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(event) => setDescription(event.target.value)}
                    // error={descriptionError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Name"
                   
                    // placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(event) => setName(event.target.value)}
                    // error={descriptionError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    label="Duration"
                   
                    // placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(event) => setDuration(event.target.value)}
                    // error={descriptionError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    style={{backgroundColor:'#14274E'}}
                    type="submit"
                    size="large"
                    classes={{
                      root: classes.root,
                      label: classes.label,
                    }}
                    fullWidth
                    
                  >
                    Schedule an event!
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default LaunchEvents;