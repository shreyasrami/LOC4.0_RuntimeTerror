

import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import './chatbot.css'
// import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/all';
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  // const startChat = () => {
  //   setShowChat(true)
  // }
  // const hideChat = () => {
  //   setShowChat(false)
  // }

  return (
    <ThemeProvider theme={theme}>
      {/* <div style={{ display: showChat ? '' : 'none' }}> */}
        {/* {showChat ? */}
        {showChat ? 
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi, {previousValue} I am your helper bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                   { value: 1, label: 'NGO ', trigger: '4' },
                    { value: 2, label: ' Old age home ', trigger: '3' },
                    { value: 3, label: 'Orphanage', trigger: '5' },
                    // { value: 4, label: 'More Information', trigger: '6' },
          
              ],
            },
        
            {
              id: '3',
              message:
              'Within what distance you wish to find an Old age home',
              trigger: 'qdist',
            },
            {
              id: '4',
              message:
              'Within what distance you wish to find an NGO',
              trigger: 'qdist',
            },
            {
              id: '5',
              message:
              'Within what distance you wish to find an Orphanage',
              trigger: 'qdist',
            },
            // {
            //   id: '6',
            //   component: <Link />,
            //   trigger: 'q-submit',
            // },

            {
              id: 'qdist',
              options: [
                   { value: 1, label: 'Within 5 km ', trigger: '7' },
                    { value: 2, label: ' Within 10 km ', trigger: '8' },
                    { value: 3, label: 'Within 15 km', trigger: '9' },
                    // { value: 4, label: 'More Information', trigger: '6' },
          
              ],
            },
            {
              id: '7',
              message:
              'Please enter your address',
              trigger: 'address',
            },
            {
              id: '8',
              message:
              'Please enter your address',
              trigger: 'address',
            },
            {
              id: '9',
              message:
              'Please enter your address',
              trigger: 'address',
            },
    
            {
              id: 'address',
              user: true,
            
              trigger: 'q-submit',
            },

            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'NGO ', trigger: '4' },
                { value: 2, label: ' Old age home ', trigger: '3' },
                { value: 3, label: 'Orphanage', trigger: '5' },
                // { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        ></ChatBot>
        : null }
      <div>
        {showChat ? (
          <button className="btn" onClick={() => setShowChat(false)}>
            <i className="fa fa-minus">-</i>
          </button>
        ) : (
          <button className="btn" onClick={() => setShowChat(true)}>
            <i className="fa fa-plus">+</i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot