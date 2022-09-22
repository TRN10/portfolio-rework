var about = document.getElementById('about');



function aboutHide() {
    var heroOne = document.getElementById('hero-one');
    heroOne.setAttribute('class', 'hide');
}

about.onclick = aboutHide;

