import React from 'react';
import './Services.css'
import Product from './Product';

class SocialProductView extends React.Component {

    







    render() {
      return (
        <div id='product-view' >
            <Product url="https://helpmework.herokuapp.com/" icon="helpmework" name="help me work" />
            <Product url="https://ashu-endless-noteepy.herokuapp.com/" icon="noteepy" name="Noteepy" />
            </div>
      );
    }
  }

export default SocialProductView;
