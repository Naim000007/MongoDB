
import './App.css'
import Create from './Components/Create'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Components/Users'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users/>}> </Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/update' element={<UpdateUser/>}></Route>
      {/* <Route path='/update' element={}></Route> */}
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
