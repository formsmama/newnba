//this is a stateless component

import React from 'react';
//need to add the slider remember is on index js 
import Slick from 'react-slick';
import styles from './slider.css';
import {Link} from 'react-router-dom';
// props is receiving the actual news data 
const SliderTemplates = (props) => {
    let template= null;
  // need to create a regular const  to hold all the setting 
    const settings =  {
      dots:true,
      infinite:true,
      arrows:false,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1,
      ...props.settings
      
    }

    switch(props.type){
      case('featured'):
        template = props.data.map( (item,i) => {
          return(
            <div key={i}>
              <div className = {styles.featured_item}>
                <div className={styles.featured_image}
                  style={{
                    background:`url(../images/articles/${item.image})`
                  }}> </div>
                  
                   
                   <Link to={`/articles/${item.id}`}>
                      <div className={styles.featured_caption}> 
                      {item.title}

                      </div>
                   </Link>
              </div>
            </div>
          )
        })
        break;
      default:
        template = null; 
    }
  return (
    // NOW add slick in order to pass the setting you need to add 3 dots
    <Slick {...settings}>
     {/* need to create a template  */}
        {template}
    </Slick>
  )

}

export default SliderTemplates;