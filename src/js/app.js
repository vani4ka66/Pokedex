import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");


  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {

      // console.log(data.results)

      // let pokemons = []
      let num = 0


      for (var name in data.results) {
        console.log(data.results[name].name)
        // pokemons.push

        if(num < 10){
          let a = document.createElement('li')
          a.innerHTML = data.results[name].name;
          ul.appendChild(a)

          num++;

        }




     

       

      }

    });
});