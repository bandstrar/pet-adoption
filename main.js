'use strict';

const petsArray = [
    {
        image: "./images/cruisin.jpg",
        name: "Cruisin",
        color: "Brindle",
        specialSkill: "Super chill and loves to relax",
        typeOfPet: "Dog"
      },
    {
        image: "./images/easy.jpg",
        name: "Easy",
        color: "Black",
        specialSkill: "Gives lots of snoots and boops",
        typeOfPet: "Dog"
      },
    {
        image: "./images/black-snake.jpg",
        name: "Mambo",
        color: "Black",
        specialSkill: "Can coil into a very small ball. A smolbol.",
        typeOfPet: "Snake"
      },
    {
        image: "./images/cornsnake.jpg",
        name: "Kaa",
        color: "Orange",
        specialSkill: "Can hypnotize man cubs",
        typeOfPet: "Snake"
      },
    {
        image: "./images/white-cat.jpg",
        name: "Duchess",
        color: "White",
        specialSkill: "Can lead a boisterous sing-a-long",
        typeOfPet: "Cat"
      },
    {
        image: "./images/orange-cat.jpg",
        name: "Oliver",
        color: "Orange",
        specialSkill: "Is friends with Billy Crystal",
        typeOfPet: "Cat"
      },
]

const petHide = (e) => {
  const buttonId = e.target.id;

  const selectedPets = [];

  for (let i = 0; i < petsArray.length; i++) {
    if (petsArray[i].typeOfPet === buttonId) {
        selectedPets.push(petsArray[i]);
    }
  }

  if (buttonId === 'All' || buttonId === e.currentTarget.id) {
    createPetCards(petsArray);
  } else {
    createPetCards(selectedPets);
  }
}

const printToDom = (divId, stringToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
}

const createPetCards = (petArray) => {
    let domString = ''

    for (let i = 0; i < petArray.length; i++) {
        domString += `<div class="pet-${petArray[i].typeOfPet}s" id="${i}">
                      <div class="pet-name">${petArray[i].name}</div>
                      <img class="pet-img" src=${petArray[i].image}>
                      <div class="pet-color">${petArray[i].color}</div>
                      <div class="pet-skill">${petArray[i].specialSkill}</div>
                      <div class="pet${petArray[i].typeOfPet}">${petArray[i].typeOfPet}</div>
                      </div>` 
      }
        printToDom('adoptMe', domString);
    } 

    const buttonEvents = () => {
      document.querySelector('#btnContainer').addEventListener('click', petHide)
    }
    
    const init = () => {
      buttonEvents();
      createPetCards(petsArray);
    }
    
    init();