let canvas = document.getElementById('my_canvas');
let context = canvas.getContext('2d');

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radious = 40;

function moveBall(){
    if(position + radious > 640){
        moveSpeed = -speed;
    }else if(position - radious < 0){
        moveSpeed = speed;
    }

    position += moveSpeed;

}


function drawBall(){
    context.clearRect(0,0,640,480);

    context.fillStyle = "#0394fc";
    context.beginPath();
    context.arc(position, 50, radious, 0, 2 * Math.PI);
    context.fill();
}

function animate(){
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
