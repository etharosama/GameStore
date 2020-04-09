//Card
import { connect } from 'react-redux'
import Card from '../compounts/Card.js'
import {REMOVEPRODUCT , ADDCOUNT ,DECRING , Clear}from '../actions/choiesProduct.js';

const mapStateToProps = state => ({
   Product : state.userPlay.addProduct ,
   total:state.userPlay.total,
})


const mapDispatchToProps = dispatch =>
{
  return {
  REMOVEPRODUCT: id => dispatch(REMOVEPRODUCT(id)) ,
  ADDCOUNT: id => dispatch(ADDCOUNT(id)) ,
  DECRING: id => dispatch(DECRING(id)) ,
  Clear: id => dispatch(Clear(id)) ,

}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)
