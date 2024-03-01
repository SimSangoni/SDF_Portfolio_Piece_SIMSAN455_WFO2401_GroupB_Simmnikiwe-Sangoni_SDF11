document.getElementById('mobile-menu-toggle').addEventListener("click", function(){
    // shows it when it is in mobile view, but outside of that it doesn't show it
    document.getElementById('mobile-menu').classList.toggle('hidden');
})

var spanElement = document.getElementById('count-stat-1');
var countToValue = spanElement.getAttribute('data-countto');

var spanElement = document.getElementById('count-stat-2');
var countToValue = spanElement.getAttribute('data-countto');


document.addEventListener('DOMContentLoaded', function() {
    var countStat = document.getElementById('count-stat-3');
    var targetValue = parseFloat(countStat.getAttribute('countto'));
    var decimalPlaces = parseInt(countStat.getAttribute('decimal-places'));
    var duration = 2000; // Adjust as needed
  
    var startValue = parseFloat(countStat.textContent);
    var startTime = null;
  
    function animateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
  
        var newValue = startValue + (targetValue - startValue) * (progress / duration);
        countStat.textContent = newValue.toFixed(decimalPlaces);
  
        if (progress < duration) {
            requestAnimationFrame(animateCount);
        } else {
            countStat.textContent = targetValue.toFixed(decimalPlaces);
        }
    }
  
    requestAnimationFrame(animateCount);
  });



var spanElement = document.getElementById('count-stat-4');
var countToValue = spanElement.getAttribute('data-countto');