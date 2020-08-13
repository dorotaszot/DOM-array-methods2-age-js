const addPersonBtn = document.getElementById('add-person');
const doubleAgeBtn = document.getElementById('double-age');
const showAdultsBtn = document.getElementById('show-adults');
const showOver65Btn = document.getElementById('show-over-65');
const sortBtn = document.getElementById('sort');
const main = document.getElementById('main');

getRandomPerson();
getRandomPerson();
getRandomPerson();

const addedPeople = [];

async function getRandomPerson() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  // console.log(data);

  const person = data.results[0];
  const newPerson = {
    name: `${person.name.first} ${person.name.last}`,
    age: Math.floor(Math.random() * 100)
  }

  addData(newPerson);
}

function addData(obj) {
  addedPeople.push(obj);

  addToMain()
}

// console.log(addedPeople);

function addToMain(providedData = addedPeople) {
  // Clear main
  main.innerHTML = '<h2><strong>Person</strong> Age</h2>';
  // Add new elements
  providedData.forEach(item => {
    const addedPerson = document.createElement('div');
    addedPerson.classList.add('person');
    addedPerson.innerHTML = `<strong>${item.name}</strong> ${item.age}`
    main.appendChild(addedPerson);
  })

}

addPersonBtn.addEventListener('click', getRandomPerson);
