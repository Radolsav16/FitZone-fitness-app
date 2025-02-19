import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors'
import { configDatabase } from './configs/Database.js';
import router from './configs/Route.js';


dotenv.config();

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

const server = express();

server.use(express.json())
server.use(cors())


server.use(router)




await configDatabase(uri);




server.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));

