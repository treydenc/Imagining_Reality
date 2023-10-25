// WebcamCapture.js
import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { storage } from '../lib/firebase';
import { ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = ({ onConfirm }) => {
    const webcamRef = React.useRef(null);
    const [capturedImage, setCapturedImage] = useState('');
    const [hasCaptured, setHasCaptured] = useState(false);
    
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      setHasCaptured(true);
    }, [webcamRef]);

    const retake = () => {
      setHasCaptured(false);
      setCapturedImage('');
    };

    const uploadImageToFirebase = async () => {
        const imageBlob = dataURLtoBlob(capturedImage);  // Convert Data URL to blob
        const storageRef = ref(storage, `images/${new Date().toISOString()}.jpg`);
        
        try {
            await uploadBytes(storageRef, imageBlob);
            console.log('uploaded to firebase');
    
            const downloadURL = await getDownloadURL(storageRef);
            onConfirm(downloadURL);  // Pass the Firebase URL instead of Data URL
            console.log('recieved FirebaseURL:' + downloadURL);
        } catch (error) {
            console.error("Image upload error: ", error);
        }
    };

    // Convert data URL to Blob
    const dataURLtoBlob = (dataurl) => {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    }
  
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative rounded-2xl shadow-xl overflow-hidden">
          {hasCaptured ? (
            <img src={capturedImage} alt="Captured" className="rounded-2xl shadow-md" />
          ) : (
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
              className="rounded-2xl"
            />
          )}
          
          {!hasCaptured && (
            <button onClick={capture} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300">
              <img src="/camera.png" alt="Capture" className="h-6 w-6" />
            </button>
          )}
        </div>
        
        {hasCaptured && (
            <div className="mt-4 z-10 space-x-4">
              <button onClick={retake} className="mt-4 bg-red-300 p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-200">
                <img src="/redo.png" alt="Capture" className="h-6 w-6" />
              </button>
              <button onClick={uploadImageToFirebase} className="mt-4 bg-green-300 p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-200">
              <img src="/check.png" alt="Capture" className="h-6 w-6" />
              </button>
            </div>
        )}
      </div>
    );
}
  
export default WebcamCapture;