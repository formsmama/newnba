import React, {Component} from 'react';
import './layout.css'
import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer';
class Layout extends Component {
  // state will decide where the navbar is open or close 
  state= {
      //side bar will be closed when app it open 
      showNav: false,
      //listener to now when to open 
      // listener to now when to close 
    }

    toggleSidenav= (action) => {
      this.setState({
        showNav:action
      })
    }
    
  render(){
    return (
      <div>
        <Header
        // option pass by the header component 
        //show now 
          showNav={this.state.showNav}
          //hide will be a function 
          onHideNav= {() => this.toggleSidenav(false)}
          onOpenNav= {() => this.toggleSidenav(true)}
        
        
        />
        {this.props.children}
        <Footer/>
      </div>
    )
  }

}
export default Layout;
