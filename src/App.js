import React, { Component} from 'react';
import './App.css';
import Aside from './Aside';
import Main from './Main';
import { getCharacter } from 'rickmortyapi'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      charactersToShow: [],
      searchCharacter: '',
      searchValue: '',
      status: ''
    }
  }

  componentDidMount(){
    // the website will load while this will get its data in the background (async keyword means it's expecting something asynchronous to happen inside the function)
    const onLoad = async () => {
      const randomNumber = []
      for (let i = 0; i < 5; i ++){
        randomNumber.push(Math.floor(Math.random() * 826) +1);
      }
      // await goes with it
      const charactersToShow = await getCharacter(randomNumber)
      this.setState({
        charactersToShow: charactersToShow.data
      })
    } 
    onLoad();
  }


  APICall = (value) => {
    const apiUrl = `https://rickandmortyapi.com/api/character?${value}`
    fetch(apiUrl)
    .then((response) => {
      return response.json()
    })
    .then((results) => {
      this.setState({
        charactersToShow: results.results,
      })
    })
    .catch((error) => {console.log('api doesnt work')})
  }


  handleSearchInput = (e) => {
    // console.log('handlesearch >>', e) 
    const userInput = e.target.value

    this.setState({
      searchValue: userInput
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Aside 
            handleSearchInput={this.handleSearchInput} 
            searchValue={this.state.searchValue} 
            APICall={this.APICall} 
            charactersToShow={this.state.charactersToShow}
            status={this.state.status}
          />
        </div>
        <div>
            <p>title</p>
            {!this.state.charactersToShow && <h1>Try again! that's not a character...</h1>}
            {this.state.charactersToShow && <Main charactersToShow={this.state.charactersToShow} />}
        </div>
      
      </div>
    );
  }
}

export default App;
