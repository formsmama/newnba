import React, {Component} from 'react';
import './layout.css'
import Header from '../../Component/Header/header';

class Layout extends Component {
  state= {


  }
  render(){
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }

}
export default Layout;
