import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import Note from './NotesModels.js'; 

dotenv.config();
const db = {};
db.Note=Note
db.mongoose = mongoose;
db.url = process.env.DB_CONNECTION_STRING;
db.PORT = process.env.PORT || 4000; 
db.cors=cors;


export default db;