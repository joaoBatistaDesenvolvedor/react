import './App.css';
import './style.css';
import Header from './componets/header';
import React from 'react';
import Main from './componets/main';
import Footer from './componets/footer';
import MyRouter from './routes/router';
import { BrowserRouter } from "react-router-dom";
export default function App(){
return( 
<BrowserRouter>
<MyRouter>
   <Header />
 
  <Main />
  <Footer />
  </MyRouter>
  </BrowserRouter>
  


)
  
}
   
  

