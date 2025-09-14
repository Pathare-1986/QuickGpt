import imagekit from "../configs/imageKit.js";
import Chat from "../models/chat.js";
import User from "../models/user.js";
import axios from "axios"
import openai from "../configs/openai.js"


// Text-based AI Chat Message Controller
export const textMessageController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { chatId, prompt } = req.body;
     // Check Credits
    if (req.user.credits < 1) {
      return res.json({
        success: false,
        message: "YOu don't have emough credits to use this feature",
      });
    }

    const chat = await Chat.findOne({ userId, _id: chatId });
    chat.messages.push({
      role: "User",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });

    const { choices } = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reply = {
      ...choices[0].message,
      timestamp: Date.now(),
      isImage: false,
    };
    res.json({ success: true, reply });

    chat.messages.push(reply);
    await chat.save();
    await User.updateOne({ _id: userId }, { $inc: { credits: -1 } });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Image Generatioin Message Controller

export const imageMsgController = async (req, res) => {
  try {
    const userId = req.user._id;

    // Check Credits
    if (req.user.credits < 2) {
      return res.json({
        success: false,
        message: "You don't have emough credits to use this feature",
      });
    }

    const { prompt, chatId, isPublished } = req.body;
    // find chat
    const chat = await Chat.findOne({ userId, _id: chatId });

    // Push user msg
    chat.messages.push({
      role: "User",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });
    // Encode the prompt
    const encodedPrompt = encodeURIComponent(prompt)

    // Construct ImageKit Ai Generation URI
    const generateImageUrl = `${process.env.IMAGEKIT_URI_ENDPOINT}/ik-genimg-prompt-${encodedPrompt}/quickgpt/${Date.now()}.png?tr=w-800,h-800` 

    // Trigger generation by fectching from ImageKit
    const aiImageResponse = await axios.get(generateImageUrl,{responseType:"arraybuffer"})

    // convert to Base64
    const base64Image = `data:image/png;base64,${Buffer.from(aiImageResponse.data,"binary").toString("base64")}`

    // Upload to imagekit media library
    const uploadResponse =await imagekit.upload({
      file:base64Image,
      fileName:`${Date.now()}.png`,
      folder: "quickgpt"
    })

    const reply = {
      role:"assistant",
      content:uploadResponse.url,
      timestamp: Date.now(),
      isImage: true,
      isPublished,
    };
    res.json({ success: true, reply });
    chat.messages.push(reply);
    await chat.save();
    await User.updateOne({ _id: userId }, { $inc: { credits: -2 } });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to get published images
export const getPublishedImages = async(req,res)=>{
  try {

    const publishedImagesMessages = await Chat.aggregate([
      {$unwind:"$messages"},
      {
        $match:{
          "messages.isImage":true,
          "messages.isPublished":true,
        }
      },
      {
        $project :{
          _id:0,
          imageUrl: "$messages.content",
          userName:"$userName"
        }
      }
    ])

    res.json({success:true,images:publishedImagesMessages.reverse()})
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}