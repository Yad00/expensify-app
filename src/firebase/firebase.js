import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set, remove, update, get, onValue, onChildRemoved, onChildChanged, onChildAdded, push} from 'firebase/database'

const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
});

const db = getDatabase(firebaseApp);

export {
  db,
  ref,
  set,
  remove,
  update,
  get,
  onValue,
  onChildRemoved,
  onChildChanged,
  onChildAdded,
  push
};

// // child removed
// onChildRemoved(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child changed
// onChildChanged(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child changed
// onChildAdded(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// onValue(ref(db, 'expenses'), (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });

//   console.log(expenses);
// });

// get(ref(db, 'expenses')).then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// setTimeout(() => {
//   push(ref(db, 'expenses'), {
//     description: 'what3 ni',
//     note: 'i dont3',
//     amount: 122,
//     createdAt: 0
//   });
// }, 3500);


// push(ref(db, 'notes'), {
//   title: 'Course topics',
//   body: 'React!'
// });

// remove(ref(db, 'notes/-Mr6L7zU3Tp2LiPJgRv-'));

// const unSubscribe = onValue(ref(db), (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//   console.log('Error with data fetching', error);
// });

// setTimeout(() => {
//   set(ref(db, 'name'), 'Mike');
// }, 3500);

// setTimeout(() => {
//   unSubscribe();
// }, 7000);

// setTimeout(() => {
//   set(ref(db, 'age'), 85);
// }, 10500);

// get(ref(db, 'location/city'))
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
// });

// set(ref(db), {
//   name: 'Yad Araz',
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title: 'IT',
//     company: 'Google'
//   },
//   location: {
//     city: 'Suli',
//     country: 'Iraq'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed~', e);
// });

// update(ref(db), {
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

//remove(ref(db));