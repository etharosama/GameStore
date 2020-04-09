import { connect } from 'react-redux'
import Product from '../compounts/Product.js'
import {addPRODUCT,  REMOVEPRODUCT , SHOWPRODUCT } from '../actions/choiesProduct.js';

const mapStateToProps = state => ({
  // addProduct : state.userPlay
})


const mapDispatchToProps = dispatch =>
{
  return {
  addPRODUCT: id => {
    dispatch(addPRODUCT(id))
  } ,
  REMOVEPRODUCT: id => dispatch(REMOVEPRODUCT(id)) ,
  SHOWPRODUCT: producrt => dispatch(SHOWPRODUCT(producrt)) ,
}}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
