//Product
import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";


class Product extends React.Component {
  state = {
    opendetails : false
  }
  handelclick = (id)=>{
    this.props.SHOWPRODUCT(this.props.product)
  }
  render() {
    const{
      product,
    }=this.props ;

    const {
      name ,
      price ,
      img,
      id ,
      num}=product

      //let isInCard = addProduct.filter(i=> i.id === id) ;
  //  console.log(isInCard);
    return (
      <ProductCard className = 'col-xl-4 col-lg-6 col-md-10 col-10 mx-auto mx-lg-0'>
        <div  className ='card'>
          <div className ='img-container ' onClick = {()=>{}}>
            <div  className ='container'>
              <Link to ={ `/details/${id}`}>
                <img src = {img} alt = {name}/>
              </Link>
              <button className='btn-card'
                onClick = {()=>this.handelclick (id)}>
                  <div className = 'text'>
                    {num ===0  ?
                      <i className = 'fas fa-cart-plus mr-2'/>
                    : <p> remove from card </p>}
                  </div>

                </button>
            </div>

            <div className='data' >
              <h5>{name}</h5>
              <h6>{price} LE</h6>
            </div>

          </div>
        </div>
      </ProductCard>
    )
  }
}

export default Product ;

const ProductCard = styled.div`
text-align: center;
& img {
  height: 15rem;
  width: 100%;
  object-fit: cover;
  padding: 0 0px;
  transition: .5s ease;
  backface-visibility: hidden;
}
& a{
  width: 100%;
  height:100%;
}
/* & .img-container{
  position: relative;
} */
& .container{
  position: relative;
  padding : 0px;
  height: 100%;
  width: 100%;
}
& .btn-card{
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  bottom: 0rem ;
  right: 0rem ;
  padding: 6px;
  background:var(--orange);
  color : var(--mainWhite) ;
  border: none;
  border-radius: 5px 0px 0px;
  font-weight: bold;
}

& .img-container:hover .btn-card{
  opacity: 1;
}

& .text p {
  margin: 2px -20px 2px 2px!important;
  padding:0px 20px 0px 0px;
}
& .data{
  display: flex;
  text-align: right;
  padding: 10px;
}
& .data h6{
  margin-left: auto;
  line-height: 30px;
}
& .data h5{
  margin: 0;
  padding: 0;
  line-height: 30px;
  font-weight: bold;
}
`
