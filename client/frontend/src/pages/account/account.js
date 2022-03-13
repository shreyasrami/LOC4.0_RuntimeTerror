import React from 'react'
import SignInSide from '../../components/signin/signin';
import SignUpSide from '../../components/signup/signup';
import NavBarComponent from '../../components/navbar/navbar.js';
const Account = ({jump,setJump}) => {
  return (
    <div>
      
    {
        jump === 1 ? 
        <SignInSide jump={jump} setJump={setJump} /> 
        : 
        <SignUpSide jump={jump} setJump={setJump}/>
    }
    </div>
  )
}

export default Account