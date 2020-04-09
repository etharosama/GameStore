//Titel
import React from 'react';

class Titel extends React.Component {
  render(){
    const {name , title} = this.props
    return(
      <div className = 'row'>
        <div className = 'col-10 mx-auto my-2 text-center text-tital '>
          <h1 className = 'text-capitalize font-weight-bold'>
            {name}<strong className = 'text-litte-red'>{title}</strong>
          </h1>
        </div>
      </div>
    )
  }
}
export default Titel
