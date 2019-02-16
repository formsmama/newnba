import React,{Component } from 'react';
import axios from 'axios';


class NewsSlider extends Component {
  // need to pass the news. so create a state with empty array for each item
    state ={
      news:[]
    }
    //make a resquest to the server
    componentWillMount(){
      axios.get(`http://localhost:3004/articles`)
      .then( response => {
        this.setState({
          news:response.data
        })
      })
    }
    render() {
      console.log(this.state.news)
      return (
        <div> 
          Slider 
       </div>
      )
    }
}

export default NewsSlider;