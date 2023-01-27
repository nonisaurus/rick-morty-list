# Rick and Morty List

I created a list of Rick and Morty character list using React, a bit of CSS and this [API](https://rickandmortyapi.com/documentation). 

<br>

> ### You can find my project [here](https://rad-clafoutis-3ef283.netlify.app/)

<br>

## Wireframe and planning 
![](./pictures/WireframeForRickAndMorty.png)

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
    -  [Netify](https://www.netlify.com/)
- Wireframing Tool:
    - Canva

<br>

## User Stories
***
As a user, I should be able to:
- [x] search for characters
- [x] filter through characters based on their status
- [x] add characters to my favourite list
- [x] remove character from favourite list
- [x] empty favourite list
- [x] see more information about the character I clicked 
- [x] add my own character to the screen
- [x] edit character card by giving the character a nickname 

<br>

## Overview
***
![](./pictures/projectoverview.png)


### Structure

<img align="right" width="130" height="250" src='./pictures/components.png'>

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

### Building Process
- First I started by creating the wireframe to visualise what I want the outcome to look like.
- I set up my components and created a static version of the app.
- Then I created a function for each of these components.
- Afterwards I added a bit of styling.

<br>

### Components
<details> 
    <summary> 
      App
    </summary>
    <img src='./pictures/app-component.png'>
</details>
<details> 
    <summary> 
      Aside
    </summary>
    <img src='./pictures/aside-component.png'>
</details>
<details> 
    <summary> 
      Search
    </summary>
    <img src='./pictures/searchbyname-component.png'>
</details>
<details> 
    <summary> 
      Filter
    </summary>
    <img src='./pictures/filter-component.png'>
</details>
<details> 
    <summary> 
      Favourite
    </summary>
    <img src='./pictures/favs-component.png'>
</details>
<details> 
    <summary> 
      Extra info
    </summary>
    <img src='./pictures/extrainfo-component.png'>
</details>
<details> 
    <summary> 
      Main
    </summary>
    <img src='./pictures/main-component.png'>
</details>
<details> 
    <summary> 
      Character Cards
    </summary>
    <img src='./pictures/charactercards-component.png'>
</details>
<details> 
    <summary> 
      Add Extra Character
    </summary>
    <img src='./pictures/addingcharacter-component.png'>
</details>


<br>

## Challenges
This is my very first React Project so building something from scratch itself was a pretty big challenge itself.

- I had to draw a 'tree' of the components to visualise where to place each function. 
- I find it challanging to think about setting states and using these to make certain elements work on the app but eventually I put something together.

<br>

## Key Learning
1. I need to focus executing a code and not spending hours on what would be the best practice. Then when it is working focusing on how to make it more officiant.

2. I need to learn to step away from the screen and take breaks because it is crucial for my brain to be able to function well throughout the week so I will not burn out in 48 hours.

3. If you can’t find the answer written online then try asking teachers or peers before watching hours and hours worth of videos on Youtube just to end up asking a human about your problem.

<br>

## Future Improvements 
- Adding local storage
- Making the website responsive with a better layout
- Adding new background picture when the favourite button is pressed
- Adding option to choose your character picture
- Adding an all button
- Adding pagination to be able to display all characters

<br>

## Bugs
- The search and filter components work seperatly 
- You have to re fresh the page every time you want to go back to the 9 main randomly displayed pictures.
