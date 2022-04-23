import React from 'react';
import './Services.css'


class Product extends React.Component {

    







    render() {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={this.props.url} target="_blank" className='tang'> <div product-icon={this.props.icon} ></div> <div className='flx-1' >{this.props.name}</div> </a>
      );
    }
  }

export default Product;
