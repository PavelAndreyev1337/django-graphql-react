import React from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import './App.css'
import { UserInfo } from './UserInfo';
import { CreateUser } from './CreateUser';

const client=new ApolloClient({
  uri: 'http://localhost:8000/qraphql/',
})

function App() {
  return (
   <ApolloProvider client={client}>
     <div style={{
       margin:'0px',
       backgroundColor:'#000000',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'100vh',
       flexDirection:'column',
       color:'white'
     }}>
       <h2>Apollo App 🔥</h2>
       <CreateUser/>
       <UserInfo/>
     </div>
   </ApolloProvider>
  );
}

export default App;
