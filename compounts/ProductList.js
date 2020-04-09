// ProductList
import React from 'react';
import Product from '../container/Product' //src\container\Product.js
import Titel from './Titel'

class ProductList extends React.Component {
  // state ={
  //   product : products
  // }
  render() {
    return (
    <>
      <div className = 'py-5 mx-auto'>
        <div className = 'container mx-auto' >
          <Titel name = 'Our' title=' Games'/>
          <div className = 'row mx-auto'>
            {this.props.product.map((item) =>
              <Product key = {item.id} product ={item}/>)}
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default ProductList ;
