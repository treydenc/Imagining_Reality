const imageUrl = capturedImage;  // from your webcam capture

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://stablediffusionapi.com/api/v3/img2img',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "key": process.env.STABLE_API_TOKEN,
    "prompt": "a cat sitting on a bench",
    "negative_prompt": null,
    "init_image": imageUrl,
    "width": "512",
    "height": "512",
    "samples": "1",
    "num_inference_steps": "30",
    "safety_checker": "no",
    "enhance_prompt": "yes",
    "guidance_scale": 7.5,
    "strength": 0.7,
    "seed": null,
    "webhook": null,
    "track_id": null
  })
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});