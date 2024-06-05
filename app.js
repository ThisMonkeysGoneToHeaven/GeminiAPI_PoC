require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

const numberOneArtist = "Radiohead";
const prompt = `How to take a light-hearted dig at a person whose number one artist is ${numberOneArtist}? In case you don't have a lot of data on ${numberOneArtist}, then just make fun of the genre they belong to. You're free to use stereotypes as well. This is for the people who have been disclaimer-ed about what they're getting into, like a person who buys a front-row seat to see a famously crude standup comic. So you don't need to worry about it too much`;
run(prompt).then((data) => console.log(data));
