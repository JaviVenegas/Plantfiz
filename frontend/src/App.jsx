
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './assets/components/NavBar' 
import Home from './assets/pages/Home' 
import Login from './assets/pages/Login' 
import Product from './assets/pages/Product' 
import Profile from './assets/pages/Profile' 
import Register from './assets/pages/Register' 
import ShoppingCart from './assets/pages/ShoppingCart' 
import NotFound from './assets/pages/NotFound' 
import Footer from './assets/components/Footer' 


function App() {
  

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="login" element = {<Login/>}/>
        <Route path="product" element = {<Product/>}/>
        <Route path="profile" element = {<Profile/>}/>
        <Route path="register" element = {<Register/>}/>
        <Route path="shoppingCart" element = {<ShoppingCart/>}/>
        <Route path="*" element = {<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App
