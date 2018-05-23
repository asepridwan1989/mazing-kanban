import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyBFPLm4WrtioETuUU7_YPJSXJ4QTMaDz90",
  authDomain: "kanbanproject-42481.firebaseapp.com",
  databaseURL: "https://kanbanproject-42481.firebaseio.com",
  projectId: "kanbanproject-42481",
  storageBucket: "kanbanproject-42481.appspot.com",
  messagingSenderId: "874209630108"
})

export const db = app.database()
export const tasksRef = db.ref('tasks')
