import { connect } from 'react-redux'
import {addPRODUCT ,  REMOVEPRODUCT , SHOWPRODUCT } from '../actions/choiesProduct.js';
import Details from '../compounts/Details.js'


const mapStateToProps = state => ({
  product: state.userPlay.products 
})

const mapDispatchToProps = dispatch => ({
  addPRODUCT: id => {
    dispatch(addPRODUCT(id))
  } ,
  REMOVEPRODUCT: id => dispatch(REMOVEPRODUCT(id)) ,
  SHOWPRODUCT: producrt => dispatch(SHOWPRODUCT(producrt))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
