//class base component
import React, {Component} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../../config';
import styles from './newlist.css';


class NewsList extends Component { 
  state = {
    items: [],
    start: this.props.start,
    end:this.props.start + this.props.amount,
    amount:this.props.amount

  }
// this fetched the infomration from the url 
  componentWillMount(){
    this.request( this.state.start, this.state.end)
  }
// this is function to the get more buttom
  request = (start,end) => {
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
    .then(response => {
      this.setState({
        items: [...this.state.items,...response.data]
      })
    })
  }
  //this variable is set to a funcion calling the last article and mas 3 more.  the amount comes from home.js newslist 
  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end  )
  }
  
  renderNews = (type) => {
    let template = null;
    switch(type){
      case('card'):
        template= this.state.items.map((item,i) => (
          // this will allow the new article to enter from the side 
          <CSSTransition
              classNames = {{
                enter:styles.newsList_wrapper,
                enterActive:styles.newsList_wrapper_enter
              }}
              timeout= {500}
              key={i}

          >
              <div> 
                <div className={styles.newslist_item}>
                  <Link to={`/articles/${item.id}`}>
                    <h2>{item.title}</h2>
                  </Link>
                 </div>
              </div>

          </CSSTransition>
          
        ))
        break; 
      default:
        template = null;
    }

    return template; 
  }
  
    render (){
      return(
        <div>
          {/* //transtion group inside is going to have  component name and className */}
          <TransitionGroup
                component= "div"
                className= "list"
                
          > 
              {this.renderNews(this.props.type)}
          </TransitionGroup>
          {/* need to create a button template since there are two different buttom on this page */}
          {/* button need to be created under widget */}
            <Button
              type="loadmore"
              // the load more is a function being called ()
              loadMore={() => this.loadMore()}
              cta ="Load More News"
            />

        </div>
      )
    }
}



export default NewsList;