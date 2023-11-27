function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(50,100);

    canvas = createCanvas(550,500);
    canvas.position(700,150);

    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('POSENET MODEL IS INITIALIZED');
}
function draw(){
    background('#FF6347');
}
function gotPoses(results){
if(results.length > 0){ 
  console.log(results);
}
}
