import { useState, useRef, useEffect } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import vision from './api/vision';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showGen, setShowGen] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_API_TOKEN;

  const handleSubmit = async (event) => {
    console.log('insubmit:' + imageUrl + inputValue);
    event.preventDefault();
    setLoading(true);
    vision(imageUrl);
    var options = {
      'method': 'POST',
      'url': 'https://stablediffusionapi.com/api/v3/img2img',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "key": apiKey,
        "prompt": inputValue + " with an old time style, retro feel. aged filter",
        "negative_prompt": 'disfigured, kitsch, ugly, oversaturated, grain, low-res, Deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, ugly, disgusting, poorly drawn, childish, mutilated, cartoonish, mangled, old, surreal',
        "init_image": imageUrl || "https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
        "width": "512",
        "height": "512",
        "samples": "1",
        "num_inference_steps": "30",
        "safety_checker": "no",
        "enhance_prompt": "no",
        "guidance_scale": 7.5,
        "strength": 0.7,
        "seed": null,
        "webhook": null,
        "track_id": null
      })
    };
    
    // request(options, (error, response) => {
    //   console.log('inrequest! YAYAAY');
    //   if (error) {
    //     console.error('Error:', error);
    //   } else {
    //     console.log(response.body);
    //     const responseData = JSON.parse(response.body);
    //     if (responseData && responseData.output && responseData.output[0]) {
    //       setImageUrl(responseData.output[0]);
    //       console.log('this is our image:' + imageUrl);
    //   } else {
    //       console.error('Unexpected response format');
    //   }
    //   }
    //   setShowGen(true);
    //   setLoading(false);
    // });
};

  const handleConfirm = (imageSrc) => {
    console.log("inHandleConfirm:" + imageSrc);
    setImageUrl(imageSrc);
    setShowForm(true);  // Show the form when the image is confirmed
  };

  // WebcamCapture Component
  const WebcamCapture = dynamic(() => import('./Webcam'), {
    ssr: false, 
    loading: () => <p>Loading...</p> 
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
        <source src="/background2.mp4" type="video/mp4" />
      </video>
      {showForm ? (<div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 z-10 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <form onSubmit={(e) => handleSubmit(e)} className="max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-7 py-5 text-gray-700 bg-gray-200 rounded"
              placeholder="Describe the scene. What do you feel right now?"
            />
            <button type="submit" className="w-full px-3 py-4 text-white bg-black rounded-md focus:outline-none" disabled={loading}>
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
      {imageUrl && !loading && showGen && (
        <div className="mt-12 z-10 flex justify-center">
          <img src={imageUrl} alt="Generated image" className="rounded-2xl shadow-lg" />
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