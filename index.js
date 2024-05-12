let space = document.querySelector('#space')

document.addEventListener('click', function(e){
    let star = document.createElement('div');
    star.classList.add('star');
    let x = e.clientX;
    let y = e.clientY;

    star.style.position = 'fixed';
    star.style.top = y+'px';
    star.style.left = x+'px';

    spaceHeight = space.offsetHeight;
    spaceWidth = space.offsetWidth;

    let distanceFromTop = space.getBoundingClientRect().top;
    let distanceFromLeft = space.getBoundingClientRect().left; // cuse the width is auto the distance from left and right is the same



    console.log(distanceFromTop);
    if (y <= spaceHeight+distanceFromTop-10 && y >= distanceFromTop && x <= spaceWidth+distanceFromLeft-10 && x >= distanceFromLeft) {
        //console.log(spaceHeight);
        //console.log(y);
        space.appendChild(star);
    }
    
})