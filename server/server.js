import app from './app.js'
import connectionToDB from './config/db.js';
import {v2} from 'cloudinary'
import Razorpay from 'razorpay';

const Port = process.env.Port || 3000


// Cloudinary configuration
v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

app.listen(Port,async()=>{
    await connectionToDB();
    console.log(`App is running at https://localhost ${Port}`)
})