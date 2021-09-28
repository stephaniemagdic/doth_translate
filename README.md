# Doth Translate
## [Deployed Site](https://stephaniemagdic.github.io/doth_translate/)
#### [Link to Project Spec](https://frontend.turing.edu/projects/module-3/stretch.html)

## Table Of Contents
+ [Overview](#overview)
+ [Examples](#examples)
+ [Setup instructions](#setup-instructions)
+ [Learning Goals](#learning-goals)
+ [Technologies used](#technologies-used)
+ [Contributors](#contributors)
+ [Future features](#future-features)
+ [Reflections & Wins](#reflections-and-wins)

[Wireframes](https://miro.com/app/board/o9J_lvMEdaw=/)
[Persona-Student](https://docs.google.com/document/d/1UV5LH0c0km30bF26SDYU46BcUKD0wEqw1vzdnCZob7c/edit)
[Persona- Teacher](https://docs.google.com/document/d/1Wmgy0umEFigBY2lBsGkEFh_BD__9ly538DfWEYXg780/edit?usp=sharing)

![MVP](https://i.ibb.co/CM70fSn/shakespeare-gif-1.gif)

## Overview
+ Doth Translate is an application inspired by my previous middle school students and my favorite unit- Shakespeare! Elizabethan English is not easy to interpret, but it sure is fun to try! With the help of Doth Translate, a teacher can get students excited about diving into a working with Shakespearean texts by introducing them to popular Shakespearean quotes. With this simple application, students can work independently or together to generate quotes by theme or by Shakespearean play and use the context clues to work on an interpretation. Students can save their interpretations before they move to their next quote of choice, so that when teachers come around to check understanding, old interpretations will be viewable. 
+ Doth Translate allows a user to:
  - Choose a quote category.
  - Browse and choose quotes further broken down by play title or theme.
  - Generate quotes from narrowed down selection by the click of a button. Don't like that one? Is one too difficult or just not interesting to you. Choose another.
  - See context clues for words on hover: the definition will pop up in a tooltip allowing students to use those clues to help create their interpretations.
  - Type and save your interpretation of the quote for later use.
  - Allow students to review and edit eachother's interpretataion. Click the pencil to go back and edit a previously saved interpretation.
  - Save quotes you'd like to come back to.
  - Delete quotes that are clogging up your favorites.
  Coming Soon:
  - Go back and edit your saved quotes. (Full functionality coming soon...)

## Set-up Instructions
  + Fork this repo by clicking the ```Fork``` button in the upper right of this page
  + Clone your new repo down to your local machine in your chosen directory
  + Type ```npm install``` into the command line to install all dependencies
  + Type ```npm start``` into to the command line to start the React app. A browser window will appear running a local host url

## Learning Goals
+ This application is built using functional react. The UseEffect hook is used for asynchronous javascript, fetching from our quote and dictionary API on rendering of applicable components.
+ Router is utilzed to allow a user to navigate back and forth to between paths, and uses id's for stored interpretations, which are grabbed at the route on page load from local storage to allow access to that interpretation when rendering a new component. 
+ Cypress end to to end tests are utilized for happy and sad paths for the MVP's user flow.


## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 

- Class Photo Here: Shakespeare Unit.

## Contributors
   + [Stephanie Magdic (Author)](https://github.com/stephaniemagdic) 
    - Favorite Shakespeare Play: 'Midsummer Night's Dream'

## Future Features
+ A user will be able to interpret a saved quote.
+ I plan to add PropTypes and a data cleaning function.

### Wins and Challenges
+ Wins:
  - I was able to add a lot more functionality in a week than I had originally thought possible.
  - I was able to use a new npm package, react tooltip that allowed for a user friendly way to see context clues to help with interpretations.
+ Challenges:
  - The dictionary API I was originally using ran into an authentication error midway through the project. I had to find another API, subscribe and update my logic in my fetch requests.
  - Github has its own 404 page which seems to be interfering with my route set up intitally, so my error page does't show up. I ended up creating a workaround file on the gh pages branch to mimic my own set up, but will be looking into this further. 
