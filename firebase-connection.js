import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { firebaseAuthConfig } from './firebaseAuthConfig';

export const firebaseConfig = firebaseAuthConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}