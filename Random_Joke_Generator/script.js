let joke = document.getElementById("joke");
let btn = document.getElementById("btn");

// const url = 'https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {

fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      joke.innerText = response.joke;
    })
    .catch((err) => console.error(err));
};
