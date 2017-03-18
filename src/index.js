import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA1yocOx3bPLj-nyJv7anqj8sSzf35WT78';



//create a new component. This should produce some HTML


 class App extends Component {
   constructor(props) {
     super(props);

     this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('surfboards');
}


   videoSearch(term){

     YTSearch({key: API_KEY, term: term}, (videos) => {
       this.setState({
         videos : videos,
         selectedVideo:videos[0]
       });
       // this.setState({videos : videos}); This is ES6 syntax.
     });
    }
   


  render() {
     return (
       <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
        </div>
     );
  }
 }

//Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
