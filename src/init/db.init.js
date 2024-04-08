// import mongoose from 'mongoose';

// export default () => {
//     const dbName = process.env.DB_NAME;
//     const dbUrl = process.env.DB_URL || '';

//     mongoose.connect(dbUrl, { dbName })
//         .then(() => console.log('Connect to mongoDB.'))
//         .catch(error => console.log(error));

//     mongoose.connection.on('connected', () => {
//         console.log('mongoDB connected');
//     })

//     mongoose.connection.on('disconnected', () => {
//         console.log('mongoDB disconnected')
//     });

//     mongoose.connection.on('error', (error) => {
//         console.log('mongoDB: ' + JSON.stringify(error))
//     });
// }

import admin from "firebase-admin";

import serviceAccount from "../../one-time-password.json" assert { type: "json" };

import { getFirestore } from "firebase-admin/firestore";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://one-time-password-489af-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = getFirestore();
export { db };
