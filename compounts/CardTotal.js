//CardTotal
import React from 'react';
import { BodyButton , BodyButton_v2  } from './styled/Button.js'
import PayPelButon from './PayPelButon'

class CardTotal extends React.Component {
  render(){
    const {Clear , total}=this.props;
    const taxtes =0.023;
    const totalPrice = total+total*taxtes;
    return(
      <div className='container-fluid text-tital mt-5 col-8 ml-0'
       style={{ borderTop: '1px solid'}}>

       <p className = 'text-tital text-dark-red mt-2 '
          style={{fontSize: '1.06rem'}}>
       <span className ='text-litte-red text-uppercase'> price : </span>{total} LE</p>
       <p className = 'text-tital text-dark-red mt-2 '
          style={{fontSize: '1.06rem'}}>
       <span className ='text-litte-red text-uppercase'>taxtes : </span>{Math.floor( total*taxtes)} LE</p>
       <p className = 'text-tital text-dark-red mt-2 '
        style={{fontSize: '1.06rem'}}>
       <span className ='text-litte-red text-uppercase'>total price : </span>{Math.floor(totalPrice)} LE</p>

       < BodyButton onClick={Clear}
       style={{fontSize: '1.06rem'}}
       className = ''>
         Clear Card
       </ BodyButton >

       <div className='my-2'>
       <PayPelButon  total={totalPrice} onSuccess={Clear} history ={this.props.history} />

       </div>

      </div>
    )
  }
}
export default CardTotal;
