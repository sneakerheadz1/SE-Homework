import React, { Component } from 'react';

class ProductList extends Component {

  state = {
    inShoppingCart: false
  }


  render() {
  
    return (
  
      <li >
        {this.props.grocery.item} - {this.props.grocery.units}
      </li>
    );
  }
}

export default ProductList;