var noseX, noseY
var difference
var xWristLeft, xWristRight
function draw() {
    background("indianred")
    textSize(difference)
    text("Sol Welaji",noseX,noseY)
}
function setup() {
    canvas = createCanvas(1000, 700)
    canvas.center()
    video = createCapture(VIDEO)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function preload() {

}

function modelLoaded() {
    console.log("The model has been loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        xWristLeft = results[0].pose.leftWrist.x
        xWristRight = results[0].pose.rightWrist.x
        difference = floor(xWristLeft - xWristRight)
    }
}