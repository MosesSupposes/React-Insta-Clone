import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from '../src/dummy-data';
import PostGrid from './components/PostGrid/PostGrid';

export default class App extends React.Component {
  state = {
    posts: []
  }
  
  componentDidMount() {    
    this.setState({posts : dummyData})
  }
  
  render() {
    return (
      <div className="App">

        <SearchBar />

        <PostGrid posts = {this.state.posts} />

      </div>
    )
  }
}
