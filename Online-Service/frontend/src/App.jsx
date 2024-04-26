import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';


import './App.css'
import Category from './pages/admin/Category'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ChangePassword from './pages/admin/ChangePassword'
import UserSignUp from './UserSignUp'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/category' element={<Category/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/usersignup' element={<UserSignUp/>}/>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='changepassword' element={<ChangePassword/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
