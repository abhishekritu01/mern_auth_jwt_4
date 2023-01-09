import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { config } from 'dotenv'
import Connection from './database/db.js';
import router from './router/route.js';
const app = express();
config();

//middlewere
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');


const port = process.env.PORT;

//HTTP get request
app.get('/', (req, res) => {
    res.status(201).json('Home GET request');
});

//API routes

app.use('/api',router)

/** start server only when we have valid connection */
Connection().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
