import {
  SHOW_PRODUCT,
  ADD_PRODUCT  ,
  REMOVE_PRODUCT ,
  INCREASE ,CLEAR,
   DECRICING ,HIDE_PRODUCT} from '../actions/choiesProduct.js';
import { combineReducers } from 'redux'
import products from '../data.js'

let initalState = {
  products :products ,
  addProduct : [] ,
  total: 0
}

if (window.localStorage.getItem('Game_ethar_start')===null){
  storeinlocal (initalState);
}

function storeinlocal (opject) {
  let localStorage_1 = JSON.stringify(opject);
  window.localStorage.setItem('Game_ethar_start' ,localStorage_1) ;
}

function getfromlocal (){
  let localStorage_2 = window.localStorage.getItem('Game_ethar_start');
  return(JSON.parse(localStorage_2));
}

function userPlay(state = getfromlocal (), action) {

  switch (action.type) {
    case ADD_PRODUCT:
      let Product =
      state.products.map(
        i=>
        i.id === action.id ? {...i , num:1 }: i
      )
      let newProduct = Product.filter((i) => i.num!==0)
      let cal_1 = 0;
      newProduct.map((i) => {
        cal_1= cal_1 + i.num*i.price
        return 0 ;
       });
      let newState_1 = { products : Product  ,
         addProduct :  newProduct , total: cal_1}
      storeinlocal(newState_1)
      return newState_1

    case  REMOVE_PRODUCT:
      let Product_2 = state.products.map
        (i=> i.id === action.id ? {...i , num:0 } : i)
      let newState = Product_2.filter((i) => i.num!==0)
      let cal_2 = 0;
      newState.map((i) => {
        cal_2= cal_2 + i.num*i.price
        return 0 ;
       });
      let newState_3 = {products :Product_2 ,
         addProduct : newState , total: cal_2 }
      storeinlocal(newState_3)
      return newState_3

    case  INCREASE:
      let addProduct =
         state.addProduct.map((i) => i.id===action.id ?
         {...i , num:i.num+1} : i  ) ;
      let cal_3 = 0;
        addProduct.map((i) => {
          cal_3= cal_3 + i.num*i.price
           return 0 ;
          });
      let newState_2 = {...state , addProduct , total: cal_3} ;
      storeinlocal(newState_2) ;
      return newState_2 ;

    case  DECRICING:
        let addProduct_2 =
           state.addProduct.map((i) => i.id===action.id ?
           {...i ,  num: i.num=== 0? 0 :i.num-1 } : i ) ;
        let cal_4= 0;
             addProduct_2.map((i) => {
              cal_4= cal_4 + i.num*i.price
              return 0 ;
               });
        let newState_4 = {...state , addProduct :addProduct_2 , total:cal_4} ;
        storeinlocal(newState_4) ;
        return newState_4 ;
    case CLEAR :
      storeinlocal(initalState ) ;
      return initalState  ;
    default:
      return state
  }

}

function showModel (state = {isOpen : false , product :{}}, action){
  switch (action.type) {
    case SHOW_PRODUCT:
      return {isOpen : true , product :action.product };
    case HIDE_PRODUCT:
      return {isOpen : false , product :{}};
    default:
      return state ;
  }
}

const reducer = combineReducers({
  userPlay , showModel
})

export default reducer
