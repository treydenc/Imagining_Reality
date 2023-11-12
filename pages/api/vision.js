import OpenAI from "openai";
const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

async function vision(image_url) {
    console.log(image_url);
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Write a story based on the scene" },
          {
            type: "image_url",
            image_url: {
              "url": `${image_url}`,
            },
          },
        ],
      },
    ],
    max_tokens: 4096,
  });
  console.log(response.choices);
}

export default vision;
