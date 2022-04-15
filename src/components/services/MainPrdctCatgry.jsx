import React from 'react';
// import './Star.css'


class MainProductCategory extends React.Component {

    







    render() {
      return (
        <div className={`Pineapple ${this.props.a}`} > <div id='i' icon={this.props.icon} ></div> <div>{this.props.for}</div> </div>
      );
    }
  }

export default MainProductCategory;