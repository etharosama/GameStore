//EmptyCard
import React from 'react';
import Titel from './Titel'

class EmptyCard extends React.Component {
  render() {
      return(
        <section className='container py-5 '>
            <Titel  name = 'Your card is' title=' empty' />
        </section>

      )
    }
}

export default EmptyCard ;
