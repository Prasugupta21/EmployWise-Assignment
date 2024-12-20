import { useState } from 'react'
import Login from './pages/Login';
import UsersList from './pages/UsersList';
import {Routes,Route} from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users-list' element={<UsersList/>}/>
      </Routes>
      
    </>
  )
}

export default App
