# Rick and Morty List

For my second General Assembly project, I created an application of a Rick and Morty character list using React, a bit of CSS and this [API](https://rickandmortyapi.com/documentation). 

<br>

> ### You can find my project [here](https://rad-clafoutis-3ef283.netlify.app/)

<br>

## Timeframe
 I had 5 and a half days to complete this project, and I worked independently.


<br>

## Technology used
- Languages used:
    - CSS
    - React
- Developer Tools:
    - Command Line
    - Visual Studio Code
    - Google Chrome
- Deployment: 
    - Netify
- Wireframing Tool:
    - Canva

<br>

## Brief

General

- Build a web application from scratch, without a starter codebase. 
- Use React with create-react-app to build your application.
- Plan your application using wireframes and user stories.
- Craft a README.md file that explains your app to the world.
- Deploy your app online, where the rest of the world can access it.

<br>

Technical

 - Add a new item to a list
- Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
- Edit an item from a list
- Remove an item from a list
- Clear/delete all items
- Clear/delete only marked items
- Fetch data from at least one 3rd party API using Axios or fetch.
- Make frequent Git commits with descriptive messages, explaining your commit.


<br>

## Wireframe and planning 
I began by selecting an API and a theme. Next, I created a wireframe to map out the project's design. Then, I established the component structure of my React application to visualise my goals clearly before proceeding with the coding process.

![wireframe](./pictures/WireframeForRickAndMorty.png)


<br>

### Building Process

I began by setting up the components and creating a static version of the application. As the API was essential for displaying all the data, I executed the API call to retrieve the necessary information.

<br>

Next, I worked my way through each component to add the required functionality. I ensured that each component functioned properly before proceeding to the next, thereby minimising errors and improving the overall efficiency of the coding process.
Once all the components were fully functional, I proceeded to add some styling to enhance the visual appeal of the application. I experimented with various styling techniques and elements to achieve a cohesive and aesthetically pleasing design.

<br>

I was especially pleased with my CharacterCard component because it required me to understand and integrate several complex elements. These included passing functions down from the parent element's parent element, mapping over this component to display multiple character cards from the API and presenting the information in an organised and user-friendly format.

```
CharacterCard.js 
            <div className="character-container">

                <img className="character-pic" alt="character picture" src={props.picture} onClick={props.handleExtraInfo} ></img>

                <button className="character-btn fav-btn" onClick={props.handleToggleFavourite} ></button>

                <button className="character-btn nick-btn" onClick={(e) => props.addNicknameFunction(e)} ></button>
                <div className="character-name-contain">
                    <h1 className="character-name" >{props.name}</h1>

                    <p className="character-nick" >{props.nickName}</p>
                </div>
                
            </div>
```

Main.js - where I map over this array to display everything in the component above and pass down a function

```
    addNicknameFunction = (character) => {
        const input = prompt("What's your nickname for this character?"); 
        character.nickName = input;
        this.setState({
        })
      }

        const onLoadCharactersMap = this.props.charactersToShow.map((character) => {
        return <CharacterCard 
            handleToggleFavourite={() => this.props.handleToggleFavourite(character)} 
            handleExtraInfo={() => this.props.handleExtraInfo(character)}
            name={character.name} 
            picture={character.image} 
            key={character.id}
            addNicknameFunction={() => this.addNicknameFunction(character)}
            nickName={character.nickName}
            />
```

App.js - the functions I am sending down to the component above

```
  handleToggleFavourite = (character) => {
    const newFavouriteCharacters = [...this.state.favouriteCharacters]
    const characterIndex = newFavouriteCharacters.indexOf(character)
    if (characterIndex === -1){
          newFavouriteCharacters.push(character) 
    } else {
      newFavouriteCharacters.splice(characterIndex, 1)
      if(this.state.currentlyShowing === 'allcharacters'){
        this.setState({
          favouriteCharacters: newFavouriteCharacters
        })
      } else {
        this.setState({
        charactersToShow: newFavouriteCharacters
      })
      }

    } 
    this.setState({
      favouriteCharacters: newFavouriteCharacters
    })
  }
```

Structure

1. index 
2. App
    - Aside
        - search
        - filter
        - favourite
        - extra info
    - Main
        - character cards
        - adding your own character

<br>

## Challenges
My very first React project was an exciting yet challenging adventure, as I was building everything from scratch. To overcome this challenge, I began by drawing a 'tree' of the components to better visualise where each function should be placed.

Although it was initially difficult for me to grasp the concept of setting states and utilising them to make certain elements work in the application, I did more research and gradually began to gain a better understanding. There was a lot of trial and error before I found the right way to set up my components.

Despite the initial challenges, I was able to create a functional application by putting together all the elements I had learned. By persevering through the difficulties and gaining an understanding of the concepts, I developed a basic foundation of React knowledge that will benefit me in future projects.

<br>

## Wins
My biggest win was adding new character cards to my project. To achieve this, I began by creating an object that could capture the user's input, followed by adding a randomly generated number as the ID, and a pre-selected image.
Afterwards, I utilised the "state" functionality in React to automatically re-render the page once the object was complete. Finally, I was able to add the card to the front of the list by utilising the "unshift" method.

```
    addNewCharacterClick = (e) => {
        e.preventDefault()
        // object to create new character card
        const ownCharacter = {
            name: this.state.addCharacterName,
            id: Math.floor(Math.random() * 1000),
            image: 'https://media1.giphy.com/media/3viE7HuGCTCwgw6kTW/200w_s.gif'
          }

        this.setState({
            addCharacterName: ''
        })
        // add it to the front of the displayed array
        this.props.charactersToShow.unshift(ownCharacter)
    }
```

***

Overview

![overview](./pictures/projectoverview.png)

<br>

## Key Learning
1. I need to focus executing a code and not spending hours on what would be the best practice. Then when it is working focusing on how to make it more officiant.

2. I need to learn to step away from the screen and take breaks because it is crucial for my brain to be able to function well throughout the week so I will not burn out in 48 hours.

3. If you can’t find the answer written online then try asking teachers or peers before watching hours and hours worth of videos on Youtube just to end up asking a human about your problem.

<br>

## Future Improvements 
Although there are still some bugs in the project, I am quite satisfied with my progress considering that this was my first project using React and making an API call. While I would like to fix those bugs eventually, I also feel that leaving them as it is, would be a great reminder of how much I have learned in the space of a few weeks.

<br>

## Bugs
- The search and filter components work seperatly 
- You have to re fresh the page every time you want to go back to the 9 main randomly displayed pictures.
