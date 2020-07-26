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
        domString += `<div class="pet-cats">`;
        domString +=    `<div class="pet-name">${pets[i].name}</div>`
        domString +=    `<img class="pet-img" src=${pets[i].image}>`
        domString +=    `<div class="pet-color">${pets[i].color}</div>`
        domString +=    `<div class="pet-skill">${pets[i].specialSkill}</div>`
        domString +=    `<div class="pet-cat">${pets[i].typeOfPet}</div>`
        domString += `</div>`    
        } else if (pets[i].typeOfPet === "Dog") {
        domString += `<div class="pet-dogs">`;
        domString +=    `<div class="pet-name">${pets[i].name}</div>`
        domString +=    `<img class="pet-img" src=${pets[i].image}>`
        domString +=    `<div class="pet-color">${pets[i].color}</div>`
        domString +=    `<div class="pet-skill">${pets[i].specialSkill}</div>`
        domString +=    `<div class="pet-dog">${pets[i].typeOfPet}</div>`
        domString += `</div>`
        } else if (pets[i].typeOfPet === "Snake") {
          domString += `<div class="pet-snakes">`;
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

    const dogHide = () => {
      let elements = document.getElementsByClassName("pet-dogs")
      for (let i = 0; i < elements.length; i++){
          elements[i].style.display = "none";
      }
    }

    const catHide = () => {
      let elements = document.getElementsByClassName("pet-cats")
      for (let i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
      }
    }

    const snakeHide = () => {
      let elements = document.getElementsByClassName("pet-snakes")
      for (let i = 0; i < elements.length; i++){
          elements[i].style.display = "none";
      }
    }
    const dogShow = () => {
      let elements = document.getElementsByClassName("pet-dogs")
      for (let i = 0; i < elements.length; i++){
          elements[i].style.display = "flex";
      }
    }
    const catShow = () => {
      let elements = document.getElementsByClassName("pet-cats")
      for (let i = 0; i < elements.length; i++){
          elements[i].style.display = "flex";
      }
    }
    const snakeShow = () => {
      let elements = document.getElementsByClassName("pet-snakes")
      for (let i = 0; i < elements.length; i++){
          elements[i].style.display = "flex";
      }
    }

    document.getElementById("dogBtn").addEventListener("click", catHide)
    document.getElementById("dogBtn").addEventListener("click", snakeHide)
    document.getElementById("dogBtn").addEventListener("click", dogShow)

    document.getElementById("catBtn").addEventListener("click", dogHide)
    document.getElementById("catBtn").addEventListener("click", snakeHide)
    document.getElementById("catBtn").addEventListener("click", catShow)

    document.getElementById("snakeBtn").addEventListener("click", dogHide)
    document.getElementById("snakeBtn").addEventListener("click", catHide)
    document.getElementById("snakeBtn").addEventListener("click", snakeShow)

    document.getElementById("allBtn").addEventListener("click", dogShow)
    document.getElementById("allBtn").addEventListener("click", catShow)
    document.getElementById("allBtn").addEventListener("click", snakeShow)
