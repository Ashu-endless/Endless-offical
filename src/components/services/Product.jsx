import React from 'react';
import './Services.css'


class Product extends React.Component {

    







    render() {
      return (
        <div className='tang'> <div product-icon={this.props.icon} ></div> <div className='flx-1' >{this.props.name}</div> </div>
      );
    }
  }

export default Product;
