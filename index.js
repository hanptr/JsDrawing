let space = document.querySelector('#space')

document.addEventListener('mousedown', draw)

function draw(e){
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
    let distanceFromLeft = space.getBoundingClientRect().left; // cuse the width is auto the distance from left and right is the same



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