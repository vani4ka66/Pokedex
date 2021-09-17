import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  let pokenonCount = 10;

  let arr = []


  fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(data => {

      arr.push()



      for (var name in data.results) {

        arr.push(data.results[name].name)

        let a = document.createElement('li')
        a.innerText = data.results[name].name;

        ul.appendChild(a)

      }

   

      // console.log(arr)

    });
});