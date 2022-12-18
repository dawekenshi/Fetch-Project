let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

fetch('https://api.waifu.pics/sfw/wave').then(function(response){
    return response.json();
}).then(function (response){
    one.src = response.url;
})

fetch('https://api.waifu.pics/sfw/wave').then(function(response){
    return response.json();
}).then(function (response){
    two.src = response.url;
})

fetch('https://api.waifu.pics/sfw/wave').then(function(response){
    return response.json();
}).then(function (response){
    three.src = response.url;
})