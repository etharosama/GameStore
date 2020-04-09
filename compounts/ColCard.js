//ColCard
import React from 'react';

class ColCard extends React.Component {
  render() {
    return (
      <section className='container-fluid pt-5 pb-2 d-none  text-center d-lg-block'>
        <div className='row'>
          <div className = 'col-10 mx-auto col-lg-2  text-center text-uppercase font-weight-bold'>
            <p>Product</p>
          </div>
          <div className = 'col-10 mx-auto col-lg-2 text-uppercase font-weight-bold'>
            <p>name</p>
          </div>
          <div className = 'col-10 mx-auto col-lg-2  text-center text-uppercase font-weight-bold'>
            <p>price</p>
          </div>
          <div className = 'col-10 mx-auto col-lg-2  text-center text-uppercase font-weight-bold'>
            <p>quatity</p>
          </div>
          <div className = 'col-10 mx-auto col-lg-2  text-center text-uppercase font-weight-bold'>
            <p>remove</p>
          </div>
          <div className = 'col-10 mx-auto col-lg-2  text-center text-uppercase font-weight-bold'>
            <p>total</p>
          </div>
        </div>
      </section>
    )
  }
}

export default ColCard;
