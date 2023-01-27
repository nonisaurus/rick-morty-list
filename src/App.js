import React, { Component} from 'react';
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
      status: '',
      favouriteCharacters: [],
      current: {},
      currentlyShowing: 'allcharacters'
    }
  }

  componentDidMount(){
    // the website will load while this will get its data in the background (async keyword means it's expecting something asynchronous to happen inside the function)
    const onLoad = async () => {
      const randomNumber = []
      for (let i = 0; i < 9; i ++){
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

  // API CALL
  APICall = (value) => {
    const apiUrl = `https://rickandmortyapi.com/api/character?${value}`
    fetch(apiUrl)
    .then((response) => {
      return response.json()
    })
    .then((results) => {
      this.setState({
        charactersToShow: results.results
      })
    })
    .catch((error) => {console.log('api doesnt work')})
  }

  // SAVE SEARCH INPUT
  handleSearchInput = (e) => {
    e.preventDefault()
    const userInput = e.target.value
    this.setState({
      searchValue: userInput
    })
  }


  // FAVOURITE BUTTON
  handleToggleFavourite = (character) => {
    // spread operator ... to make a shallow copy saved in variable
    const newFavouriteCharacters = [...this.state.favouriteCharacters]
    // saving index of character
    const characterIndex = newFavouriteCharacters.indexOf(character)
    // if the characterID is not in the array (-1) then push it to the new array (newfavcharac) 
    if (characterIndex === -1){
          newFavouriteCharacters.push(character) 
    } else {
      //else (cause it is in the array) then take it out and show only favs array
      newFavouriteCharacters.splice(characterIndex, 1)
      this.setState({
        charactersToShow: newFavouriteCharacters
      })
    } 
    // set favcharac state this this local variable
    this.setState({
      favouriteCharacters: newFavouriteCharacters
    })
  }

  // toggle function
  handleShowFavourites = () => {
    if(this.state.currentlyShowing === 'allcharacters'){
      // it will update the character to show with the favs
    this.setState({
      previousList: this.state.charactersToShow,
      charactersToShow: this.state.favouriteCharacters,
      currentlyShowing: 'favourites'
    })
    } else {
      this.setState({
        charactersToShow: this.state.previousList,
        currentlyShowing: 'allcharacters'
      })
    }
  }


  // CLEAR FAVS
  clearFavourites = (e) => {
    e.preventDefault()
    this.setState({
        favouriteCharacters: [],
        charactersToShow: []
    })
}

   // EXTRA INFO WHEN CHARACTER CARD CLICKED
   handleExtraInfo = (character) => {
    //if IDs match than empty object otherwise add it to display extra info
    if (character.id === this.state.current.id){
      this.setState({
        current: {}
      })
    } else {
      this.setState({
        character: this.state.charactersToShow,
        current: character
      })
    }
  }



  render() {
    return (
      <div className="app">

          <Aside 
            handleSearchInput={this.handleSearchInput} 
            searchValue={this.state.searchValue} 
            APICall={this.APICall} 
            charactersToShow={this.state.charactersToShow}
            status={this.state.status}
            handleShowFavourites={this.handleShowFavourites}
            clearFavourites={this.clearFavourites}
            current={this.state.current}
            currentlyShowing={this.state.currentlyShowing}
            />

        <div className="main-wrapper" >
            <h1 className="title-main"></h1>
            {!this.state.charactersToShow && <h1>Try again! that's not a character...</h1>}
            {this.state.charactersToShow && 
            <Main 
            charactersToShow={this.state.charactersToShow}
            handleToggleFavourite={this.handleToggleFavourite}
            handleExtraInfo={this.handleExtraInfo}
            />}
        </div>
      
      </div>
    );
  }
}

export default App;
