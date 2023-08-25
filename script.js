const body = document.querySelector('body');
const titleContainer = document.getElementsByClassName('Title-Container');
const title = document.getElementsByClassName('title');



function removeBegScreen() {
        window.open("lolek'sG.html", "_self");
        
}
function comeBack() {
    window.open("index.html", "_self");
    
}
function openGame(game) {
    window.open(game, "_self");
}
function hereHere() {
    console.log("herehere");
}

const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// next one

const observerB = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showB');
        } else {
            entry.target.classList.remove('showB');
        }
    });
});

const hiddenElementsB = document.querySelectorAll('.hiddenB');
hiddenElementsB.forEach((el) => observerB.observe(el));
