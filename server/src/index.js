import express from 'express';
import { configDatabase } from './configs/Database.js';
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors'
import multer from 'multer'
import { login, register } from './service/auth.js';
import { createChallange, deleteChallange, editChallange, getAllChallanges, getChallange, saveChallange} from './service/challanges.js';
import { createPost, deletePost, editPost, getAllPosts, getLikes, getPost, likePost, pushComment } from './service/blog.js';
import { createComment, getAllComments } from './service/comments.js';
import path from 'path'
import { checkToken } from './utils/token.js';
import { getLatestParticipants,  getParticipants, getUserParticipateCount, joinChallange } from './service/participants.js';


const PORT = process.env.PORT;
const Uri = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET




const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());


await configDatabase(Uri);

app.use(cors())

const upload = multer({dest :'uploads/'})

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));


app.post('/auth/register',upload.single('file'),async (req, res) => {
   const imageUrl = `/uploads/${req.file.filename}`;
    try {
      const user = await register(req.body,imageUrl);
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err.message)
    }
});

app.post('/auth/login',upload.none(),async (req, res) => {
   try {
     const user = await login(req.body);
     res.status(200).json(user)
   } catch (err) {
     res.status(404).json(err)
   }
});

app.get('/auth/logout',async (req, res) => {
  const token = req.headers['x-authorization'];
  const isValidToken = checkToken(token,JWT_SECRET);

  if(isValidToken){
    res.status(204)
  }else{
    res.status(401).json()
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
    res.status(404).json({message:'Challange Not Found'})
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

app.post('/join-challange/:userId/:challangeId', async (req, res) => {
  const { userId , challangeId } = req.params
  try {
   const challange = await joinChallange(challangeId,userId,req.body.message);
   res.status(200).json(challange)
  } catch (error) {
    res.status(500).json(error)
  }
});

app.get('/challange-participants/:id', async (req, res) => {
  const { id } = req.params
  try {
   const participants = await getParticipants(id);

   res.status(200).json(participants)
  } catch (error) {
    res.status(500).json(error)
  }
});

app.post('/challange-save/:userId/:challangeId', async (req, res) => {
  const { userId , challangeId} = req.params
  

  try {
   await saveChallange(userId,challangeId);
   res.status(200).json({message:"Succesfull save challange"})
  } catch (error) {
    res.status(500).json(error)
  }
});


app.get('/latest-participants-challanges', async (req, res) => {
  try {
   const challanges = await getLatestParticipants();

   res.status(200).json(challanges)
  } catch (error) {
    res.status(500).json(error)
  }
});


app.get('/user-participant-count/:userId', async (req, res) => {
  const {userId} = req.params;
  
  try {
   const count = await getUserParticipateCount(userId);

   res.status(200).json(count)
  } catch (error) {
    res.status(500).json(error)
  }
});


app.post('/blog/create-post', async (req, res) => {
  try {
    await createPost(req.body)
    res.status(200).json({message:"Succesfully added post!"});
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


app.get('/blog/comments/:postId',async (req, res) => {
  const { postId } = req.params;
  try {
   const data = await getAllComments(postId);
   res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
})

app.post('/blog/comment/', async (req, res) => {
  try {
    const comment = await createComment(req.body)
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

app.get('/blog/like/:postId/:userId', async (req, res) => {
  const {postId , userId} = req.params
  try {
     const post = await likePost(postId,userId)
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

app.get('/blog/likes/:postId/', async (req, res) => {
  const {postId} = req.params
  try {
     const likes = await getLikes(postId)
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))