import {createStore, combineReducers, compose}  from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

//reduser
import notifyReducer from './reducers/notifyReducer';
//import settingReducer from './reducers/settingReducer';


const firebaseConfig = {
    apiKey: "AIzaSyBqSjdyzu869-yEm-o4mpwWaQDcO0NOWo8",
    authDomain: "react-e025c.firebaseapp.com",
    databaseURL: "https://react-e025c.firebaseio.com",
    projectId: "react-e025c",
    storageBucket: "react-e025c.appspot.com",
    messagingSenderId: "913661194996"
};

// react-redux-firebase
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  };

  //init firebase instance
  firebase.initializeApp(firebaseConfig);

  //init firestore
  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);

  // Add reactReduxFirebase enhancer when making store creator
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore);

  // Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
    notify: notifyReducer,
    //setting: settingReducer
  });

// Create store with reducers and initial state
const initialState = {};

//Create Store
const store = createStoreWithFirebase(rootReducer, initialState, compose(reactReduxFirebase(firebase), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

    export default store;