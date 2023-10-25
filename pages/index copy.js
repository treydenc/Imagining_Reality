import { useState, useRef, useEffect } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import WebcamCapture from './WebcamCapture';

function Home() {

  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showForm, setShowForm] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('/api/stablediffusion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: inputValue }),
    });

    if (response.ok) {
      const data = await response.json();
      setImageUrl(data[0]);
    } else {
      console.error('Error:', response.statusText);
    }
    setLoading(false);
  };

  const handleConfirm = (imageSrc) => {
    setImageUrl(imageSrc);
    setShowForm(true);  // Show the form when the image is confirmed
  };

  // WebcamCapture Component
  const WebcamCapture = dynamic(() => import('./Webcam'), {
    ssr: false,  // This will load the component client side only
    loading: () => <p>Loading...</p>  // Optional loading component
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      {showForm ? (<div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded"
              placeholder="Enter a prompt..."
            />
            <button type="submit" className="w-full px-3 py-4 text-white bg-gradient-to-r from-cyan-400 via-green-500 to-cyan-400 rounded-md focus:outline-none" disabled={loading}>
              Submit
            </button>
          </form>
        </div>
      </div>
      ) : (
        <WebcamCapture onConfirm={handleConfirm} />
      )}
      {loading && (
        <div className="mt-12 flex justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}
      {imageUrl && !loading && (
        <div className="mt-12 flex justify-center">
          <img src={imageUrl} alt="Generated image" className="rounded-xl shadow-lg" />
        </div>
      )}
      <style jsx>{`
        .loader {
          animation: spin 1s linear infinite;
          border-top-color: #3498db;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;