//Card
import React from 'react';
import Titel from './Titel'
import ColCard from './ColCard.js'
import EmptyCard from './EmptyCard'
import CardList from './CardList'
import CardTotal from './CardTotal'

class Card extends React.Component {
  render() {
    if (this.props.Product.length===0){
      return(
        <EmptyCard/>
      )
    }
    return (
      <section className='container py-5 '>
        <Titel  name = 'Your' title=' Wishes' />
        <ColCard/>
        <CardList {...this.props}/>
        <CardTotal {...this.props} />
      </section>
    )
  }
}

export default Card;
