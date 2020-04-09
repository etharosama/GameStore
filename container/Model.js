import { connect } from 'react-redux'
import {addPRODUCT,  REMOVEPRODUCT , HIDEPRODUCT} from '../actions/choiesProduct.js';
import Model from '../compounts/Model.js'

const mapStateToProps = state => ({
  isopened : state.showModel.isOpen ,
  product :state.showModel.product
})

const mapDispatchToProps = dispatch =>
{
  return {
  addPRODUCT: id => {
    dispatch(addPRODUCT(id))
  } ,
  REMOVEPRODUCT: id => dispatch(REMOVEPRODUCT(id)) ,
  HIDEPRODUCT: id => dispatch(HIDEPRODUCT(id)) ,
}}

export default connect(mapStateToProps , mapDispatchToProps )(Model)
