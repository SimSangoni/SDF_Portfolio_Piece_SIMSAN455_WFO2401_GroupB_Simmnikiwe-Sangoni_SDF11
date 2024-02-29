document.getElementById('mobile-menu-toggle').addEventListener("click", function(){
    // shows it when it is in mobile view, but outside of that it doesn't show it
    document.getElementById('mobile-menu').classList.toggle('hidden');
})

var spanElement = document.getElementById('count-stat-1');
var countToValue = spanElement.getAttribute('data-countto');

var spanElement = document.getElementById('count-stat-2');
var countToValue = spanElement.getAttribute('data-countto');

var spanElement = document.getElementById('count-stat-3');
var countToValue = spanElement.getAttribute('data-countto');

var spanElement = document.getElementById('count-stat-4');
var countToValue = spanElement.getAttribute('data-countto');