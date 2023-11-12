const fetch = require('node-fetch');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Method not allowed' });
    return;
  }

  // Ensure that the body has the expected structure and content
  if (!req.body || typeof req.body.prompt !== 'string') {
    res.status(400).send({ message: 'Invalid request body' });
    return;
  }

  const { prompt } = req.body;


    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",
        input: { prompt: prompt },
      }),
    });

    // Check if the prediction was successfully created
    if (response.status !== 201) {
      let error = await response.json();
      res.status(500).send({ detail: error.detail || 'Failed to create prediction' });
      return;
    }

    // Get the prediction result
    const prediction = await response.json();
    res.statusCode = 201;
    res.end(JSON.stringify(prediction));

};

module.exports = handler;