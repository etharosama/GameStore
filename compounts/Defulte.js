//Defulte
import React from 'react';
import {
  Link,
} from "react-router-dom";
import {  BodyButton_v2 } from './styled/Button.js'

class Defulte extends React.Component {
  render() {
    return (
      <div className='container '>
        <div className='row'>
          <div className='col-10 mx-auto text-center text-tital mt-5'>
            <h1>404</h1>
            <h2>Error</h2>
            <h2>page not found !</h2>
            <h4>the requised url
            <span className = 'text-danger'>{this.props.location.pathname}</span> is not found</h4>
           <Link to ='/' >
             <BodyButton_v2 onClick={()=>{}}>Go the main page</BodyButton_v2>
           </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Defulte;
