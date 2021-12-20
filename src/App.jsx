import React from 'react'
import { Switch, Route } from 'react-router-dom'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from './components/shared/Layout'
import HomeScreen from './components/screens/HomeScreen'
import NewUser from './components/screens/auth/NewUser'
import Login from './components/screens/auth/Login'
import Profile from './components/screens/Profile/index.tsx'
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute.tsx"
import './App.css';

function App(props) {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Layout id='layout'>
          <Switch>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/login' element={<Login />} />
            <ProtectedRoute path='/profile' elements={<Profile />} />
          </Switch>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
