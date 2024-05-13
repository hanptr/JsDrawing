let space = document.querySelector('#space')

document.addEventListener('mousedown', startDrawing)
document.addEventListener('mousemove', draw)
document.addEventListener('mouseup', stopDrawing)

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    nav.style.top = '0'; // Slide in the navbar from the top
  });
  
document.addEventListener('DOMContentLoaded', function(){
    const hr = document.querySelector('hr');
    hr.style.width = '60vw';
})

let isDrawing = false;

let drawnObjects = []

let toolbar = document.querySelector('#toolbar');

toolbar.addEventListener('click', colorPick);


let color = "blue";
function colorPick(e){
    if (e.target.classList.contains('color-picker')) {
        const styleOfElement = getComputedStyle(e.target);
        color = styleOfElement.getPropertyValue('background-color');
    }

    /* let colorList = document.getElementsByClassName('color-picker');
    for (let index = 0; index < colorList.length; index++) {
        const element = colorList[index];
        if (element == e.target) {

            const styleOfElement = window.getComputedStyle(element);
            color = styleOfElement.getPropertyValue('background-color');
        }
        
    } */
    
}

function startDrawing(e){
    isDrawing = true;
    draw(e);
}

function stopDrawing(){
    isDrawing = false;
}

function draw(e){
    //can only draw when the left mouse button is held down, when first holding it down the isDrawing is set to true so when I move the mouse
    //since isDrawing is true I am able to continously draw. When i release the button the mouseup event fires setting the isDrawing to false
    //thus returning 0. Might not be the most efficient way since when I move the mouse the draw() func gets called every time but since
    //isDrawing = false, is return 0 every time.
    if (!isDrawing) {
        return 0;
    }
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.backgroundColor = color;
    star.style.visibility = 'hidden';
    space.appendChild(star);


    let starCenter = star.offsetHeight/2;

    let x = e.clientX;
    let y = e.clientY;

    star.style.position = 'fixed';
    star.style.top = y-starCenter+'px';
    star.style.left = x-starCenter+'px';

    spaceHeight = space.offsetHeight;
    spaceWidth = space.offsetWidth;

    let distanceFromTop = space.getBoundingClientRect().top;
    let distanceFromLeft = space.getBoundingClientRect().left; // because the width is auto the distance from left and right is the same



    console.log(distanceFromTop);
    if (
        y <= spaceHeight + distanceFromTop-starCenter &&
        y >= distanceFromTop + starCenter &&
        x <= spaceWidth+distanceFromLeft - starCenter &&
        x >= distanceFromLeft + starCenter
    ) {
        star.style.visibility = 'visible';
        drawnObjects.push(star);
        
    }
}

function deleteLastElement(){
    if (drawnObjects.length > 0) {
        let latestElement = drawnObjects.pop();
        space.removeChild(latestElement);
    }

}

function resetCanvas(){
    space.innerHTML = '';
}

function startDelete() {
    deleter = setInterval(function() {
      deleteLastElement();
    }, 30);
  }
  function endDelete() {
    clearInterval(deleter);
  }