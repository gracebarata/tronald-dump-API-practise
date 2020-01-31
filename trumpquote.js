function getANewJoke() {
  fetch("https://www.tronalddump.io/random/quote", {})
    .then(function(next) {
      console.log(next);
      return next.json();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("par").innerHTML = `<h1>${data.value}</h1>`;
    });
}

let jokeBtn = document.getElementById("getJoke");
jokeBtn.addEventListener("click", getANewJoke());
