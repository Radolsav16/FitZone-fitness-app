import express from 'express';
import { configDatabase } from './configs/Database.js';
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors'
import multer from 'multer'
import { register } from './service/auth.js';
import { generateToken } from './utils/token.js';

const PORT = process.env.PORT;
const Uri = process.env.MONGO_URI;



const app = express();

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


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))