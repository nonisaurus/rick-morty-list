import React, { Component} from 'react';
import './App.css';
import Aside from './Aside';
import Main from './Main';
import { getCharacter } from 'rickmortyapi'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state({

  //   })
  // }

  componentDidMount(){
    // the website will load while this will get its data in the background (async keyword means it's expecting something asynchronous to happen inside the function)
    const onLoad = async () => {
      const randomNumber = []
      for (let i = 0; i < 5; i ++){
        randomNumber.push(Math.floor(Math.random() * 826) +1);
      }
      console.log(randomNumber)
      
      // await goes with it
      const initialCharacters = await getCharacter(randomNumber)
      console.log(initialCharacters)

      this.setState({
        initialCharacters: initialCharacters.data
      })

    } 
    onLoad();
  }

  render() {
    return (
      <div className="App">
        <Aside />
        <Main />
      </div>
    );
  }
}

export default App;
