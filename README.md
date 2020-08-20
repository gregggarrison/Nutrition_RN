# Nutrition_RN

Get healthy by working smarter not harder!


## Table of contents

- [General Info](#general-info)
- [Intro Video](#intro-video)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General Info

Losing weight/getting healthy is a daunting task not just on a physical level. Change is scary, intimidating and not knowing where to start is a huge deterrent from initiating the process. 

Nutrition_RN (working title) helps alleviate some of the stress that comes with traveling unchartered territories.  The concept of losing weight is simple... INPUT < OUTPUT.  My app will establish your BMR (minimum number of calories required for basic functions at rest source: https://www.healthline.com/health/what-is-basal-metabolic-rate#bmr-vs-rmr).  

## Intro Video
Coming soon....

## Technologies

* React Native
* Ruby on Rails
* Nutritionix API
* Clarifai API

## Setup

Two seperate gitHub repos (frontend and backend) have been created for this project.

To run this project, install [Nutrition_RN_Backend] (https://github.com/gregggarrison/Nutrition_RN_Backend) locally by cloning the GitHub repo and typing the following:
```ruby
rails db:migrate
rails s
```

Once completed install [Nutrition_RN] (https://github.com/gregggarrison/Nutrition_RN) locally by cloning the GitHub repo and typing the following: 

```ruby
npm install
npm start
```

You will also need to get API keys for the following:


[Nutritionix](https://developer.nutritionix.com/signup) - Nutritional value lookup.

[Clarifia](https://docs.clarifai.com/getting-started/authentication/app-specific-api-keys) - Computer Vision / AI

Again both are free and can be setup within a few minutes. 


## Features

* User is directed to profile page and enters their pedigree info:
    *username,
    *age,
    *height,
    *weight,
    *sex,
    *PAL (physical activity level)

![ProfileScreen](https://user-images.githubusercontent.com/61663115/90787216-b87d3400-e2c1-11ea-8a9c-1e4311ed6d42.png)
    
    
* From there the app calculates user's BMR (see definition above) and based on their activity level it establishes their break-even calories intake as well as recomended calories based on users goal. 

![MacroScreen](https://user-images.githubusercontent.com/61663115/90787302-d21e7b80-e2c1-11ea-8416-e7fddcd9f552.png)

* Once the user establishes their calorie intake is provides a recomended/dynamic macronutrient breakdown which I have setup as 30/30/40 (calories from carbs/fat/protein).

* Now that the user has setup their KPI's it's time to track their meals and put plan into action by utilizing Nutritionix natural foodpoint endpoint.  They can use the search bar to query a food item that will return the nutritional value of said item along with %DV of nutrients. User has the option to save and add to their meals or discard and create a new search.

![HomeScreen](https://user-images.githubusercontent.com/61663115/90786978-79e77980-e2c1-11ea-97b2-8fd4426f1657.png) ![NutritionalValue](https://user-images.githubusercontent.com/61663115/90787439-f5492b00-e2c1-11ea-9585-d850a42c5b39.png)

* If the user doesn't feel like keying in their search they have the option of utilizing their camera to take a photo of their food item and get the same result utilizing Clarifai's image recognition library. 

![imgRecAct](https://user-images.githubusercontent.com/61663115/90788838-6f2de400-e2c3-11ea-8632-8266f77b7dbe.png)![imgRecResult](https://user-images.githubusercontent.com/61663115/90788829-6ccb8a00-e2c3-11ea-979f-0fbff13312be.png)


* The user can click the arrows next to the date to toggle back and forth to see their summary of nutritional intake corresponding the date selected

## Inspiration

During these covid / quarantine times I'm sure I'm not the only one who's put on a few extra pounds... so instead of getting in shape/eating better I chose to sit on my ever expanding behind and make an app that I would want to use if (hopefully WHEN) I decide to get the ball rolling.  

This is my first attempt at react-native which was been fun and challenging. I am open to any and all feedback so fell free to reach out with suggestions/thoughts.

## Contact


Gregg Garrison | g.garrison@me.com | github.com/gregggarrison





