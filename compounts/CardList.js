//CardList
import React from 'react';
import CardItem from './CardItem'


class CardList extends React.Component {
  render(){
    const {Product , REMOVEPRODUCT , ADDCOUNT ,DECRING  }=this.props;

    return(
      <div className='container-fluid'>
        {Product.map((i) =>
          <CardItem key={i.id}
          Product ={i }
          REMOVEPRODUCT = {REMOVEPRODUCT }
           ADDCOUNT={ ADDCOUNT}
           DECRING ={DECRING }/> )}

      </div>
    )
  }
}
export default CardList;
