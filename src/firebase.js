import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDxJCiOe3f8FCN5vi9_2m-OqNCSGRs-4D0',
  authDomain: 'random-users-137e6.firebaseapp.com',
  projectId: 'random-users-137e6',
  storageBucket: 'random-users-137e6.appspot.com',
  messagingSenderId: '220345139919',
  appId: '1:220345139919:web:7c8a6737feb1b7af64adba',
  measurementId: 'G-3N0QFP8BQF',
}

const firebaseApp = firebase.initializeApp(config)

const db = firebase.firestore()
const favoriteCollection = db.collection('favorite')

export const addFavorite = (user) => {
  return favoriteCollection.add(user)
}

export const removeFavorite = (id) => {
  return favoriteCollection.doc(id).delete()
}
