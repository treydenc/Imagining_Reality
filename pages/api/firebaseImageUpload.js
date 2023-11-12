import { storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImageToFirebaseStorage = async (dataUrl, folder = "images") => {
    const imageBlob = dataURLtoBlob(dataUrl);  // Convert Data URL to blob
    const storageRef = ref(storage, `${folder}/${new Date().toISOString()}.jpg`);
    
    try {
        await uploadBytes(storageRef, imageBlob);
        console.log('uploaded to firebase');

        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    } catch (error) {
        console.error("Image upload error: ", error);
        throw error;
    }
};

export const uploadImageToFirebaseStorageNonblob = async (imageUrl, folderNameBase) => {
    try {
        console.log('in upload to firebase');
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const imageBlob = await response.blob();

        const safeDateString = new Date().toISOString().replace(/:/g, '-');
        const folderName = `${folderNameBase}/generative_images`;
        const storageRef = ref(storage, `${folderName}/${safeDateString}.jpg`);
        

        await uploadBytes(storageRef, imageBlob);
        const downloadURL = await getDownloadURL(storageRef);
        console.log("Image uploaded to Firebase:", downloadURL);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image to Firebase:", error);
        throw error;  
    }
};

// Convert data URL to Blob
const dataURLtoBlob = (dataurl) => {
    if (!dataurl) {
        throw new Error("Invalid data URL provided.");
    }

    let arr = dataurl.split(',');

    // Ensure that the array after split has at least 2 parts (MIME and data)
    if (arr.length < 2) {
        throw new Error("Invalid data URL format.");
    }

    const mimeMatch = arr[0].match(/:(.*?);/);
    
    if (!mimeMatch || mimeMatch.length < 2) {
        throw new Error("MIME type not found in data URL.");
    }

    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
};
