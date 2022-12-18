let quote = document.getElementById('quote');
let author = document.getElementById('author');
let anime = document.getElementById('anime');

fetch('https://animechan.vercel.app/api/random', {mode:'cors'}).then(function(response){
    return response.json();
}).then(function(response){
    quote.textContent = `"${response.quote}"`;
    anime.textContent = response.anime;
    author.textContent = response.character;
})