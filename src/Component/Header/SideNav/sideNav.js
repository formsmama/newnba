import React from 'react';
//add simple sidenav dependency- SideNav is the name of the folder
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_Item';

//sidenavigation is reciving props fronm header.js so we need to add props
const SideNavigation = (props) => {
  return(
    <div>
      {/* this is when we start adding the nav with the SideNav tag--- we imported this SideNav */}
      {/* this SideNav need configuration since it comes from layout-state-header/header.js */}
      <SideNav 
        // showNaw is a state from layout -as this.state. and is passing by header.js as a props. so props is the passing 
        showNav={props.showNav}
        // when to hide - layout HideNav= {() => this.toggleSidenav(false)}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          maxWidth:'150px'
        }}
        >
          {/* this sidenav will need a file under Sidebar*/}
          <SideNavItems/>
    
        

      </SideNav>
    </div>
  )
}

export default SideNavigation;