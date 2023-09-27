function preload() {

}

function setup() {
    canvas = createCanvas(720, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(720, 480);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mLK8V3D4O/model.json', modelLoaded);
}
function modelLoaded() {
    console.log('Model Loaded!')
}

function draw() {
    image(video, 0, 0, 720, 480)
    classifier.classify(video, gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
        
    }else{
        console.log(results);
        document.getElementById("labeldeResultado").innerHTML = results[0].label;
    }

}
