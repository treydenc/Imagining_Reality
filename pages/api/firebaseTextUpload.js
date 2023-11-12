import { storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadTextToFirebaseStorage = async (text, folderNameBase) => {
    // Convert text to a Blob
    const textBlob = new Blob([text], { type: 'text/plain' });


    const safeDateString = new Date().toISOString().replace(/[:.]/g, '-');
    const folderName = `${folderNameBase}/text`;
    const fileRef = ref(storage, `${folderName}/${safeDateString}.txt`);    

    try {
        // Upload the text blob to the Firebase Storage
        await uploadBytes(fileRef, textBlob);
        console.log('Text uploaded to Firebase');

        // Get the download URL if you want to store it in your database
        const downloadURL = await getDownloadURL(fileRef);
        console.log("File available at:", downloadURL);
        
        return downloadURL;
    } catch (error) {
        console.error("Error uploading text to Firebase:", error);
        throw error;
    }
};
