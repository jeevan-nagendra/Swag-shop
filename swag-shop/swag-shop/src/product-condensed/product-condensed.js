import React,  {Component} from 'react';
import DataService from '../services/data-service';
import './product-condensed.css';


let ds = new DataService();
class ProductCondensed extends Component {
    constructor(props){
       super(props);
       //bind
       this.removeProduct = this.removeProduct.bind(this);

    }
    removeProduct =() => {
        ds.removeWishListItem(this.props.product);
    }    
    render(){
        return (
  <li className="list-group-item pc-condensed">
      <a className="btn btn-outline-danger" onClick={()=>
    this.removeProduct()}>X</a>
      <p>{this.props.product.title} | ${this.props.product.price}</p>
  </li>
        
        );
    }   
}

export default ProductCondensed;
