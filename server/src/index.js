import express from 'express';
import { configDatabase } from './configs/Database.js';
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors'
import multer from 'multer'
import { register } from './service/auth.js';
import { createChallange, editChallange, getAllChallanges, getChallange } from './service/challanges.js';

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
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

app.put('/challanges/:id', async (req, res) => {
  const { id } = req.params
  try {
   await editChallange(id,req.body);
   res.status(200)
  } catch (error) {
    res.status(500).json(error)
  }
});



app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))