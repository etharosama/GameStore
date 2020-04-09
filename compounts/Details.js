//Details
import React from 'react';
import {
  Link,
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {BodyButton ,  BodyButton_v2 } from './styled/Button.js'

class Details extends React.Component {
  state = {
    product: {} ,
    isadd : false
  }
  componentDidMount(){
    const idCurrent = this.props.match.params.id ;
    const currentProduct = this.props.product.filter((i) => i.id ===idCurrent);
    let isadd = false;
    if (currentProduct[0].num !==0){
       isadd= true ;
    }
    this.setState({product: currentProduct[0]  , isadd }) ;
  }

  handelclick (id){
    if (this.state.isadd){
      this.props.REMOVEPRODUCT(id)
    }else{
      this.props.addPRODUCT(id)
    }
    this.setState(state => ({ isadd :  !state.isadd})) ;
    // this.props.SHOWPRODUCT(this.state.product)
  }
  render() {

    const { name , id , img , Platform , price ,
       Release_date , information} = this.state.product  ;
    return (
      <div className='container py-5'>
        <div className='row'>
          <div className='col-10 mx-auto text-center text-litte-red text-tital'>
            <h1> {name}</h1>
          </div>
        </div>
        <div className='row'>
           <div className='col-lg-6 col-10 mx-auto my-5 text-capitalize '>
             <img src = {'/' + img} alt = {name} className='img-fluid'/>
          </div>
          <div className='col-lg-6 col-10 mx-auto my-5 text-capitalize '>
            <h4> Platform : {Platform}</h4>
            <h4> Release date : {Release_date}</h4>
            <h6> price : {price} LE</h6>
            <h6> information :</h6>
            <p>{information}</p>
            <BodyButton onClick= {()=>this.handelclick(id)} >
             {this.state.isadd?'remove from card' :' Add to card'}
             </BodyButton >
            <Link to ='/' >
              <BodyButton_v2 onClick={()=>{}}>Go back</BodyButton_v2>
            </Link>
         </div>
        </div>
      </div>
    )
  }
}

export default withRouter( Details);
