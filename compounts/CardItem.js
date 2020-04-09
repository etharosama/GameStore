//CardItem
import React from 'react';

class CardItem extends React.Component {
  render(){
    const {Product , REMOVEPRODUCT , ADDCOUNT ,DECRING }=this.props;
    const {name, id,num,price ,img}=Product
    return(
      <div className='row mb-2 text-capitalize text-lg-left text-center'>
         <div className = 'col-10 mx-auto col-lg-2 text-uppercase '>
           <img src = {'/' + img} alt = {name} className='img-fluid'/>
         </div>

         <div className = ' my-lg-auto mt-2 text-center col-10 mx-auto col-lg-2 text-uppercase '>
           <p>{name}</p>
         </div>

         <div className = ' my-lg-2 my-auto col-10 mx-auto col-lg-2 text-uppercase text-center '>
            <p>{price} LE</p>
         </div>

         <div className = 'my-2 col-10  mx-auto col-lg-2 text-uppercase text-center'>
         <button className='btn btn-outline-dark text-left mx-1'
         onClick={()=> DECRING(id) }>-</button>
         <span> {num} </span>
         <button className='btn btn-outline-dark text-left mx-1'
         onClick={()=> ADDCOUNT(id) }>+</button>
         </div>

         <div className = 'mt-2 mb-0 col-10 my-lg-auto mx-auto col-lg-2 text-uppercase text-center'>
          <p onClick={()=> REMOVEPRODUCT(id) }
          className='btn btn-outline-dark text-left mx-1'
          style={{border: 'none'}}>
            <i class="fas fa-trash"></i>
          </p>
         </div>
         <div className = 'my-lg-auto col-10 mx-auto col-lg-2 text-uppercase  text-center'>
           <p>{num*price } LE</p>
         </div>
      </div>
    )
  }
}
export default CardItem;
