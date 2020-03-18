let websiteSections = [];

emptyWebsite();

function emptyWebsite() {
    // there are no sections in this website
    // create a Get Started button
    // and place in the middle of the main-display
    // section

    let mainDiv = document.querySelector('.main-display');
    let newDiv = document.createElement('div');
    let btnGetStarted = document.createElement('button');

    newDiv.classList.add('empty-website');

    btnGetStarted.innerHTML = "GET STARTED";
    btnGetStarted.classList.add('btn');
    btnGetStarted.onclick=function() {
        
    }

    newDiv.appendChild(btnGetStarted);

    mainDiv.appendChild(newDiv);
}