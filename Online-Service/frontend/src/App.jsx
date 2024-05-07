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
import UserSignIn from './UserSignIn';
import UserLayouts from './layouts/UserLayouts';
import UserDashboard from './pages/users/UserDashboard';
import Home from './pages/Home';
import Subcategory from './pages/admin/SubCategory'
import ProviderSignUp from './pages/serviceProvider/ProviderSignUp'
import ProviderSignIn from './pages/serviceProvider/ProviderSignIn';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/category' element={<Category/>}/>
          <Route path='/subcategory' element={<Subcategory/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/usersignup' element={<UserSignUp/>}/>
          <Route path='/usersignin' element={<UserSignIn/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/providersignup' element={<ProviderSignUp/>}/>
          <Route path='/providersignin' element={<ProviderSignIn/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>



          <Route path='/user' element={<UserLayouts/>}>
            <Route path='/userdashboard' element={<UserDashboard/>}/>
          </Route>



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
