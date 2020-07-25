"use strict";

const pets = [
    {
        "image": "./images/cruisin.jpg",
        "name": "Cruisin",
        "color": "Brindle",
        "specialSkill": "Super chill and loves to relax",
        "typeOfPet": "Dog"
      },
    {
        "image": "./images/easy.jpg",
        "name": "Easy",
        "color": "Black",
        "specialSkill": "Gives lots of snoots and boops",
        "typeOfPet": "Dog"
      },
    {
        "image": "./images/black-snake.jpg",
        "name": "Mambo",
        "color": "Black",
        "specialSkill": "Can coil into a very small ball. A smolbol.",
        "typeOfPet": "Snake"
      },
    {
        "image": "./images/cornsnake.jpg",
        "name": "Kaa",
        "color": "Orange",
        "specialSkill": "Can hypnotize man cubs",
        "typeOfPet": "Snake"
      },
    {
        "image": "./images/white-cat.jpg",
        "name": "Duchess",
        "color": "White",
        "specialSkill": "Can lead a boisterous sing-a-long",
        "typeOfPet": "Cat"
      },
    {
        "image": "./images/orange-cat.jpg",
        "name": "Oliver",
        "color": "Orange",
        "specialSkill": "Is friends with Billy Crystal",
        "typeOfPet": "Cat"
      }
]

const printToDom = (divId, stringToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

const createPetCards = () => {
    let domString = ''

    for (let i = 0; i < pets.length; i++) {
      if (pets[i].typeOfPet === "Cat") {
        domString += `<div id="petCat">`;
        domString +=    `<div class="pet-name">${pets[i].name}</div>`
        domString +=    `<img class="pet-img" src=${pets[i].image}>`
        domString +=    `<div class="pet-color">${pets[i].color}</div>`
        domString +=    `<div class="pet-skill">${pets[i].specialSkill}</div>`
        domString +=    `<div class="pet-cat">${pets[i].typeOfPet}</div>`
        domString += `</div>`    
        } else if (pets[i].typeOfPet === "Dog") {
        domString += `<div id="petDog">`;
        domString +=    `<div class="pet-name">${pets[i].name}</div>`
        domString +=    `<img class="pet-img" src=${pets[i].image}>`
        domString +=    `<div class="pet-color">${pets[i].color}</div>`
        domString +=    `<div class="pet-skill">${pets[i].specialSkill}</div>`
        domString +=    `<div class="pet-dog">${pets[i].typeOfPet}</div>`
        domString += `</div>`
        } else if (pets[i].typeOfPet === "Snake") {
          domString += `<div id="petSnake">`;
          domString +=    `<div class="pet-name">${pets[i].name}</div>`
          domString +=    `<img class="pet-img" src=${pets[i].image}>`
          domString +=    `<div class="pet-color">${pets[i].color}</div>`
          domString +=    `<div class="pet-skill">${pets[i].specialSkill}</div>`
          domString +=    `<div class="pet-snake">${pets[i].typeOfPet}</div>`
          domString += `</div>`
        }
      }
        printToDom('adoptMe', domString);
    } 

    const init = () => {
      createPetCards();
    }
    
    init();

    // const dogHide = () => {
    //   document.getElementById("petDog").toggle();
    // }

    // document.getElementById("dogBtn").addEventListener("click", dogHide)

