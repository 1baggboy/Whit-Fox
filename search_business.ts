import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function searchBusiness() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Search for 'Whitefox Lounge Lagos' on Google Business Profile. Provide their official address, phone number, email, opening hours, and a list of their main food and drink items. Also, describe the brand vibe and luxury experience.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    console.log("Business Information:");
    console.log(response.text);
    
    // Check for grounding chunks to see if we got real data
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      console.log("\nSources:");
      chunks.forEach((chunk: any) => {
        if (chunk.web) {
          console.log(`- ${chunk.web.title}: ${chunk.web.uri}`);
        }
      });
    }
  } catch (error) {
    console.error("Error searching for business:", error);
  }
}

searchBusiness();
