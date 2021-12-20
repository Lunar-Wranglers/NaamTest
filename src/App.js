import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import HomeScreen from './components/screens/HomeScreen'
import NewUser from './components/screens/auth/NewUser'
import Login from './components/screens/auth/Login/index.tsx'
import Profile from './components/screens/Profile'
import './App.css';

function App(props) {
  
  return (
    <Layout id='layout'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/newUser' element={<NewUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' elements={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
