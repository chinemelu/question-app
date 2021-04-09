# question-app
This product is a web based game that allows audiences to answer questions and review their performance at the end of the game. It was built with the mobile view only in mind.

# Getting Started
* Click on the `Clone` button.
* You can decide to download the zip file of the app onto the system or you can clone the repository from the terminal
* If you decide to clone the repository from the terminal, navigate to a directory of your choice on that terminal.
* Using SSH; copy and paste the following below on your terminal `git@github.com:chinemelu/question-app.git`
* Using HTTPS; copy and paste the following below on your terminal `https://github.com/chinemelu/question-app.git`
* Once the folder is cloned onto your computer, cd into the root of the folder and type `npm run install` in the terminal before pressing enter
* To run the program on a development server type `npm run serve` and press enter 
* To see the development build, go to a browser, type `http://localhost:8080` and press enter

## Deployment
The steps written below are for Heroku Deployment
* cd into the root folder of the application
* For a first time deployment, type `Heroku Create app-name` and press enter
* If you are in the application's master branch, you type `git push heroku master` and press enter
* Else, if you are, for example, in a `dev` branch, you type `git push heroku dev:master` and press enter
* The application will then be deployed onto Heroku and the url of the application will be given once the deployment is complete
* For heroku deployment debugging purposes, type `heroku logs --tail` in the terminal
* For subsequent deployments, if changes are made and committed, type `git push heroku branch-name:master -f` in the terminal and press enter
* For more information, see the [Heroku documentation](https://devcenter.heroku.com/articles/git)

The steps written below are for Deployment in Netlify
* Sign up to Netlify
* After logging into Netlify, Click on `Add a New Project` (first time user) or `New Site from Git`, if otherwise.
* Link to Github/Gitlab/BitBucket by clicking any of the buttons
* Authorize Netlify (first time user) by clicking on the `Authorize Netlify by Netlify` button
* Select the repository
* Configure the settings to your taste
* Click the `Deploy site` button

## What will you do differently to make the application scalable?
* I will use a database to supply the questions and store the user's scores
* I will implement session management (JWT/Cookies) so that the identity of the user can be known by a server and stored along with the user's scores.

## In a different environment or if you were given more time, what will you do differently?
* I will present page 3 (summary page) in a graphical format (number of correct solutions, number of wrong solutions etc.). This will aid the user visually, compared to using cards, and improve the user experience.
* I will use a database to persist data and retrieve records of each user
* I will implement a system where the user can review their answers, if there’s still time.
* I will show a timer with different colors at different times (green when there is still time, orange when the time is considerably spent, and red when there is little time left). This will aid the user visually and improve the user experience.

## Built With
* [Vue 3](https://v3.vuejs.org/) - The Progressive JavaScript Framework
* [lodash/upperFirst](https://www.npmjs.com/package/lodash.upperfirst) - The lodash method _.upperFirst exported as a Node.js module.
* [lodash/camelCase](https://www.npmjs.com/package/lodash.camelcase) - The lodash method _.camelCase exported as a Node.js module.
* [Vue3-tel-input](https://www.npmjs.com/package/vue3-tel-input) - International Telephone Input with Vue
* [Vuex](https://www.npmjs.com/package/vuex) - State Management Tool for Vue

## Authors
* Chinemelu Nwosu

