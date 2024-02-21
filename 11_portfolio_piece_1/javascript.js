document.getElementById('mobile-menu-toggle').addEventListener(click, function(){
    // shows it when it is in mobile view, but outside of that it doesn't show it
    document.getElementById('mobile-menu').classList.toggle('hidden')
})