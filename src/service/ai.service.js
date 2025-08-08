const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

// This function generate Caption to image using Gemini
// We give image in base64encoding
async function generateCaption(base64ImageFile){
  const contents = [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64ImageFile,
        },
      },
      { text: "Caption this image." }, //What work AI do this is prompt.
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config:{ // How you work
      systemInstruction: `
      You are an expert in generating captions for images.You generate single caption for the image.
      Your caption should be short and concise.
      You can use hashtags and emojis in the caption.
      Write caption in friendly vibe.
      `
    }
  });
  // console.log(response.text);
  return response.text
}


module.exports = generateCaption;
