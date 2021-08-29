import React, { Component } from 'react';
import ProductList from './ProductList.js';
import groceriesList from './Data'
import ShoppingCart from './ShoppingCart.js';
import './App.css';


class App extends Component {

 


  // * State for list
  state = {
    groceries: groceriesList,
    item: "",
    quantity: 0,
    units: ""
  }

 removeItem = (index) => {
  this.setState({
    groceries: this.state.groceries.filter((_, i) => i !== index)
  })
 }

  handleChange = (event) => {
    event.preventDefault();
    // console.log(event)

    const newItem = {
			item: this.state.item,
			quantity: this.state.quantity,
			units: this.state.units
		};

    this.setState({
      item: event.target.value,
			quantity: "",
			units: '',
			groceries: [newItem, ...this.state.groceries ]
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Grocery List </h1>
        <div>
          {/* Create form for user input */}
          <div >
            <h1>Add New Item</h1>
            <form id="form">
            <label htmlFor='item'> Item: </label>
            <input  type="text"  id= 'item' value={this.state.item} onChange={this.handleChange}/>
            <label htmlFor='quantity'> Quantity: </label>
            <input   type="text"  id= 'quantity' value={this.state.quantity} onChange={this.handleChange}/>
            <label htmlFor='units'> Units: </label>
            <input  type="text"  id= 'units' value={this.state.units} onChange={this.handleChange}/>
            <button onClick={this.handleChange}>Add To Cart</button> 
            <button onClick={ () => this.removeItem(0)}>Remove Item</button>
           
            </form>
            
          </div>
        
        </div>
        <h2>Shopping Cart</h2>
        {/* <h1>{this.state.item}</h1> */}
        <div className="grocery-list">
          <ul>
          {this.state.groceries.map((product,index) =>{
            return (
            <div>{product.item}</div>
            )
          })}
          {/* <ProductList grocery={this.state} /> */}
          </ul>
        </div>
        
      </div>
    );
  }
}

export default App;