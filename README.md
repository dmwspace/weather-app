# React Weather App

This is a web app located at http://dean-wright-weather-app.herokuapp.com/. When the user enters a US zip code into the text input box and hits the search button, the current weather conditions and five day forecast for that location are rendered.

### Why I Created This

I created this app because I thought that a simple weather app of this type would be cool to use. I just liked the idea of being able to type in a zip code and get a whole bunch of weather data from it.

### Technologies Used

The weather data that is used in this app is provided by weatherbit.io. I used functional components in React to code the frontend of this app and it was styled using Bootstrap css, or more specifically, react-bootstrap. It turned out that I needed a backend for this app so I used Express with the cors and request modules (more on that below). Both the frontend and backend were deployed, separately, to Heroku.

### Problems

The biggest problem that I had with this app concerned occasional (maybe 10%-20% of the time) fetch failures. Cors origin issues were the culprit. Most of the things that I found online about this type of issue talked about fixing the api but that was not possible in this case because it's not my api. So, I ended up using Express to build a proxy server. This worked very well while the app was still in development but when I tried to deploy the whole app to Heroku all of the fetches were failing and my attempts to fix the issue weren't working. After some more research I came to the conclusion that it would be easiest to build a separate backend and then deploy that project separately to Heroku. The frontend fetches were then pointed to the new backend and after a bit more tinkering all of the fetches are working properly.
