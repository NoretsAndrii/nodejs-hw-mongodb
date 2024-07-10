import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const app = express();

import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT);
app.listen();
