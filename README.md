### :fire: LegendaryMotorSport .net  in Angular 6 :fire:

All features created from scratch, without UI libraries.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Web App
#### Includes (These features are made in Angular)

- [x] Components, Services, Pipes, Models, Types and more
- [x] Routing (same URLs)
- [x] JSON file with cars and details
- [x] Assets (brands, preview and detail images)
- [x] Sorting cars by Price (like the game)
- [x] Audio HTML5 when you are over a car item
- [x] Statistics bar component working with real data
- [x] Selectable circle color component 


##### :blue_car: Home! (Everything like the original website)

![Alt text](demo/sprint1.png?raw=true 'Home' )

##### :red_car: Home (sorting component working)

![Alt text](demo/sprint2.png?raw=true 'Home')

##### :oncoming_police_car: Details page (colors, name, price and stats components are working)

![Alt text](demo/sprint3.png?raw=true 'Home')


Example JSON cars
```json
[{
      "id": 1,
      "model": "Karin 190z",
      "brand": "Karin",
      "statistics":{
        "speed": 75.12,
        "acceleration": 67.50,
        "braking": 31.67,
        "handling": 69.70
      },      
      "category": "Part of The Doomsday Heist",
      "price": 1900220,
      "users": 2
    },
    {
      "id": 2,
      "model": "Pfister 811",
      "brand": "Pfister",
      "statistics":{
        "speed": 85.47,
        "acceleration": 89,
        "braking": 37.33,
        "handling": 81.45
      },   
      "category": "Part of Finance and Felony",
      "price": 1135000,
      "users": 2
    }
]
```


## :tada: Installing/Running

It is a normal angular 6 project without any special dependencies.

```sh
   git clone https://github.com/thiswallz/gta-v-legendary-motor-sport
   cd gta-v-legendary-motor-sport
   npm i
   ng serve
```

Application Web (Angular using Material Design) - App at http://localhost:4200/

## Authors

* **M Joost Wolff** - *Initial work* - [GitHub](https://github.com/thiswallz)

See also the list of [contributors](https://github.com/thiswallz/gta-v-legendary-motor-sport/contributors) who participated in this project.

## License

This project is licensed under the ISC License 
