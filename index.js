let space = document.querySelector('#space')

document.addEventListener('mousedown', startDrawing)
document.addEventListener('mousemove', draw)
document.addEventListener('mouseup', stopDrawing)

let isDrawing = false;

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
        //console.log(spaceHeight);
        console.log("jó");
        star.style.visibility = 'visible';
        
    }
}