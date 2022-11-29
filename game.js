let bird = document.querySelector('#bird')
let birdTop =100;
let deltaTop =0;
let gamebox = document.querySelector('#game_box')
let f=0;
let step=0;
let birdrotate=0;
let pipe1left=480;
let pipe2left=880;
// let groundBgX=0;
// let ground=document.querySelector('#ground');
setInterval(() => {
    birdTop += 3;
    bird.style.top = birdTop + 'px';
}, 20);
setInterval(() => {
    deltaTop += 0.6;
    birdTop += deltaTop;
}, 20);
gamebox.onclick = () => {
    deltaTop = -15;
};
setInterval(() => {
    f++;
    if(f%3==0){
        step++;
        if(step>2) step=0;
        bird.style.backgroundPosition = -step *100+'%0'
    }
}, 20);
setInterval(() => {
    birdrotate +=3;
    bird.style.transform = 'rotate('+birdrotate+'deg)'
}, 20);
gamebox.onclick = ()=>{
    deltaTop=-14;
    birdrotate=-60;
}
setInterval(() => {
    deltaTop+=0.05;
    birdTop+=deltaTop;
    if(birdTop<0){
        birdTop=0;
    }
}, 20);
setInterval(() => {
    pipe1left -=3;
    pipe2left -=3;
    if(pipe1left <-88){
        pipe1left =pipe2left+400
}else if (pipe2left<-88){
    pipe2left=pipe1left+400
}
pipe1_up.style.left=pipe1left+'px';
pipe1_down.style.left=pipe1left+'px';
pipe2_up.style.left=pipe2left+'px';
pipe2_down.style.left=pipe2left+'px';
}, 20);
// setInterval(() => {
//     groundBgX -= 3;
//     ground.style.backgroundPosition = groundBgX + 'px=0';
// }, 20);
if (pipe1left<-88){
    pipe1left=pipe2left+400;
    pipe1_up_h=parseInt(Math.random()*240)+60;
    pipe1_up.style.height=pipe1_up.h+'px';
    pipel_down.style.top=(pipel_up.h+200)+'px';
    pipe1_down.style.hright=(560-pipel_up-h-200)+'px';
}
else if (pipe2Left < -88) {
    pipe2Left = pipe1Left + 400;
    pipe2_up_h = parseInt(Math.random() * 240) + 60;
    pipe2_up.style.height = pipe2_up_h + 'px';
    pipe2_down.style.top = (pipe2_up_h + 200) + 'px';
    pipe2_down.style.height = (560 - pipe2_up_h - 200) + 'px';
}