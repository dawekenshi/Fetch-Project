const container = document.getElementById('ushiro');

fetch('https://api.waifu.pics/sfw/dance').then(function(response){
    return response.json();
}).then(function(response){
    container.style.backgroundImage = `linear-gradient(rgb(0,0,0,0.8), rgb(0,0,0,0.8)), url(${response.url})`;
})