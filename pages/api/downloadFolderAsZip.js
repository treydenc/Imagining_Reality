
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../../lib/firebase';
import JSZip from "jszip";
import { saveAs } from 'file-saver';

export const downloadFolderAsZip = async (folderName, sessionTitle) => {
    const zip = new JSZip();
    await addFolderToZip(folderName, zip, '');
    
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    downloadBlob(zipBlob, `${sessionTitle || folderName}.zip`);
  };
  
  const addFolderToZip = async (folderPath, zip, zipPath) => {
    const folderRef = ref(storage, folderPath);
    const { items, prefixes } = await listAll(folderRef);
  
    for (const itemRef of items) {
        try {
          const url = await getDownloadURL(itemRef);
          const response = await fetch(url);
          if (!response.ok) {
            // If the response is not ok, throw an error with the status
            throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
          }
          const fileBlob = await response.blob();
          zip.file(zipPath + itemRef.name, fileBlob);
        } catch (error) {
          // Log or handle any errors that occur during the fetch
          console.error("Error fetching file: ", error);
          throw error;
        }
      }
  
    // Recursively add subfolders to zip
    for (const prefixRef of prefixes) {
      const newZipPath = zipPath + prefixRef.name + '/';
      await addFolderToZip(prefixRef.fullPath, zip, newZipPath);
    }
  };
  
  const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);  
    }, 0);
  };
