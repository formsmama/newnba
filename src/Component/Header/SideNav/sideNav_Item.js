import React from 'react';
import {Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
// style is a module
import style from './sideNav.css';

const SideNavItems= () => {

  //Need to create a loop for each item to show
  //create an item list with an object and an array inside 

    const items = [
      // this create an index, type is the class 
      { 
        type: style.option,
        icon: 'home',
        text: 'Home',
        link: '/'
      },

      { 
        type: style.option,
        icon: 'file-text-o',
        text: 'New',
        link: '/news'


      },
      { 
        type: style.option,
        icon: 'play',
        text: 'Videos',
        link: '/videos'


      },
      { 
        type: style.option,
        icon: 'sign-in',
        text: 'Sign In',
        link: '/sign-in'


      },
      { 
        type: style.option,
        icon: 'sign-out',
        text: 'Sign Out',
        link: '/sign-pot'


      }

    ]

      // need to create the showitem function
      const showItems = () => {
        //return a loop with a function inside 
        return items.map((item,i ) => {
          
          return( 
            //need a key and i is the iteration number, inside the div.  Type =className
            <div key={i} className={item.type}>
              <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
              </Link>

            </div>
            )
        })

        
      }
  // <div className={style.option}>
  //       <Link to='/'>
  //         <FontAwesome name='home'/>

  //       </Link>
  // </div>
  return (
    
    <div> 
      {/* this is calling the function and showing the menu bar we see */}
      {showItems()}

    </div>  
    
  )
}


export default SideNavItems; 