import React from 'react';
import './Services.css'
import MainProductCategory from './MainPrdctCatgry';
// import Product from './Product';
import SocialProductView from './SocialProductView';
import ProductView from './ProductView';
import { NavLink,Route, Routes  } from "react-router-dom";
class Services extends React.Component {

    







    render() {
      return (
        <div id='Services-div' > 
            <div id='main-products-cloumn'>
          <NavLink to='/games' className={(navData) => (navData.isActive ? "active" : 'none')} >  <MainProductCategory  for="Games" icon="game" /> </NavLink>
          <NavLink to='/social' className={(navData) => (navData.isActive ? "active" : 'none')} >  <MainProductCategory for="Social" icon="social" /> </NavLink>
          {/* <MainProductCategory a="actve" for="Games" icon="game" /> */}
        {/* <MainProductCategory for="Social" icon="social" /> */}
            </div>
            <Routes>
              <Route path='/games' element={<ProductView />} ></Route>
              <Route path='/social' element={<SocialProductView />} ></Route>
            {/* <div id='product-view' >
            <Product icon="catchTheBee" name="Catch The Bee" />
            </div> */}
            </Routes>
        </div>
      );
    }
  }

export default Services;
