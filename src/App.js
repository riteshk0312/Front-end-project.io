import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Wishlist from './Components/Wishlist';
import Bag from './Components/Bag';
import { useState,useEffect } from 'react';

import Register from './Components/Register';
import Productinfo from './Components/Productinfo';
import {CartProvider} from 'react-use-cart'; 
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';






function App() {

  const [data, setdata] = useState([]);
  const [filterlist, setFilterList] = useState([]);
  const [currentform,setcurrentform]=useState(['profile']);
  const toggleform =(forname) =>{
    setcurrentform(forname)
  }


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setdata(json)
            setFilterList(json)
        })
}, [])


  const filterHandler = (item) => {
    const output = filterlist.filter((current) => { 
      return current.category === item; })
    setdata(output);

}





  return (
    <>
                 <CartProvider>
      <Router>
        <Navbar filterHandler={filterHandler}  />
       <Routes> 
          <Route path='/home' element={<Home data={data}  />} />
          <Route path='/Men' element={<Men data={data} />} />
          <Route path='/Women' element={<Women data={data}/>} />
          <Route path='/kids' element={<Kids data={data}/>} />
          <Route path='/profile' element={
        currentform === "profile" ? <Profile onformswitch={toggleform}/>:<Register onformswitch={toggleform} />
      } />
      <Route path='/productinfo/:id' element={<Productinfo data={data}/>} />
        <Route path='/wishlist' element={<Wishlist data={data}/>} />
          <Route path='/bag' element={<Bag data={data} />} />
          <Route path='/Contactus' element={<Contactus data={data} />} />
        </Routes>
        <Footer/>
      </Router>
      
      </CartProvider>
      
    </>
  );
}

export default App;
