import React,{Component } from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';
import {URL} from '../../../config';

class NewsSlider extends Component {
  // need to pass the news. so create a state with empty array for each item
    state ={
      news:[]
    }
    //make a resquest to the server
    componentWillMount(){
      axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
      .then( response => {
        this.setState({
          news:response.data
        })
      })
    }
    render() {
      console.log(this.state.news) 
      return (
        // this is going to receive and show the infomartion form slide_templates 
        // need to pass the props and the data 
        <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
      )
    }
}

export default NewsSlider;
