const NodeWebcam = require('node-webcam');
import fs from 'fs';
const Webcam = new NodeWebcam.create({
    width: 320,
    height: 240,
    quality: 50,
    frames: 20,
    output: "jpeg",
});

const captureNewFrame = async function () {
    Webcam.capture("buffer", function (err: any, data: any) {
        if (err) {
            throw err;
        };

        return data;
    });
};

async function deleteBuffer() {
    try {
        fs.unlink("buffer.jpg", (err) => {
            if (err) console.log(err)
            return;
        });
    } catch (err) {
        return;
    }
};

const webcamClient = {
    captureNewFrame,
    deleteBuffer
};

export default webcamClient;