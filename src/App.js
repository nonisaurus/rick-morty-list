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
      searchValue: ''
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
    console.log('apicall', value)
    const apiUrl = `https://rickandmortyapi.com/api/character?${value}`

    fetch(apiUrl)
    .then((response) => {
      return response.json()
    })
    .then((results) => {
      console.log(results)
      this.setState({
        charactersToShow: results.results
      })
    })
    .catch((error) => {console.log('api doesnt work')})
  }


  handleSearchInput = (e) => {
    // console.log('handlesearch >>', e) 
    const userInput = e.target.value
    console.log(userInput)

    this.setState({
      searchValue: userInput
    })
  }

  render() {
    return (
      <div className="App">
        <Aside handleSearchInput={this.handleSearchInput} searchValue={this.state.searchValue} APICall={this.APICall} />
        <Main charactersToShow={this.state.charactersToShow} />
      </div>
    );
  }
}

export default App;
