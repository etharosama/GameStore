import { connect } from 'react-redux'
import ProductList from '../compounts/ProductList.js'

const mapStateToProps = state => ({
    product : state.userPlay.products ,
    isopened : state.showModel.isOpen
})


export default connect(mapStateToProps )(ProductList)
