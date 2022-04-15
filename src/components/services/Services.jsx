import React from 'react';
import './Services.css'
import MainProductCategory from './MainPrdctCatgry';
import Product from './Product';
// import { NavLink } from "react-router-dom";
class Services extends React.Component {

    







    render() {
      return (
        <div id='Services-div' > 
            <div id='main-products-cloumn'>
          {/* <NavLink>  <MainProductCategory a="actve" for="Games" icon="game" /> </NavLink> */}
          {/* <NavLink>  <MainProductCategory for="Social" icon="social" /> </NavLink> */}
            </div>
            <div id='product-view' >
            <Product icon="catchTheBee" name="Catch The Bee" />
            </div>
        </div>
      );
    }
  }

export default Services;
