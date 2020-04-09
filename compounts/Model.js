//Model
import React from 'react';
import {BodyButton ,  BodyButton_v2 } from './styled/Button.js'
import styled from 'styled-components'
import {Link} from "react-router-dom";

class Model extends React.Component {
  handelclick = (id)=>{
    const {
    REMOVEPRODUCT ,
    addPRODUCT ,
    HIDEPRODUCT , product }= this.props ;
    const {num} =product
    if (num===0){
      addPRODUCT(id)
    }else{
      REMOVEPRODUCT (id)
    }
    HIDEPRODUCT()
  }
  render (){
    const {
      isopened ,
      HIDEPRODUCT ,
      product }=this.props ;

    if ( !isopened ){
      return null
    }
    const {  name ,
      price ,
      img,
      num,
      id ,
      Platform , Release_date
      }=product
    return (
      <ModelContainer>
      <div className="container">
        <div className="row">
          <div id ='model'
          className="mx-auto col-8 col-md-6 col-xl-4 text-center p-4 ">
            <h5 className = ' p-1 text-tital'>{name}</h5>
            <img src = {'/' + img} alt = {name} className='img-fluid mx-1'/>
            <div className = 'text-left' >
              <h6 className='pt-3'> price : {price} LE </h6>
              <h6 className=''> Platform : {Platform} LE </h6>
              <h6 className='pb-3'> Release date : {Release_date} LE </h6>
              <div>
              <BodyButton  style={{fontSize: '1rem' , display: 'block'}}
              onClick={()=>this.handelclick(id)}
              className='my-1 '>
                { num ===0 ? 'add to card' : 'remove'}
              </BodyButton>
              <Link to='/' style={{textDecoration:' none'}}>
                <BodyButton_v2
                className='mx-0 d-block my-1 '
                 style={{fontSize: '1rem'}}
                onClick={()=>HIDEPRODUCT()}> contaiune shoping </BodyButton_v2>
              </Link>
              <Link to='/Cart'
              onClick={()=>HIDEPRODUCT()}
              className='mt-5 mb-0'> Go to card</Link></div>
            </div>

          </div>
        </div>
      </div>
      </ModelContainer>
    )
  }
}
export default Model

const ModelContainer = styled.div`
position: fixed;
top :0 ;
left :0;
bottom :0 ;
right :0 ;
background: rgba(0,0,0,0.3) ;
display: flex;
align-items: center;
text-align: right;

#model{
  background:var(--mainWhite) ;
  border-radius: 5px;
}

`
