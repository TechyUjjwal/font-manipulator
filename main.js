rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);     
}

function modelLoaded() {
    console.log("Model loaded !");
}

function draw() {
    background("red");
}

function gotPoses(results) {
    if (results[0].length > 0) {
        console.log(results);
        
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX)
        console.log("LeftWristX = " + leftWristX + " RightWristX = " + rightWristX + " Difference = " + difference);
    }
    if (error) {
        console.error(error);
    }
}