const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

//console.log(process.env.OPEN_AI_KEY);

// const openai = new OpenAI();

const app = express();
const PORT = 3003;
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

app.post('/image', async (req, res)=>{
    
    // const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });

    const prompt = req.body.prompt;

    console.log('req',prompt);

    // const prompt = "cat with bag"
    try{
      const response = await openai.images.generate({
          model:'dall-e-3',
          prompt:prompt,
          n:1,
          size:"1024x1024"
      });
      image_url = response.data.data[0].url;
      // image_url = 'https://picsum.photos/200/300';
      console.log(image_url);
      res.send(image_url);
    }catch(err){
      console.log(err);
      res.send(err);
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

