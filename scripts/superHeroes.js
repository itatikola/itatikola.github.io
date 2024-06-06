/**
 * PRACTICE WITH OOP
 * function Person(name, age) {
    this.name = {}; 
    const names = name.split(" "); 
    for (let i = 0; i < names.length; i++) {
        let field = "name" + (i + 1);
        if (i === 0) {
            field = "first"; 
        } else if (i === names.length - 1) {
            field = "last"; 
        }
        this.name[field] = names[i]; 
    }
    this.age = age;
    this.introduceSelf = () => {
        console.log(`Hi! I'm ${this.name.first}.`);
    };
    this.bio = () => {
        console.log(`Ms./Mrs./Mr.${this.name.last} is ${this.age} years old.`);
    };
    this.farewell = () => {
        console.log(`${this.name.first} has passed.`);
    }

}

const person = {
    name: {
        first: "Jane",
        last: "Doe"
    },
    age: 32,
    bio() {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name.first}.`);
    },
};

person.farewell = () => {
    console.log(`${person.name.first} has passed.`);
};

const indira = new Person("Indira Mohini Tatikola", 19); 
const abirami = new Person("Abirami Chinnakaruppan", 20); 
*/

async function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}  

function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
}
  
function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = "Superpowers:";
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement("li");
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
}

populate();