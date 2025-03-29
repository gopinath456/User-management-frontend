import {Routes,Route } from "react-router-dom"
import EditUser from "./pages/EditUser"
import ListUsers from "./pages/ListUsers"
import Login from "./pages/login"
import { createContext, useState } from "react"

export const UserContext=createContext();

function App() {
  const [userData,setUserData]=useState(null);
  return (
  <UserContext.Provider value={{userData,setUserData}}>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/User-list" element={<ListUsers />} />
    <Route path="/edit-User" element={<EditUser />} />
    </Routes>
  </UserContext.Provider>
  )
}

export default App
