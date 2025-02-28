import express from 'express';
import { configDatabase } from './configs/Database.js';
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors'
import multer from 'multer'
import { register } from './service/auth.js';
import { createChallange, deleteChallange, editChallange, getAllChallanges, getChallange } from './service/challanges.js';
import { createPost, deletePost, editPost, getAllPosts, getPost } from './service/blog.js';

const PORT = process.env.PORT;
const Uri = process.env.MONGO_URI;



const app = express();
app.use(express.json());

await configDatabase(Uri);

app.use(cors())

const upload = multer({dest :'uploads/'})

app.post('/auth/register',upload.single('file'),async (req, res) => {
   const imageUrl = `/uploads/${req.file.filename}`;
    try {
      const token = await register(req.body,imageUrl);

      res.status(200).json(token)
    } catch (err) {
      res.status(500).json(err)
    }

});



app.post('/create-challange', async (req, res) => {
  try {
    await createChallange(req.body)
    res.status(200);
  } catch (error) {
    res.status(500).json(error)
  }
});

app.get('/challanges', async (req, res) => {
  try {
    const data = await getAllChallanges()
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

app.get('/challanges/:id', async (req, res) => {
  const {id} = req.params
  try {
    const data = await getChallange(id)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

app.put('/challanges/:id', async (req, res) => {
  const { id } = req.params
  try {
   await editChallange(id,req.body);
   res.status(204).json({message:"Succefully updated challange!"})
  } catch (error) {
    res.status(500).json(error)
  }
});


app.delete('/challanges/:id', async (req, res) => {
  const { id } = req.params
  try {
   await deleteChallange(id);
   res.status(204).json({message:"Succefully delete challange!"})
  } catch (error) {
    res.status(500).json(error)
  }
});


app.post('/blog/create-post', async (req, res) => {
  try {
    await createPost(req.body)
    res.status(204).json({message:"Succesfully added post!"});
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:error.message})
  }
});

app.get('/blog/posts', async (req, res) => {
  try {
    const data = await getAllPosts(req.body)
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:error.message})
  }
});


app.get('/blog/post/:id', async (req, res) => {
  const {id} = req.params
  try {
    const data = await getPost(id)
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:error.message})
  }
});

app.put('/blog/post/:id', async (req, res) => {
  const { id } = req.params
  try {
   await editPost(id,req.body);
   res.status(204).json({message:"Succefully updated post!"})
  } catch (error) {
    res.status(500).json(error)
  }
});


app.delete('/blog/post/:id', async (req, res) => {
  const { id } = req.params
  try {
   await deletePost(id);
   res.status(204).json({message:"Succefully delete post!"})
  } catch (error) {
    res.status(500).json(error)
  }
});


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))