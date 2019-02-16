import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {
  //this props will be showing on the layout.js

  const navBars = () => (
    <div className= {style.bars}>
      <FontAwesome name= 'bars'
      // this is the one that opens the menu . first need listener 
        onClick={props.onOpenNav}
        style= {{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer'
        }}
      />

    </div>
  )
  
  const logo= () =>(
    
      <Link to = '/' className={style.logo}>
        <img alt='nba logo' src= '/images/nba_logo.png' /> 
      </Link>
    
  )
  //create SideNav folder  under the Header folder
  return(
    <div>
      <header className={style.header}>
        
        <SideNav {...props}/>
         <div className= {style.headerOpt}>
          {navBars()}
            {logo()}
         </div>

      </header>
    </div>
  )
}

export default Header;