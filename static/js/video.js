const video = document.getElementById('videoInput')
//loadFromDisk
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models")
]).then(start)

function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(err) {
            console.log("An error has occurred! " + err);
        });
}

function readFile() {
    const fs = require('fs');
      
    fs.readFile('/userPhoto/userInfo.txt', (err, data) => { 
        if (err) throw err; 
      
        console.log(data.toString()); 
    })
}

async function start() {
    startVideo()
    //readFile()
    const LabeledFaceDescriptors = await loadLabelImages()
    const faceMatcher = new faceapi.FaceMatcher(LabeledFaceDescriptors, 0.2)
    $("#updates").append("Ready!");

    video.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(video)
        document.body.append(canvas)
        const displaySize = { width: video.width, height: video.height }
        faceapi.matchDimensions(canvas, displaySize)
        var detectLoop = setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors()
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
            canvas.getContext('2d').clearRect (0, 0, canvas.width, canvas.height)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            results.forEach((result, i) => {
                const box = resizedDetections[i].detection.box
                const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
                drawBox.draw(canvas)
            })
            //clearInterval(detectLoop);
        }, 100)
    })
}

function loadLabelImages() {
    const nameLabels = ['Ashley', 'Davis','Teo'] //Change this to a txt file?
    return Promise.all(
        nameLabels.map(async label => {
            const descriptions = []
            for (let i = 1; i <=1; i++) {
                const img = await faceapi.fetchImage('/userPhoto/' + label + '/' + i + '.jpg')
                const detections = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor()
                descriptions.push(detections.descriptor)
            }
            return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
    )
}
