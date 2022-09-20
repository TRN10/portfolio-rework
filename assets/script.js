var about = document.getElementById('about');



function aboutReveal() {
    var heroOne = document.getElementById('heroOne');
    heroOne.setAttribute('class', 'hide');
}

about.onclick = aboutReveal;