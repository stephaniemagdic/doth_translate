<!-- <div align='center'>
  <a href="https://ibb.co/723H1sn"><img src="https://i.ibb.co/723H1sn/Shakespeare.png" alt="Shakespeare" border="0"></a>
</div> -->
# <p align='center'>[Doth Translate](https://stephaniemagdic.github.io/doth_translate/)</p>
## <p align='center'>[View Deployed Site Here](https://stephaniemagdic.github.io/doth_translate/)</p>
#### [Link to Project Spec](https://frontend.turing.edu/projects/module-3/stretch.html) - Week long project: concept, design and architect in under 7 days.

#### Attention: Unfortunately the API that supported this application was recently made unaccessible. This project is being reconceptualized and rebuilt.

---
## Table Of Contents
[Setup instructions](#setup-instructions) | [Technologies used](#technologies-used) | [Overview](#overview) | [Organizational Tools](#Organizational-Tools) | [Examples](#examples) | [Learning Goals](#learning-goals) | [Contributors](#contributors) | [Future features](#future-features) | [Reflections & Wins](#reflections-and-wins)

---

## Set-up Instructions
  + Fork this repo by clicking the ```Fork``` button in the upper right of this page
  + Clone your new repo down to your local machine in your chosen directory
  + Type ```npm install``` into the command line to install all dependencies
  + Type ```npm start``` into to the command line to start the React app. A browser window will appear running a local host url

---

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 

---

## Overview
+ Doth Translate is an application inspired by my previous middle school students and my favorite unit- Shakespeare! Elizabethan English is not easy to interpret, but it sure is fun to try! With the help of Doth Translate, a teacher can get students excited about diving into a working with Shakespearean texts by introducing them to popular Shakespearean quotes. With this simple application, students can work independently, in pairs, or in groups to generate quotes by theme or by Shakespearean play and use the context clues provided on hover to work to create their own interpretations. Students can save their interpretations before they move to their next quote of choice, so that when teachers come around to check for understanding, saved interpretations will be viewable. 
+ Doth Translate allows a user to:
  - Choose a quote category.
  - Browse and choose quotes further broken down by play title or theme.
  - Generate quotes from narrowed down selections by the click of a button. Don't like that a quote? Is one too difficult or just not interesting to you? Choose another.
  - See context clues for words on hover: the definition will pop up in a tooltip allowing students to use those clues to help create their interpretations.
  - Type and save your interpretation of the quote for later use.
  - Allow students to review and edit eachother's interpretataion. Click the pencil to go back and edit a previously saved interpretation.
  - Save quotes you'd like to come back to.
  - Delete quotes that are clogging up your favorites.
  - Coming Soon: Go back and edit your saved quotes. 
  
### Bell-Ringer Ideas:
  - Give each student poster paper. Have them copy the quote from the application and define the words underlined in the sentence. Have students draw connections between the definitions and words in the sentence and use a concept web to interpret specific phrases in the sentence.
  - Have a laptop set up at each desk. Generate a quote at each station. Play musical chairs ([preferably to fit the times](https://www.youtube.com/watch?v=T6QnThPGqIQ)). Have students rotate around the room in partners to visit each station and take note of their translation, making sure to save the quote before moving to the next station. The next group should revisit the same quote to edit the interpretation - not changing but adding to the original quote.
  - Couple with teacher pay teacher ideas to enhance a lesson: [TPT Shakesperean Language Lesson Plans](https://www.teacherspayteachers.com/Browse/Search:shakespearean%20language/Price-Range/Free) 
  - Use the application as a simple warm up or as practice when students finish an assignment early and are looking for something to do.
  - Use this application solely for a lesson on context clues! [TPT Context Clues Lesson Plans](https://www.teacherspayteachers.com/Browse/Search:context%20clues/Price-Range/Free/Grade-Level/Sixth)

---

## Organizational Tools

+ [Wireframes](https://miro.com/app/board/o9J_lvMEdaw=/)

+ [Persona-Student](https://docs.google.com/document/d/1UV5LH0c0km30bF26SDYU46BcUKD0wEqw1vzdnCZob7c/edit)

+ [Persona- Teacher](https://docs.google.com/document/d/1Wmgy0umEFigBY2lBsGkEFh_BD__9ly538DfWEYXg780/edit?usp=sharing)

+ [MVP](https://i.ibb.co/CM70fSn/shakespeare-gif-1.gif)

---

## Examples
<a href="https://ibb.co/DkkKnGs"><img src="https://i.ibb.co/922Yjwz/Screen-Shot-2021-09-28-at-6-37-43-AM.png" alt="Screen-Shot-2021-09-28-at-6-37-43-AM" border="0"></a>
<a href="https://ibb.co/rsDszmK"><img src="https://i.ibb.co/NScSJsg/Screen-Shot-2021-09-28-at-6-27-00-AM.png" alt="Screen-Shot-2021-09-28-at-6-27-00-AM" border="0"></a>
<a href="https://ibb.co/7yFP6Qz"><img src="https://i.ibb.co/Lpfm2rP/Screen-Shot-2021-09-28-at-6-31-54-AM.png" alt="Screen-Shot-2021-09-28-at-6-31-54-AM" border="0"></a>
<a href="https://ibb.co/ZzfDVz8"><img src="https://i.ibb.co/PGrHNGh/Screen-Shot-2021-09-28-at-6-32-09-AM.png" alt="Screen-Shot-2021-09-28-at-6-32-09-AM" border="0"></a>

---

## Learning Goals
+ This application is built using functional components in React.
+ Router is utilzed to allow a user to navigate back and forth between paths, and local storage is used to persist data, where applicable components use url query parameters on page load to match id in local storage to retrieve saved interpretations. 
+ MVP's user flows for both happy and sad paths are thoroughly tested using Cypress.

---

## Contributors
   + [Stephanie Magdic (Author)](https://github.com/stephaniemagdic) 
    - Favorite Shakespeare Play: 'Midsummer Night's Dream'
---

## Future Features
+ A user will be able to choose their reading level and get dictionary defintions and quotes leveled to their reading level.
+ I would like to make this responsive to an ipad as well since many schools use ipads as opposed to laptops especially in grade 5.
+ With more time, I plan to add PropTypes and a data cleaning function: I would like to filter thorugh my definition data and if a defintion is not found for a word, I would like to instead return null so that my component can read that prop. I would also like to provide multiple defintions per word if that word has more than one meaning.
+ A user will be able to interpret a saved quote.
+ I would like to further break down my components to handle a single responsibility. As functionality was added in a short amount of time, some components are larger than I would like.
+ I would like to test my non-MVP user flows. 
+ Code Architecture: I would like to refactor the applications code so if follows purely functional programming principles.

---

### Reflections and Wins Over the 7 Day Challenge
+ Wins:
  - I was able to complete much more functionalty and build out far beyond my MVP than I had originally thought possible in just a week.
  - I was able to conceptualize, plan, wireframe, test, and build the application in under 7 days, while building other applications required for the final assessment.
  - I was able to consume two API endpoints to provide quotes and context clues to make this application more student friendly.
  - I was able to learn and use a new npm package, react tooltip that allowed for a user friendly way to see context clues to help with interpretations.
+ Reflections:
  - The dictionary API I was originally using ran into an authentication error midway through the project. I had to find another API, subscribe and update my logic in my fetch requests.

