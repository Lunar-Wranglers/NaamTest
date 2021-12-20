import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import HomeScreen from './components/screens/HomeScreen'
import NewUser from './components/screens/auth/NewUser'
import Login from './components/screens/auth/Login/index.tsx'
import './App.css';

function App(props) {
  {/* const [user, setUser]
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null }) */}
  
  return (
    <Layout id='layout'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/NewUser' element={<NewUser />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
