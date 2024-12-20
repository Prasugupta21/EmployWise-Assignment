import { useState } from 'react'
import Login from './pages/Login';
import UsersList from './pages/UsersList';
import {Routes,Route} from 'react-router-dom';
import EditUser from './pages/EditUser';
function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users-list' element={<UsersList/>}/>
      <Route path='/edit-user/:id' element={<EditUser/>}/>
      </Routes>
      
    </>
  )
}

export default App
