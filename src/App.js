import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component' 
import { SearchBox } from './components/search-box/search-box.component'
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: "M2D69tHCgCGYDPS9IsjqwnJ8sQ5TJIBppJDd9eCoPDY" });

class App extends Component{
  constructor(){
    super()
    this.state=
    {
      characters : [],
      searchField: ''
    }; 
    this.handleChange = this.handleChange.bind(this);
  }

  getPhotosFromUnsplash = (tag = 'test') => {
    unsplash.search.photos(tag, 1, 12, { orientation: "portrait" })
    .then(response => response.json())
    .then(json => this.setState({characters: json.results})) 
  }
  componentDidMount(){
    this.getPhotosFromUnsplash();
  }
  handleChange = (e) => {
    this.setState({searchField : e.target.value});
    this.getPhotosFromUnsplash(e.target.value);
  }
  render(){
    const {characters, searchField} = this.state;
    return(
      <>
      <div className="App">
        <h1>Image Show</h1>
        <>
      <SearchBox 
        placeholder='search characters'
        handleChange={this.handleChange}>
      </SearchBox>  
        <CardList characters = {characters}>  
        </CardList>
        </>
    </div>
       </>
    )
  }
}

export default App;
