import axios from 'axios';
import React, { useEffect,useState } from 'react'
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap'
import {useNavigate} from'react-router-dom'
import {connect} from 'react-redux'
import { setNgoFundingData, setNgoEventData } from '../../redux/ngo/ngoActions';
const NavBar = ({user,setNgoFundingData,setNgoEventData}) => {
    const navigate = useNavigate();
    const [step,setStep] = useState(10)
    const {token,user_id,email} = user;
    useEffect(() => {
        if(step === 1){
            navigate('/homepage')
        }
        else if(step === 2){
            const getDonarData = async() => {
                try{

                }
                catch(err){

                }
            }
        }
        else if(step === 3){
            const getNgoData = async() => {
                const btoken = 'Bearer '+token
                try{
                    const response = await axios.get('http://127.0.0.1:8000/funding/CrowdFunding/',{
                        params:{
                            "ngo_id":user_id
                        },
                        headers:{
                            'Content-Type': 'application/json',
                            'accept': 'application/json',
                            // 'Authorization':btoken,s
                        }
                    }
                    )
                    const res = response.data
                    setNgoFundingData(res.data)
                    navigate('/fundraiserpage')
                }
                catch(err){

                }
            }
            const getNgoEventData = async() => {
                const btoken = 'Bearer '+token
                try{
                    const response = await axios.get('http://127.0.0.1:8000/events/',{
                        params :{
                            "email":email
                        },
                        headers:{
                            'Content-Type': 'application/json',
                            'accept': 'application/json',
                            'Authorization':btoken 
                        }
                    }
                    )
                    const res = response.data
                    setNgoEventData(res.data)
                    navigate('/fundraiserpage')
                }
                catch(err){

                }
            }
            getNgoData()
            getNgoEventData()
        }
        else if(step === 4){
            navigate('/homepage')
        }
    },[step])
  return (


        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Smiless!!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={() => setStep(1)} >Home</Nav.Link>
        <Nav.Link onClick={() => setStep(2)}>Donate</Nav.Link>
        <Nav.Link onClick={() => setStep(3)}>Raise Funds</Nav.Link>
        <Nav.Link onClick={() => setStep(4)}>Contact Us</Nav.Link>
     
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

const mapStateToProps = (state) => ({
    user:state.user,
})
const mapDispatchToProps = (dispatch) => ({
    setNgoFundingData : (data) => dispatch(setNgoFundingData(data)),
    setNgoEventData : (data) => dispatch(setNgoEventData(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(NavBar)